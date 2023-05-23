$(document).ready(function() {
  $.getJSON('data/KDI13.geojson', function(data) {
    L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        var iconUrl = 'img/Kyst.png'; // standard ikon
        var popupContent = '<h4>Tilladelse fra Kystdirektoratet</h4>' +
                          '<b>Stednavn:</b> ' + feature.properties.Stednavn +
                           '<br><b>Type:</b> ' + feature.properties.Type +
                           '<br><b>Formål:</b> ' + feature.properties.Formål;

        if (feature.properties.Type === 'Ålegræs tilladelse') {
          iconUrl = 'img/ålegræs u. tekst.png';
        } else if (feature.properties.Type === 'Stenrev tilladelse' ) {
          iconUrl = 'img/stenrev m. ring hvid.png';
        } else {
          return null; // returnerer null, hvis der ikke skal vises en markør
        }

        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: iconUrl,
            iconSize: [18, 18],
            iconAnchor: [5, 5]
          })
        }).bindPopup(popupContent);
      }
    }).addTo(map);
  });
});

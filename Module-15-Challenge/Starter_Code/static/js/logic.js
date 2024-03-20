// Leaflet library to create a map
// Create a base layer for the map using OpenStreetMap tiles
let basemap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

// Create the map, centered on specific coordinates and with a certain zoom level
let map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 3
});

// Add the base layer to the map
basemap.addTo(map);

// Use the D3 library to load some data in GeoJSON format
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {

    // This function will return a color based on the depth of an earthquake
    function getColor(depth) {
        if (depth > 90) {
            return "#FF0000";
        } else if (depth > 70) {
            return "#FF6701";
        } else if (depth > 50) {
            return "#FFA500";
        } else if (depth > 30) {
            return "#FBE870";
        } else if (depth > 10) {
            return "#DFFF00";
        } else {
            return "#ADFF2F";
        }
    }

    // Function will return a radius based on the magnitude of an earthquake
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        } else {
            return magnitude * 4;
        }
    }

    // Function will return a style object for a feature (an earthquake)
    function styleInfo(feature) {
        return {
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            weight: 0.6,
            opacity: 1,
            fillOpacity: 0.8
        };
    }

    // Add the GeoJSON data to the map
    L.geoJson(data, {
        // For each feature (earthquake), create a circle marker
        pointToLayer: function (feature, latlng) {
            let circleMarker = L.circleMarker(latlng, styleInfo(feature));

            // Bind a popup to the marker, showing some properties of the earthquake
            circleMarker.bindPopup(
                "<strong>Magnitude:</strong> " + feature.properties.mag +
                "<br><strong>Location:</strong> " + feature.properties.place +
                "<br><strong>Depth:</strong> " + feature.geometry.coordinates[2] + " km"
            );

            return circleMarker;
        },
    }).addTo(map);

    // Create a legend for the map
    let legend = L.control({
        position: "bottomright"
    });

    // Legend is added to the map, create a div and fill it with the appropriate colors and ranges (RED, ORANGE, YELLOW, GREEN, LIGHT GREEN, DARK GREEN)
    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend");

        let grades = [-10, 10, 30, 50, 70, 90];
        let colors = [
            "#ADFF2F",
            "#DFFF00",
            "#FBE870",
            "#FFA500",
            "#FF6701",
            "#FF0000"
        ];

        // Loop through the intervals and generate a label with a colored square for each interval
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + colors[i] + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    // Add the legend to the map
    legend.addTo(map);
});
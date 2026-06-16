import * as maplibregl from "https://esm.sh/maplibre-gl";

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.pdok.nl/kadaster/brt-achtergrondkaart/ogc/v1/styles/standaard__webmercatorquad?f=json', // style URL
    center: [5.44, 52.05], // starting position [lng, lat]
    zoom: 7, // starting zoomlevel
    minZoom: 6, // minimum zoomlevel zoom out
    maxZoom: 14 // maximum zoomlevel zoom in
});

  const searchInput = document.getElementById("search");
  const resultsBox = document.getElementById("results");

    searchInput.addEventListener("input", async () => {
      const q = searchInput.value.trim();
      resultsBox.innerHTML = ""
      if (q.length < 2) {  ; return; }

      const url = `https://api.pdok.nl/kadaster/location-api/v1/search?q=${q}&adres[version]=1`;
      const response = await fetch(url);
      const data = await response.json();
      const features = data.features || [];

      results.innerHTML = "";
      features.forEach(f => {
        const item = document.createElement("div");
        item.style.padding = "6px";
        item.style.cursor = "pointer";
        item.textContent = f.properties.display_name;
        item.onclick = () => { resultsBox.innerHTML = "" ; searchInput.value=item.textContent  ; zoomToFeature(f);  };
        resultsBox.appendChild(item);
      });
    });

     function zoomToFeature(feature) {
      const g = feature.geometry;
      if (!g) return;
      if (g.type === "Point") {
        const [lng, lat] = g.coordinates;
        map.flyTo({ center: [lng, lat], zoom: 16});
      } else {
        const coords = (g.type === "Polygon") ? g.coordinates[0] : g.coordinates[0][0];
        let minX=Infinity, minY=Infinity, maxX=-Infinity, maxY=-Infinity;
        coords.forEach(([lng, lat]) => {
          minX=Math.min(minX,lng); minY=Math.min(minY,lat);
          maxX=Math.max(maxX,lng); maxY=Math.max(maxY,lat);
        });
        map.fitBounds([[minX,minY],[maxX,maxY]], {padding:30});
      }
    }
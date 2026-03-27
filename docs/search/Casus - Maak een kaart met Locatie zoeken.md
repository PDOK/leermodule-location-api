# Maak een kaart met Locatie zoek functionaliteit

## Voorbereiding

In deze opdracht gaan we zoekfunctionaliteit toevoegen aan de voorbeeld kaart uit de leermodule ogc-api features)[https://pdok.github.io/leermodule-ogc-api/voorbeelden/tiles/]

Voor deze opdracht gaan we er van uit dat je deze voorbeeldkaart geanalyseerd heb en de bijgehoorde Casus om zelf een kaart te maken doorlopen hebt en je een ontwikkelomgeving opgezet is.  

## 2. Benodigdheden

Voor deze casus heb je nodig:

- Een moderne webbrowser  
- Een eenvoudige webserver (bijvoorbeeld `python -m http.server`)  
- Basiskennis van HTML en JavaScript  

---

# Voeg de zoekfunctionaliteit toe  aan jou kaart

## Doel van deze casus

Aan het einde van deze casus kun je:

- Een zoekveld toevoegen boven de kaart.  
- Met de PDOK Location API zoeken op basis van vrije tekst.  
- De respons verwerken en de kaart centreren op de gevonden feature (punt of polygoon).  

# Casus – Voeg een zoekcomponent toe aan een MapLibre‑kaart met de PDOK Location API

In deze casus leer je hoe je een  kaart itgebreid met
een zoekfunctie die adressen en locaties opzoekt via de **PDOK Location API (OGC API – Features)**.  
We gebruiken hierbij het `search` endpoint van de Location API om op basis van vrije tekst
features op te halen, inclusief hun geometrie.  
De geometrie gebruiken we vervolgens om de kaart naar de gekozen locatie te laten inzoomen.  

#### Pas index.html aan

**:arrow_right: Open `index.html`**

Voeg een zoekveld en een veld voor de gevonden resultaten toe aan de kaart.

---
<div id="search-container" >
    <input id="search" placeholder="Zoek adres…" " />
    <div id="results" placeholder="Gevonden locaties" > </div>
</div>

<div id="map"></div>
  </body>

**:arrow_right: Vergeet je wijzigingen niet op te slaan**

---

voeg zoek logica toe aan pagina voeg aan de mak.js de volgende code toe

**:arrow_right: Open `main.js`**

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

Voeg logica toe in de main.js voor het selecteren van een item uit de selectie lijst

**:arrow_right: Open `main.js`**

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

Test of het zoeken werkt in je browser.

## Extra Test het resultaat en vergelijk het met de kaart die we als oplossing geven

**:arrow_right: Bekijk** [../resultaat/index.html](../resultaat/index.html)

Wat zijn de verschillen tussen deze kaart en jou resultaat.

Het belangrijkste verschil is de opmaak van de pagina met CSS. CVSS valt buiten de scope van deze leermodule maar veel informatie is hier voor te vinden op internet gebruik je favoriete zoekmachine en zoek naar "Learn CSS"

Je hebt nu voldoende kennis over de Location API 

Mocht je het leuk vinden dan kan je de volgende uitdagingen doen om je kaart te verbeteren en een pull request op deze  leermodule om anderen te helpen om deze uitdagingen ook te kunnen voltooien. 

## Extra voeg de geometrie toe van de feature die geselecteerd is op de kaart

!!! warning "TO DO (please make a pull request with your solution)"

## Extra toon attribuut data van geselecteerd feature

!!! warning "TO DO (please make a pull request with your solution)"


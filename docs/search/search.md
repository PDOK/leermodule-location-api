
# Zoeken met het `/search` endpoint

Het `/search` endpoint ondersteunt tekstgebaseerd zoeken over meerdere collecties.

## Minimale query

Een eenvoudige zoekopdracht vereist alleen een zoekterm (`q`-parameter), maar geeft een opmerkelijk resultaat:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=am"
```

Wat betekend de response en wat moet je voor "foo" invullen?

De API dwingt je af om bewust te kiezen welke collecties je wilt doorzoeken. Zonder duidelijke keuze retourneert het endpoint geen resultaten. Dit beschermt tegen ongewilde zoekopdrachten over alle gegevens. Bovendien kan PDOK makkelijk nieuwe collecties toevoegen aan de API zonder dat jouw bestaande zoekopdrachten veranderen.

## Collecties activeren

Standaard zoekt het endpoint niet in alle beschikbare collecties. Een collectie wordt pas actief gebruikt in zoekopdrachten wanneer je een collection inclusief `version` toevoegt.

Voorbeeld: alleen adressen activeren:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Dam&adres[version]=1"
```

Geeft ook een opmerkelijk resultaat. Gebruik `--globoff` zodat Curl de `[` en `]` goed kan interpreteren:


```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Dam&adres[version]=1"
```

Dit zoekt alleen in de adrescollectie naar "Dam".


Meerdere collecties tegelijk:

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Rot&adres[version]=1&woonplaats[version]=1"
```

Nu worden zowel adressen als woonplaatsen doorzocht.

Zoek uit welke collecties je kan gebruiken in de zoek opdracht

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/collections"
```
Welke collecties worden het meest gebruikt en waarom? 

## Ranking met relevance

Je kunt de zoekresultaten beïnvloeden door prioriteiten in te stellen per collectie met de `relevance`-parameter:

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Maas&adres[version]=1&adres[relevance]=0.7&woonplaats[version]=1&woonplaats[relevance]=0.3"
```

Adressen krijgen hier een hogere prioriteit (0.7) dan woonplaatsen (0.3).
Bedenkt situaties waarin het beinvloeden van volgorde van de zoekresultaten nodig is in applicaties

Voorbeeld met verschillende prioriteiten:

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=utrecht&gemeentegebied[relevance]=0.1&gemeentegebied[version]=1&provinciegebied[relevance]=0.9&provinciegebied[version]=1&woonplaats[relevance]=0.1&woonplaats[version]=1&f=json"
```

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=utrecht&gemeentegebied[relevance]=0.9&gemeentegebied[version]=1&provinciegebied[relevance]=0.1&provinciegebied[version]=1&woonplaats[relevance]=0.1&woonplaats[version]=1&f=json"
```

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=utrecht&gemeentegebied[relevance]=0.1&gemeentegebied[version]=1&provinciegebied[relevance]=0.1&provinciegebied[version]=1&woonplaats[relevance]=0.9&woonplaats[version]=1&f=json"
```

Vergelijk de verschillen in volgorde tussen provincie-, gemeente- en woonplaats-prioritering.

## Bbox-filtering

Beperk zoekresultaten tot een geografisch gebied met bounding-box filtering:

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Arn&bbox=5.85,51.95,5.90,52.00&bbox-crs=http://www.opengis.net/def/crs/OGC/1.3/CRS84&woonplaats[version]=1"
```

Resultaten worden alleen teruggegeven voor locaties binnen de opgegeven coördinaten.

Zoek naar de "Veluwe" in de buurt van Tiel.

Gebruik <https://vibhorsingh.com/boundingbox/> om coordinaten te vinden.

## Andere CRS terugvragen

Ontvang zoekresultaten in een ander coördinatensysteem (CRS) bijvoorbeeld:

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Onze+Lieve+Vrouwetoren&crs=http://www.opengis.net/def/crs/EPSG/0/28992&gebouw[version]=1"
```

Dit voorbeeld retourneert coördinaten in RD (EPSG:28992) in plaats van WGS84

RD‑coördinaten hebben typische bereik:

X (oost): 0 … 300.000
Y (noord): 300.000 … 625.000

Dat betekent dat een punt met coordinaten:

X ≈ 155.000
Y ≈ 463.000

perfect in het midden van het RD stelsel ligt. Is dit toeval, dat bovenstaande zoekopdracht dit bij benadering teruggeeft?

## Complete uitgebreide query

Combineer alle parameters voor volledige controle:

```cmd
curl --globoff "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Arnhem&adres[version]=1&adres[relevance]=0.5&woonplaats[version]=1&woonplaats[relevance]=0.5&functioneel_gebied[version]=1&functioneel_gebied[relevance]=0.5&gemeentegebied[version]=1&gemeentegebied[relevance]=0.5&geografisch_gebied[version]=1&geografisch_gebied[relevance]=0.5&perceel[version]=1&perceel[relevance]=0.5&provinciegebied[version]=1&provinciegebied[relevance]=0.5"
```

Deze query zoekt in alle beschikbare collecties met gelijke prioriteit.

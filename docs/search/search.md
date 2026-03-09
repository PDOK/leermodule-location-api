
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

Standaard zoekt het endpoint niet in alle beschikbare collecties. Een collectie wordt pas actief gebruikt in zoekopdrachten wanneer je een `version`-parameter toevoegt.

Voorbeeld: alleen adressen activeren:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Dam&adres[version]=1"
```

Dit zoekt alleen in de adrescollectie naar "Dam".

Meerdere collecties tegelijk:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Rot&adres[version]=1&woonplaats[version]=1"
```

Nu worden zowel adressen als woonplaatsen doorzocht.

## Ranking met relevance

Je kunt de zoekresultaten beïnvloeden door prioriteiten in te stellen per collectie met de `relevance`-parameter:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Maas&adres[version]=1&adres[relevance]=0.7&woonplaats[version]=1&woonplaats[relevance]=0.3"
```

Adressen krijgen hier een hogere prioriteit (0.7) dan woonplaatsen (0.3).

## Bbox-filtering

Beperk zoekresultaten tot een geografisch gebied met bounding-box filtering:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Arn&bbox=5.85,51.95,5.90,52.00&bbox-crs=http://www.opengis.net/def/crs/OGC/1.3/CRS84"
```

Resultaten worden alleen teruggegeven voor locaties binnen de opgegeven coördinaten.

## Andere CRS terugvragen

Ontvang zoekresultaten in een ander coördinatensysteem (CRS):

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Utr&crs=http://www.opengis.net/def/crs/EPSG/0/28992"
```

Dit voorbeeld retourneert coördinaten in RD (EPSG:28992) in plaats van WGS84.

## Complete uitgebreide query

Combineer alle parameters voor volledige controle:

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Arnhem&adres[version]=1&adres[relevance]=0.5&woonplaats[version]=1&woonplaats[relevance]=0.5&functioneel_gebied[version]=1&functioneel_gebied[relevance]=0.5&gemeentegebied[version]=1&gemeentegebied[relevance]=0.5&geografisch_gebied[version]=1&geografisch_gebied[relevance]=0.5&perceel[version]=1&perceel[relevance]=0.5&provinciegebied[version]=1&provinciegebied[relevance]=0.5"
```

Deze query zoekt in alle beschikbare collecties met gelijke prioriteit.

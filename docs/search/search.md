
# 04 – Zoeken met het `/search` endpoint
Het `/search` endpoint ondersteunt tekstgebaseerd zoeken over meerdere collecties.

## Minimale query
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=am"
```

## Collecties activeren
Een collectie wordt pas gebruikt bij search als je `version` meegeeft.

Voorbeeld: adressen activeren:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Dam&adres[version]=1"
```

Meerdere collecties:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Rot&adres[version]=1&woonplaats[version]=1"
```

## Ranking met relevance
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Maas&adres[version]=1&adres[relevance]=0.7&woonplaats[version]=1&woonplaats[relevance]=0.3"
```

## Bbox-filtering
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Arn&bbox=5.85,51.95,5.90,52.00&bbox-crs=http://www.opengis.net/def/crs/OGC/1.3/CRS84"
```

## Andere CRS terugvragen
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Utr&crs=http://www.opengis.net/def/crs/EPSG/0/28992"
```

## Complete uitgebreide query
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Arnhem&adres[version]=1&adres[relevance]=0.5&woonplaats[version]=1&woonplaats[relevance]=0.5&functioneel_gebied[version]=1&functioneel_gebied[relevance]=0.5&gemeentegebied[version]=1&gemeentegebied[relevance]=0.5&geografisch_gebied[version]=1&geografisch_gebied[relevance]=0.5&perceel[version]=1&perceel[relevance]=0.5&provinciegebied[version]=1&provinciegebied[relevance]=0.5"
```

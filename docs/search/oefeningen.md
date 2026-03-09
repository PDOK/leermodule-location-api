
# 05 – Oefeningen
Hier vind je opdrachten om zelf met de Location API te werken.

---
## Oefening 1 – Landing page analyseren
➡️ Voer uit:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/?f=json"
```
**Vraag:** Waar kan ik locaties zoeken?

---
## Oefening 2 – Collecties onderzoeken
➡️ Gebruik:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/collections?f=json"
```
**Vraag:** Noem vijf collectienamen.

---
## Oefening 3 – Zoek woonplaatsen
➡️ Activeer zoeken alleen woonplaatsen:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Utr&woonplaats[version]=1"
```
**Opdracht:** Zoek de eerste drie letters van een willekeurige woonplaats.

---
## Oefening 4 – Zoek adressen binnen een bbox
➡️ Zoek een bbox via http://bboxfinder.com
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Ho&adres[version]=1&bbox=..."
```
**Vraag:** Hoeveel resultaten vallen binnen jouw bbox?

---
## Oefening 5 – Ranking experimenteren
➡️ Probeer:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Maas&adres[version]=1&adres[relevance]=1&woonplaats[version]=1&woonplaats[relevance]=0"
```
En daarna:
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Maas&adres[version]=1&adres[relevance]=0&woonplaats[version]=1&woonplaats[relevance]=1"
```
**Vraag:** Wat verandert er in de volgorde?

---
## Oefening 6 – Resultaten in RD
```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1-demo/search?q=Dam&adres[version]=1&crs=http://www.opengis.net/def/crs/EPSG/0/28992"
```
**Vraag:** Hoe verschillen deze coördinaten van CRS84?

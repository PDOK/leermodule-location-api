
# Landing Page bevragen

De landing page toont de hoofdingangen van de Location API.

## Voorbereiding

We gaan de API bestuderen met Curl. Hoe dit te doen kan je lezen in [Bevraag OGC API - Features met curl](https://pdok.github.io/leermodule-ogc-api/features/Bevraag%20OGC%20API%20-%20Features%20met%20curl/)

## Voorbeeld

```cmd
curl "https://api.pdok.nl/kadaster/location-api/v1/?f=json"
```

Response bevat o.a.:

- links naar `/api`
- links naar `/collections`
- links naar `/search`

## Oefening

➡️ Vraag de landingpage op en beantwoord:

1. Welke link is het belangrijkste op deze pagina?
2. Waar vind je de verwijzing naar de OpenAPI-specificatie?

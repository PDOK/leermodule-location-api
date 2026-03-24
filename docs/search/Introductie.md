# Introductie Location API

!!! abstract "Leerdoelen"

Na het afronden van dit onderdeel:

- Weet je wat geocoderen is en welke rol dit speelt binnen locatiegebaseerde diensten;
- Begrijp je hoe de PDOK Location API is opgebouwd en waarvoor je deze kunt gebruiken;
- Kun je adres‑ en locatiegegevens zoeken via de Location API;
- Kun je resultaten opvragen in verschillende coördinatenstelsels;
- Kun je brondata herkennen die door de Location API worden ontsloten;
- Kun je een eenvoudig API‑request samenstellen voor zoeken en geocoderen;
- Weet je op hoofdlijnen hoe de generieke zoekcomponent werkt en wanneer je deze kunt toepassen.

In dit onderdeel maak je kennis met de PDOK Location API, de moderne opvolger van de Locatieserver. De Location API maakt het mogelijk om snel en efficiënt locaties in Nederland op te zoeken, zoals adressen, postcodes, woonplaatsen, wegen, percelen en administratieve eenheden. De nadruk ligt op snel zoeken en direct relevante resultaten terugkrijgen.

Centraal staat het concept geocoderen: het vertalen van een tekstuele locatiebeschrijving naar exacte coördinaten. Met geocoderen kun je adressen en plaatsnamen koppelen aan een specifieke plek op de kaart, waardoor toepassingen zoals routeplanning, kaartvisualisaties, data‑analyse en locatiegebaseerde interacties mogelijk worden. 

Door gebruik te maken van informatie uit de Nederlandse basisregistraties – zoals de BAG en BRT TOP10NL – zorgt de Location API voor een efficiënte en betrouwbare ontsluiting van actuele geografische gegevens.

Eerst verken je welke soorten data je via de Location API kunt opvragen en hoe zoekresultaten zijn opgebouwd. Daarna ga je zelf aan de slag met het uitvoeren van zoekopdrachten, het opbouwen van API‑requests en het interpreteren van de teruggegeven gegevens. Tot slot leer je hoe je deze mogelijkheden in eigen toepassingen kunt benutten, bijvoorbeeld met behulp van de generieke zoekcomponent.
    - Weet je uit welke verschillende onderdelen de Location API bestaat en wat die onderdelen doen;
    - Kun je met de commandline search opvragen;
    - Kun je een API GET request samenstellen om locaties te zoeken gebruikmaken van de filtermogelijkheden van deze API   
    - Begrijp je waar de Location API gebruikt voor kan worden
    - Kun je de Location API op een webmap tonen en de gebruiker hiermee laten interacteren. 

In dit onderdeel verkennen we OGC API - Features, bevragen we deze in de commandline en maken we een interactieve kaart. 

!!! info "Je gaat werken met:

- Internetbrowser  
- API‑documentatie  
- JSON‑responses  

De nieuwe PDOK Location API biedt een toekomstvaste, snelle en gebruiksvriendelijke manier om locaties in Nederland te vinden en te gebruiken. In dit onderdeel bouw je stap voor stap de basiskennis op om de API effectief toe te passen in eigen projecten en diensten.
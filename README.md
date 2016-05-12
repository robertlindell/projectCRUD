# projectCRUD

Part of school project for a school webpage


Vad är detta?

Jag har använt mig av NodeJS, MongoDB, Mongoose, Express och Angular för att skapa en CRUD (skapa, läsa, uppdatera, tabort) funktionalitet för att kommunicera mellan en webbsida och en databas. Detta är ett projekt som är en del av min utbildning till Javascript utvecklare på Jensen education. Vad jag gjort är en nyhetssida och en jobbsida där nyheter och jobb presenteras och administreras.


Hur gör man?

Vill du starta min sida klonar du ner mitt projekt från github. 

Gå in i kommandoprompten i mappen som du klonat ner mitt projekt i 

väl där kör du:
npm install 
npm install mongoose
npm install express
npm install body-parser

Då har vi installerat det som behövs för att det ska funka.


Då kör vi!

För att starta servern och databasen: 
kör i varsitt kommandoprompt fönster:
mongo 
nodemon

Därefter kan du öppna webbläsaren och skriva in localhost:3000


Beskrivning av mitt projekt:

På förstasidan (Hem) presenteras de nyheter och jobb som finns tillgängliga. Klickar man på en rubrik, jobb eller nyhet får man hela innehållet bredvid kolumnen.

På nyhetssidan kan man också klicka på en nyhet och så dyker all info upp bredvid. Här finns också en ta bort knapp som raderar nyheten och en ändra knapp som gör att det dyker upp ett formulär för att kunna ändra på innehållet. Sök funktion finns det här som söker på nyheter.

På jobbsidan kan man klicka på ett jobb och få upp all info. Sök funktion finns också. Längst ner finns en aggregering som räknar ihop hur många jobb som finns för de olika kompetenserna.

På admin kan man lägga in nyheter och jobb i databasen genom två formulär. 
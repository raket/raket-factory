---
id: new-project
title: Skapa ett nytt projekt
---

## **Skapa nytt repository på Bitbucket**
- Logga in på bitbucket.
- Klicka på plus-ikonen i sidebaren till vänster, och välj Create a new / Repository.
- Välj sedan ‘raketwebbyra’ som Owner och välj ‘Projekt’ i Project-dropdownen.
- Fyll i projektets namn.
- Se till att ‘This is a private repository’ är ibockat, samt att ‘Repository type’ är satt till ‘Git’.
- Klicka ‘Create repository’.

## **Klona ner Stella till din dator**

- Öppna terminalen och gå dit du vill ha din projekt-mapp.
- Klona ner Stella inuti en ny mapp med namn ‘stella-v4’ med följande kommando:

Om du inte använder SSH-nycklar ( Enklaste valet )

```
git clone https://<ditt-användarnamn>@bitbucket.org/raketwebbyra/stella-v4.git
```
Om du använder SSH-nycklar
```
git clone git@bitbucket.org:raketwebbyra/stella-v4.git
```

- Byt namn på mappen till ditt projekts namn.
- Gå in i mappen via terminalen och ta bort pekningen mot Stella-repot med:
```
rm -rf .git
```

- Skapa sedan ett nytt git-repo i samma mapp med:
```
git init
```

- Lägg till ditt nyskapade bitbucket-projekts remote-URL:

Om du inte använder SSH-nycklar ( Enklaste valet )
```
git remote add origin https://<ditt-användarnamn>@bitbucket.org/raketwebbyra/<BITBUCKET-REPOTS NAMN>.git
```

Om du använder SSH-nycklar
```
git remote add origin git@bitbucket.org:raketwebbyra/<BITBUCKET-REPOTS NAMN>.git
```

- Lägg till alla Stella-filer till ditt projekts nya repository och gör en första commit med:
```
git add -A && git commit -m "Intial commit"
```

- Slutligen pusha upp de commitade filerna till ditt projekts nya repository:
```
git push -u origin --all
```

## **Installera Stellas moduler och hämta hem Wordpress .**

- Gå in i ditt nya projekts via terminalen och kör Stellas start-script:
```
./start
```

Då görs en radda saker:

- Senaste Wordpress-versionen klonas ner som en submodul i wp-mappen.
- Rakets egen ‘Site-Info’-plugin dras ner.
- ‘Raket Factory’ dras ner. Innehåller startplåt för återkommande element.
- Node-moduler installeras via npm install.
- Slutligen körs Gulp-jobbet som bygger ut css, javascript etc.

Du kan komma att behöva att skriva in ditt lösenord för att npm ska kunna göra sin grej.

## **Skapa en databas**

I detta fallet med Sequel Pro.

- Välj ‘Database / Add Database’ i menyraden.
- Skriv in namn, förslagsvis ‘wpdb_ditt_projekts_namn’.
- Välj ‘utf8’ som encoding samt ‘utf8_general_ci’ som collation. Brukar vara Default-valt.
- Klicka ‘Add’.

## **Koppla Wordpress till din databas**

- Gå tillbaka till mappen med ditt projekt och gör en kopia av ‘local-config-sample.php’.
- Byt namn på den nya filen till ‘local-config.php’.
- Fyll i dina lokala databas-uppgifter för din nyskapade databas i local-config-filen.
- ( ‘DB_NAME’, ‘DB_USER’, ‘DB_PASSWORD’ samt ‘DB_HOST’. )
- ‘DB_HOST’ behövs troligtvis inte ändras från det redan ifyllda ‘localhost’.
- Slutligen, gå till [https://api.wordpress.org/secret-key/1.1/salt](https://api.wordpress.org/secret-key/1.1/salt) och kopiera det du får upp där.
- Öppna ‘wp-config.php’ i ditt projekt och ersätt definitionerna som finns under delen ‘Salts, for security’ med de du just kopierade.

## **Sätta upp lokal host i MAMP**

- Öppna MAMP och välj ‘Hosts’ längst upp i vänstermenyn.
- Klicka på plus-tecknet längst ner i mitten-sektionen för att skapa en ny host.
- Skriv in hostnamn, förslagsvis ‘dittprojektsnamn.localhost’.
- Klicka på mapp-ikonen längst till höger i raden ‘Document root’.
- Navigera dig fram till ditt projekts mapp, markera den och klicka ‘Choose’.
- Se till att de ytterligare valen ( ‘create a database named’ och ‘copy the contents..’ ) inte är ibockade, och klicka sen ‘Create’.
- Klicka sen ‘Save’ och välj sen ‘Yes’ när MAMP frågar om du vill starta om servrarna.

## **Köra Wordpress-install**

1. Gå till [http://dittprojektsnamn.localhost](http://dittprojektsnamn.localhost/) i en webbläsare.
2. Välj språk och klicka ‘Fortsätt’.
3. Skriv in:
    - Webbplatstitel, förslagsvis ditt projekts namn.
    - Användarnamn, förslagsvis ‘raket’.
    - Epostadress, din egen epostadress, alternativt hello@raket.co.
4. Bocka inte i ‘Be sökmotorer att inte indexera denna webbplats’.
5. Skapa en ny anteckning i Evernote och klistra in användarnamn och lösenord för framtida bruk.
6. Klicka sen ‘Installera wordpress’.
7. När det är klart, logga in i Wordpress admin.
8. Välj ‘Utseende / Teman’ och aktivera Stella-temat.

## **Troubleshooting**

Om du får meddelandet ‘Error establishing a database connection’ när du försöker gå till din lokala url för att köra wordpress-install.

- Kontrollera att databasuppgifterna i ‘local-config.php’ stämmer.
- Kontrollera att Apache och MYSQL är igång i MAMP.

## **Installera iThemes**

iThemes Better WP Security är ganska bra på att blocka hackers, bottar och script-kiddies. De är också väldigt bra på att blockera requests och som inte ska blockeras. Så för att slippa upptäcka att något går fel precis när man ska lansera sidan så är det bäst att installera och konfigurera iThemes direkt.

Ladda ner och installera den senaste versionen av iThemes Pro på → [https://members.ithemes.com/login](https://members.ithemes.com/login)

**Konfigurera iThemes**

Raket har köpt iThemes Pro vilket gör att vi kan importera en konfigurationsfil men grundläggande inställningar. I Stella ligger en konfigurationsfil (itsec_options.json). Inne i iThemes pluginet finns ett Import/Export funktion där du kan ladda upp JSON-filen.
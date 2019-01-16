---
id: launch-checklist
title: Lansering - Checklista
---

## **HTTPS**

Installera HTTPS och se till så att allting fungerar som tänkt

## **Plugin**

- Installera & konfigurera iThemes (ifall det inte redan är gjort)
- Installera & konfigurera Yoast (ifall det inte redan är gjort)
- Installera & konfigurera WP-Rocket (ifall det inte redan är gjort)

## **Favicon**

Skapa en Favicon med och ladda upp.

## **Cookiebar & information om cookies**

Finns det en cookiebar och en sida som pratar om cookies? Vilken ambitionsnivå ska vi lägga oss på? Ska användaren kunna välja vilka kakor som får sparas eller ska vi bara informera om kakor? Kunden måste vara inblandad i beslutet då.

## **DNS:er**

Ska DNS:er pekas om är det bäst att sänka TTL:erna på domänerna. Sänk TTL:en till 300 eller lägre. Då ska ändringar förhoppningsvis ske på 5 minuter. Se till att sänka TTL:erna några dagar innan lansering för att vara säker på att ändringarna har propagerat genom alla DNS:er när ni väl ska peka om domänen.

## **Sitemap**

Se till så att sidan har fått en Sitemap

## **Analytics**

Installera Analytics och koppla upp det mot kundens analytics-konto.

## **Testning**

- Installera alla plugin som ska finnas på live-sidan. (Speciellt iThemes, det kan blocka mycket.)
- Testa i aktuella webbläsare. (I offerten står oftast vilken IE-version vi stödjer)
- Be någon annan testa hemsidan

## Testa i mobila enheter via LAN (MAMP PRO)

Finns en bra funktion i MAMP PRO om man behöver testa en lokal sajt på en riktig mobiltelefon/platta.

1. Öppna MAMP PRO och klicka på projektet i Hosts-listan. Gå till Name resolution i rutan till höger och kryssa i “via Xip.io (LAN only)”.
2. Kopiera URL:en som då visas under. Man behöver ersätta webbplats och WordPress-adress med denna.
3. Ta en databasdump på databasen för säkerhets skull. Gör sedan en search/replace på databasen där du byter ut din gamla lokala URL mot xip.io-url:en som du kopierade i steget ovan.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F2EF34564F72857D1DA291AB74E826AF8C13D4E58560847D0AC309056E99CE3_1511788226275_Skarmavbild+2017-11-27+kl.+14.05.52.png)

Nu kan du gå till den här adressen i en mobiltelefon för att testa sajten (måste vara på samma nätverk).

- Gå igenom punkterna “Inför utbildning” & “Inför lansering” och se ifall du gjort allt.
- Ska en domän pekas om eller flyttas? Säkerställ så att inga andra system drabbas. E-mail, tidrapportering osv.
- Har kunden ett tillfälligt Oderland-konto så ska du skriva över det på kunden.
- Ifall det är möjligt kan du peka om din Hosts-fil mot den nya servern för att testa så att allting fungerar som det ska innan ni ändrar DNS:en.
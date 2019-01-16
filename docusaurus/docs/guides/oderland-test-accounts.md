---
id: oderland-test-accounts
title: Skapa ett Oderlandkonto
---

Majoriteten av våra sidor hostas av Oderland. Vi har en specialdeal med Oderland som innebär att vi kan skapa upp testkonton som är aktiva i 90 dagar. Efter 90 dagar kommer kontot att stängas av automatiskt ifall vi inte ändrat kontot till ett fullvärdigt konto som kunden börjar betala för.

**Sluta tjata, hur skapar jag ett nytt konto?**

1. Följ någon av nedanstående länkar för att skapa ett konto. (Det är oftast företagskonto som gäller)
    1. Privatkonto - [https://www.oderland.se/clients/cart.php?a=add&pid=222](https://www.oderland.se/clients/cart.php?a=add&pid=222)
    2. Företagskonto - [https://www.oderland.se/clients/cart.php?a=add&pid=221](https://www.oderland.se/clients/cart.php?a=add&pid=221)
    3. Premiumkonto - [https://www.oderland.se/clients/cart.php?a=add&pid=78](https://www.oderland.se/clients/cart.php?a=add&pid=78)
2. Välj alternativet **Använd underdomän** och fyll i kundens namn eller något liknande. Url:en blir då exempelvis **kundnamn.hemsida.eu**. Det går att ändra till den riktiga domänen som sidan ska ligga på längre fram. Det enklaste sättet att komma igång är att använda *.hemsida.eu adressen så länge.
3. Fyll sedan i **kundens uppgifter inklusive organisationsnummer** (det är omständigt att byta i efterhand.). Istället för att fylla i kundens e-post så fyller du i en e-mail som går till Raket, exempelvis **hello+kundensnamn@raket.co** (Vi har en catch all på vår mail så du kan skriva vilken mail du vill så länge den slutar på @raket.co). På så sätt får vi alla uppgifter till kontot. När det är dags att lägga sidan live går det att ändra e-mailen till kundens e-mail.
4. Klicka på slutför beställning och vänta på att mailet med inloggningsuppgifter kommer från Oderland.
5. Skapa en ny anteckning i Evernote som du döper till kundens namn. Klistra in alla inloggningsuppgifter från Oderland.

## **cPanel**

## **SSH**

**Lägga till en ny SSH-nyckel**

1. Logga in på Oderlands cPanel
2. Gå till SSH Access
3. Klicka på Manage SSH Keys
4. Välj Import Key
5. Döp nyckeln till något passande. Exempelvis raketnu
6. Lämna fälten för private key & passphrase tomma
7. Klistra in din publika nyckel i public key-fältet. (Exempelvis raketnu’s publika nyckel)
8. Klicka på import
9. Välj Manage på nyckeln som du precis la till och välj Authorize.

**Koppla upp med SSH**

Förutsatt att du gjort stegen ovanför så att det finns en ssh nyckel på servern så ska du kunna koppla upp mot servern.

1. Om den publika nyckeln som ligger på servern hänger i hop med din privata nyckel som heter id_rsa i mappen ~/.ssh/ kan du koppla upp med följande kommando.

    `$ ssh kontonamn@hostname.oderland.se`

2. Om så inte är fallet behöver du tala om för ssh vilken privat nyckel du ska använda.

    `$ ssh -i ~/.ssh/private-key-to-use kontonamn@hostname.oderland.se`
---
id: education
title: Inför utbildning
---

## **Konton**

- Skapa ett testkonto hos Oderland och installera sidan ( Eller annan leverantör )
    - [Läs mer om hur du skapat ett konto hos Oderland här](https://www.notion.so/raketwebbyra/Skapa-ett-Oderlandkonto-71c6664815fb46b6a208b2c255d37abe)
- Skapa ett admin-konto till kunden
- Installera HTTPS/SSL ifall det är möjligt redan nu. För att slippa göra det sen. Är det en helt ny domän kan man lika väl installera SSL direkt. Jobbar du på en tillfällig domän/url så är det bättre att vänta. Det går inte att installera SSL på en [x.hemsida.eu](http://x.hemsida.eu) domän exempelvis.

## **Plugin**

- Installera & konfigurera iThemes
- Installera & konfigurera Yoast
- Installera & konfigurera WP-Rocket

## **Test**

- Testa så att allting fungerar som det ska på den nya miljön
- Testa framförallt så att Unyson fungerar. ( Unyson har en .gitignore-fil vilket kan gör så att Unyson inte fungerar.)
- Testa så att den vanliga WYSIWYG-editorns styling fungerar. Både i admin och på framsidan.

## **Förtydliga Admin**

- Dölj onödiga menyalternativ i “Simple mode” (Vårt eget tillägg som döljer vissa menyalternativ. Du hittar koden i stella/includes/class/Raket/Admin_Mode.php)
- Lägg till förklarande texter på ACF-fält & Unyson-fält
---
id: start-existing-project
title: Kom igång med ett befintligt projekt
---

Klona ner projektets Bitbucket-repo. Be att få databasdump och uploads-mapp från någon som jobbat i projektet innan.

Om Unysons page builder används i projektet behöver detta laddas ner och aktiveras manuellt. Detta görs i wp-admin → Unyson. Klicka på Download vid Page Builder (finns under Available Extensions).

Kolla vilken WordPress-version som körs på publika sajten. Checka ut samma version i wp-mappen på din lokala. Om versioner är t.ex. “4.8.6” på servern gör du följande i projektmappen lokalt:

```
cd wp
git checkout 4.8.6
```
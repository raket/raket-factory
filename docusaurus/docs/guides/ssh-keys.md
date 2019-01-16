---
id: ssh-keys
title: SSH-nycklar
---

SSH-nycklar fungerar genom att man har en privat nyckel och en publik nyckel som används för att verifiera varandra. Den publika nyckeln ska ligga på servern / bitbucket-kontot och den privata nyckeln ska du ha på din dator.

Om den publika nyckeln som ligger på servern hänger i hop med din privata nyckel som heter id_rsa i mappen ~/.ssh/ kan du koppla upp med följande kommando.

```
$ ssh kontonamn@hostname.oderland.se
```

Om så inte är fallet behöver du tala om för ssh vilken privat nyckel du ska använda.

```
$ ssh -i ~/.ssh/private-key-to-use kontonamn@hostname.oderland.se
```
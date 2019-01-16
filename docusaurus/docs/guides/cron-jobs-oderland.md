---
id: cron-jobs-oderland
title: Cron jobs hos Oderland
---

## **Cron jobs**

Cron jobs hos Oderland körs i en nedbantad miljö vilket gör att man inte har tillgång till alla kommandon man har när man är inloggad via ssh. Exempelvis kan man inte köra ett WP-CLI kommando från crontaben eftersom att **“wp”** inte finns i **/bin/sh-**skalet som körs av crontaben.

För att komma runt det problemet behöver man ändra ställa in crontaben på att köra Bash istället för SH och importera default $PATHS till miljön som crontaben kommer att köras i.

1. Ta reda på hur din $PATH variabel ser ut på servern
```
$ echo $PATH
```

2. Kopiera resultatet. Det borde se ut ungefär så här
```
$ /home/itivitic/perl5/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/opt/cpanel/composer/bin:/usr/local/easy/bin:/home/itivitic/.local/bin:/home/itivitic/bin
```

3. Öppna crontab:en
```
$ crontab -e
```

4. Gå in i “skriv läge” i VIM genom att klicka på tangenten: **i**. Lägg till följande

```
SHELL=/bin/bash
BASH_ENV="/home/{kontots namn}/.bash_profile"
PATH={Det du fick ut i steg 2}
```

5. Nu borde crontabens miljö vara väldigt lik den som du är i när du har ssh:at in till servern. Lägg till ditt cronjob under PATH=…
```
SHELL=/bin/bash
BASH_ENV="/home/{kontots namn}/.bash_profile"
PATH=/home/itivitic/perl5/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/opt/cpanel/composer/bin:/usr/local/easy/bin:/home/itivitic/.local/bin:/home/itivitic/bin
00 02 * * * cd /home/itivitic/public_html && /usr/local/bin/wp itiviti sync_jobs >> cron.log 2>&1
```
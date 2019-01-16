---
id: host-file
title: Hosts-filen
---
I din dator finns en hosts-fil som innehåller information om vilken domän som hör till vilken ip-adress. Genom att ändra i filen kan man lura sin egen dator att en domän finns på en helt annan server än vad domänens namnserver säger. Exempelvis skulle man kunna peka om google.com till vår raketserver. Då kommer alla förfrågningar från din dator till google.com att gå till vår server istället för Google’s. Att kunna ändra hosts-filen är väldigt användbart när man vill peka om en domän från en server till en annan. Då kan man testa så att sidan fungerar som tänkt innan man ändrar DNS:en.

**För att ändra din hosts-fil gör du följande.**

1. Öppna hosts-filen som super-user. ( Du kommer att få ange ditt lösenord )

```
$ sudo open /etc/hosts
```

2. Lägg till ip-adressen till servern som domänen ska pekas om till samt domännamnet längst ned i dokumentet och spara.

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1        localhost
255.255.255.255  broadcasthost
::1              localhost
fe80::1%lo0      localhost
127.0.0.1        activate.adobe.com
91.201.63.86     domanen-du-vill-peka-om.se
```

3. Pinga domänen och se så att ändringarna har slagit igenom

```
$ ping domanen-du-vill-peka-om.se
```

Om allting gått som det ska så borde pingen gå till ip-adressen som du skrev in i hosts-filen

```
PING **domanen-du-vill-peka-om.se.nu** (91.201.63.86): 56 data bytes
64 bytes from 91.201.63.86: icmp_seq=0 ttl=56 time=2.655 ms
64 bytes from 91.201.63.86: icmp_seq=1 ttl=56 time=2.323 ms
```

4. Ifall den nya servern är konfigurerad för att ta emot trafik för domänen du la till i din hosts-fil så ska du kunna surfa till domänen och hamna på den nya servern. Många gånger cachar webbläsarna vilken ip-adress en domän ligger på så ifall du fortfarande kommer till den gamla sidan får du försöka rensa cachen i webbläsaren. Man kan även gå till domänen och lägga på en query-parameter för att tvinga webbläsaren att skicka en ny DNS-förfrågan.

- En query-parameter lägger du till genom att skriva ett ?-tecken efter en domän och sedan skriva vad som helst.

```
http://domanen-du-vill-peka-om.se?skriv-vad-du-vill
```
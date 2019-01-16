---
id: share-development-db
title: Dela din databas
---

Det går att koppla upp mot en databas som finns på en annan dator i nätverket. Du behöver bara ta reda på vilken IP din dator har och tillåta anslutningar från andra enheter på nätverket. Ni behöver sitta på samma nätverk för att det ska fungera.

1. Ta reda på vilken IP din dator har. Sitter du på Rakets kontor borde den se ut ungefär som nedan. 

[](https://www.notion.so/bad5ed9ba198405a97fdfc81e62495d9#774655154603426c9ba3189f9ba172b2)

2. Tillåt anslutningar till din mysql-databas från andra datorer i MAMP

[](https://www.notion.so/bad5ed9ba198405a97fdfc81e62495d9#e055797530d748afaf3249394f2a54b8)

3. Nu måste du skapa en användare i din mysql-databas som du tillåter att ansluta ifrån en extern datorn. Välj Add user och se till så att Host = % (dvs. tillåt anslutningar från alla). Välj även "Grant all privileges on wildcard name" samt checka i alla värden under "Global privileges".

[](https://www.notion.so/bad5ed9ba198405a97fdfc81e62495d9#e4d7bae425714229a7e2d22430328d6f)

[](https://www.notion.so/bad5ed9ba198405a97fdfc81e62495d9#8cbc9ccb012d41bbbfed65c00dd23c19)

4. Spara dina ändringar och starta om Mysql i MAMP.

5. Nu ska en annan dator i nätverket kunna ansluta till din datorbas. Öppna valfritt program och testa att ansluta till databasen med användaren du skapade i databasen och IP:n du hittade i första steget.

Testa anslutningen via bash. Byt ut IP:n och remote_user mot rätt värden. Får du upp en lösenordsprompt är du hemma!

    mysql 10.0.1.8 -u remote_user -p

WordPress - Exempel

    define( 'DB_NAME', 'database_name' );
    define( 'DB_USER', 'remote_usuer' );
    define( 'DB_PASSWORD', 'your-password' );
    define( 'DB_HOST', '10.0.1.8' );
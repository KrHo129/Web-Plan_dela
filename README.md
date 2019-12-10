# Spletna stran za pomoč pri ustvarjanju dvosmenskega tedenskega plana

https://plan-dela.herokuapp.com/

<img src="https://raw.githubusercontent.com/KrHo129/Web-Plan_dela/master/screenShot%20demo.png" alt="example_image"/>

______________________
Za backend uporabljen Express framework.
Poleg tega uporabljeni še:
 - express-form-data
 - validate
 - mariadb
 
______________________
Frontend ne vsebuje skorajda nobenih knjižnic. Uporabljena zgolj knjižnica za izvoz v Excel ali PDF obliki
DataTables - https://datatables.net/'>https://datatables.net/

______________________
Podatki se shranjujejo v MySql bazo https://remotemysql.com

______________________
Spletna stran deluje preko platforme Heroku - https://www.heroku.com/
Ker je trenutno uporabljen brezplačen plan, server za spletno stran "zaspi" po 30 min neaktivnosti. Ko uporabnik ponovno želi dostopati do spletne strani, ki trenutno "spi", mora počakati nekaj sekund (maximalno 20 sec), da se spletna stran odzove.

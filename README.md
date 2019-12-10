# Spletna stran za pomoč pri ustvarjanju dvosmenskega tedenskega plana

Spletna stran še vedno v razvoju

______________________
https://plan-dela.herokuapp.com/

Za namene testiranja se lahko uporabi uporabnika "test" z geslom "111111"
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
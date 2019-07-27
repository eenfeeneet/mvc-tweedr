/*
test queries
*/

\! echo "\nshow hosts table\n";
\! echo "\nSELECT * FROM hosts;"
SELECT * FROM hosts;
\! echo "\nshow apartments table\n";
\! echo "\nSELECT * FROM apartments;"
SELECT * FROM apartments;
\! echo "\nshow guests table\n";
\! echo "\nSELECT * FROM guests;"
SELECT * FROM guests;
\! echo "\nshow linked table\n";
\! echo "\nSELECT * FROM accomslog;"
SELECT * FROM accomslog;

\! echo "\nSHOW WHERE {guest_id=4 (G-dragon)} stayed\n";
\! echo "\nshow apartment name & guest name\n";

\! echo "SELECT accomslog.guest_id, guests.name, apartments.name"
\! echo "FROM accomslog"
\! echo "INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)"
\! echo "INNER JOIN guests ON (accomslog.guest_id = guests.id)"
\! echo "WHERE accomslog.guest_id = 4;\n"
SELECT accomslog.guest_id, guests.name, apartments.name
FROM accomslog
INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)
INNER JOIN guests ON (accomslog.guest_id = guests.id)
WHERE accomslog.guest_id = 4;


\! echo "\nSHOW WHO STAYED IN {apartment_id=2 (Bukit Timah)} stayed\n";
\! echo "\nshow apartment name, host name & guest name\n";
\! echo "SELECT accomslog.apartment_id, hosts.name, apartments.name, guests.name"
\! echo "FROM accomslog"
\! echo "INNER JOIN hosts ON (accomslog.host_id = hosts.id)"
\! echo "INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)"
\! echo "INNER JOIN guests ON (accomslog.guest_id = guests.id)"
\! echo "WHERE accomslog.apartment_id = 2;\n"
SELECT accomslog.apartment_id, hosts.name, apartments.name, guests.name
FROM accomslog
INNER JOIN hosts ON (accomslog.host_id = hosts.id)
INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)
INNER JOIN guests ON (accomslog.guest_id = guests.id)
WHERE accomslog.apartment_id = 2;


\! echo "\nSHOW WHO STAYED IN {apartment_id=2 (Bukit Timah)} stayed\n";
\! echo "\nshow apartment name, host name & guest name\n";
\! echo "SELECT accomslog.apartment_id, hosts.name, apartments.name, guests.name"
\! echo "FROM accomslog"
\! echo "INNER JOIN hosts ON (accomslog.host_id = hosts.id)"
\! echo "INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)"
\! echo "INNER JOIN guests ON (accomslog.guest_id = guests.id)"
\! echo "WHERE accomslog.apartment_id = 2;\n"
SELECT accomslog.host_id, hosts.name, apartments.name, guests.name
FROM accomslog
INNER JOIN hosts ON (accomslog.host_id = hosts.id)
INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)
INNER JOIN guests ON (accomslog.guest_id = guests.id)
WHERE accomslog.host_id = 1;
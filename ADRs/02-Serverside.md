# Entscheidung auf der Server-Seite
* Status: akzeptiert 
* Entscheider: Javad Alamdar 
* Datum: 27.04.2021

Technische Geschichte: Im Modul Webtechnologie in Sommersemester 2021 haben wir ein Projekt, nämlich das Beiboot-Projekt. Im ersten Schritt sollen wir einen Client und eine Server Komponente entwickeln werden . Alle 2 Wochen bekommen wir eine neue Aufgabe (Issues) und entwickeln dieses Projekt Schritt für Schritt.

# Kontext und Fragestellung

Es ist zu wichtig, welche Programmiersprache beziehungsweise welches Framework wir verwenden wollen, denn meine Auswahl muss das Routing und die Bereitstellung der Bilder ermöglichen. weitere Informationen finden Sie in den [Issues #1](https://github.com/mi-classroom/mi-master-wt-beiboot-2021/issues/1)


# Berücksichtigte Optionen

* [Node.js](https://nodejs.org/en/)
  * [Express js](https://expressjs.com/de/) 
  * [Meteor](https://www.meteor.com/)
  * [Loopback](https://loopback.io/)

* [PHP](https://www.php.net/)
  * [Laravell](https://laravel.com/)

* [Python](https://www.python.org/)
  * [Django](https://www.djangoproject.com/)
  * [Flask](https://flask.palletsprojects.com/en/1.1.x/)



# Entscheidung Ergebnis

Für die serverseitige Verwendung wurde [Node.js](https://nodejs.org/en/) gewählt, weil [Node.js](https://nodejs.org/en/) eine allgemeine JavaScript Laufzeitumgebung mit vielen Open Source Modulen ist, die verwendet werden können. Außerdem können wir mit den APIs von [Node.js](https://nodejs.org/en/) auf das lokale Dateisystem zugreifen und Daten über http-Anfragen an den Client liefern. Ein weiterer Grund ist, dass Einfacher zu bedienen, da Backend und Frontend die gleiche Sprache verwenden.
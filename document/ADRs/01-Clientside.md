# Entscheidung auf der Client-Seite
* Status: akzeptiert 
* Entscheider: Javad Alamdar 
* Datum: 15.08.2021

Technische Geschichte: Im Modul Webtechnologie in Sommersemester 2021 haben wir ein Projekt, nämlich das Beiboot-Projekt. Im ersten Schritt sollen wir einen Client und eine Server Komponente entwickeln werden . Alle 2 Wochen bekommen wir eine neue Aufgabe (Issues) und entwickeln dieses Projekt Schritt für Schritt.

## Kontext und Fragestellung

Es ist zu wichtig, einen Framework für die Implementierung des Frontends auszuwählen. Die Entwicklung der Frontend Komponenten wird mit dem Vue.js Framework durchgeführt.

weitere Informationen finden Sie in den [Issues #1](https://github.com/mi-classroom/mi-master-wt-beiboot-2021/issues/1)

## Berücksichtigte Optionen Framework

* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular.js](https://angularjs.org/)

## Vor- und Nachteile der Optionen

### [React.js](https://reactjs.org/)

#### Pro  

* Anstatt die gesamte App herunterzuladen, bevor die Benutzer sie nutzen können, können Sie mit Code-Splitting Ihren Code in kleine Teile aufteilen, die dann bei Anforderung geladen werden können.
* Den Entwicklern helfen auf verschiedenen Suchmaschinen leicht navigieren zu können 
* Jede Komponente kann überall im Projekt frei definiert werden, indem ihr ein bestimmter einzigartiger Status zugewiesen wird.
* Unterstützt alle gängigen Browser.
* In React werden Templates mit JSX geschrieben
* Ist die JSX-Syntax-Erweiterung, die eine hervorragende Wiederverwendbarkeit bietet.
* React verwendet [Jest](https://jestjs.io/) als Test-Runner.

#### Contra

* In manchen Fällen müssen visuelle Stile von Bootstrap (oder einem vergleichbarem Paket) angepasst werden.
* Es bietet keine Hausmittel an, um das Styling von Anwendungen mittels CSS zu erleichtern.
* Die empfohlene Entwicklungssprache JSX muss meist noch erlernt werden.
* React alleine reicht oft nicht aus um eine Webapplikation zu erstellen, weshalb die Verwendung zusätzlicher Bibliotheken in den meisten Fällen empfehlenswert ist.

### [Angular.js](https://angularjs.org/)

#### Pro

* Durch die Einführung von Werkzeugen wie dem Kommandozeilenwerkzeug Angular-CLI können Projekte schneller erstellt, erweitert und in Produktion überführt werden.
* Angular Templates sind HTML-Strukturen.

#### Contra

* Wenn ein User JavaScript im Browser deaktiviert hat, ist die Verwendung einer JavaScript-basierten SPA nicht möglich. Außerdem werden alte oder unbekannte Browser manchmal nicht unterstützt.
* Um alle Änderungen am DOM zu erfassen, erstellt Angular für jede Bindung einen Watcher.
* Um mit Angular arbeiten zu können, benötigt es eine gewisse Einarbeitungszeit.


### [Vue.js](https://vuejs.org/)

#### Pro

* Bisher habe ich noch keine Erfahrung mit diesem Framework, so dass ich mein Wissen erweitern und während des Projekts lernen konnte.
* Ist nur 20 Kilobyte size, was es für Entwickler einfacher macht, Dateien sofort herunterzuladen. 
* Ermöglicht die Verwendung von wiederverwendbaren Komponenten. 

#### Contra

* Möglicherweise Probleme mit ios und Safari auftreten.

## Entscheidung Ergebnis

Es wurde bereits viel recherchiert, mit dem Ergebnis, dass die Frameworks [React.js](https://reactjs.org/) und [Vue.js](https://vuejs.org/) besonders geeignet sind. Tatsächlich sehen die Vor- und Nachteile bei allen Frameworks ähnlich aus und für mich gibt es keine grundlegenden Unterschiede. Daher könnte ich  nicht nur Technische Gründe, sondern auch Persönliche Entscheidungen und die Präferenzen berücksichtigen. Ich persönlich habe mich für das [Vue.js](https://vuejs.org/) Framework entschieden, weil ich während des Projekts mein Wissen erweitern und lernen könnte.
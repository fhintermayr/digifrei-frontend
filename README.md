# Digifrei Frontend

## Inhaltsverzeichnis
- [Vorwort](#vorwort)
- [Setup](#setup)
  - [Voraussetzungen](#voraussetzungen)
  - [Download und Installation](#download-und-installation)
- [Anpassungen vornehmen](#anpassungen-vornehmen)
  - [Voraussetzungen](#voraussetzungen-1)
  - [Anpassung der Backend-URL](#anpassung-der-backend-url)
  - [Lokales Starten der Anwendung](#lokales-starten-der-anwendung)
  - [Erstellen eines Builds](#erstellen-eines-builds)
- [Benutzerhandbuch](#benutzerhandbuch)
  - [Erstellen eines neuen Benutzers](#erstellen-eines-neuen-benutzers)
  - [Verwalten von Benutzern und Fachdiensten](#verwalten-von-benutzern-und-fachdiensten)
  - [Abteilungen verwalten](#abteilungen-verwalten)
  - [Anträge einreichen](#anträge-einreichen)
  - [Anträge verwalten](#anträge-verwalten)

## Vorwort
Es empfiehlt sich zuerst die Backend-Anwendung zum Laufen zu bringen, da die Frontend-Anwendung auf diese zugreift. 
Die Anleitung dazu befindet sich im [Backend-Repository](https://github.com/fhintermayr/digifrei-backend).

## Setup

### Voraussetzungen
- Webserver (getestet mit Apache Version 2.4.58 via Docker)

### Download und Installation
Der fertige Build der Anwendung kann im GitHub-Repository unter [Releases](https://github.com/fhintermayr/digifrei-frontend/releases) heruntergeladen werden.
Die Datei muss nur entpackt und in das Root-Verzeichnis des Webservers verschoben werden.
Der Webserver muss letztendlich nur auf die `index.html` Datei verweisen.

## Anpassungen vornehmen
### Voraussetzungen
- Node.js (getestet mit Version 16.20.2)
- npm (getestet mit Version 8.19.4)

### Anpassung der Backend-URL
Die URL des Backends kann in der Datei `src/environments/environment.prod.ts` angepasst werden.
Für die lokale Entwicklung kann die URL in der Datei `src/environments/environment.ts` angepasst werden.

### Lokales Starten der Anwendung
Zum Starten der Anwendung muss zuerst das Projekt mit `npm install` installiert werden.
Damit werden alle benötigten Abhängigkeiten installiert.

Anschließend kann die Angular-Anwendung mit `npm start` gestartet werden. 
Dadurch wird ein lokaler Webserver gestartet, der die Anwendung unter `http://localhost:4200` zur Verfügung stellt.

### Erstellen eines Builds
Auch hier müssen zuerst alle Abhängigkeiten mit `npm install` installiert werden.

Wenn alle Anpassungen vorgenommen wurden, kann ein Build der Anwendung mit `npm run build` erstellt werden.
Der Build wird im Verzeichnis `dist/digifrei-frontend` erstellt und kann anschließend in das Web-Root-Verzeichnis des Webservers verschoben werden.

## Benutzerhandbuch
Hier werden kurz die grundlegenden Funktionen der Anwendung erklärt.

### Erstellen eines neuen Benutzers
Ist man als Ausbilder angemeldet, so kann man oben rechts mit dem Klick auf das Profilbild ein Dropdown-Menü öffnen.
Über dieses gelangt man in den Admin-Bereich. Über den Punkt **Benutzer registrieren** gelangt man zum Registrierungsformular.

Hinweis: Für den Benutzer-Typ **Azubi** muss neben einer Abteilung vorher zusätzlich ein Fachdienst angelegt werden. Dieser kann im Admin-Bereich unter **Fachdienst registrieren** angelegt werden.

### Verwalten von Benutzern und Fachdiensten
Über den Punkt **Benutzer verwalten** gelangt man zu einem Suchformular. Hier können Benutzer nach Name oder E-Mail gesucht werden.
Im Tab **Profil** können die allgemeinen Benutzerinformationen bearbeitet werden. Im Tab **Sicherheit** können das Passwort geändert und der Benutzer gelöscht werden.

Ähnlich verhält es sich mit dem Fachdienst im Menüpunkt **Fachdienst verwalten**.

### Abteilungen verwalten
Hier können Abteilungen angelegt und bearbeitet werden. Aufgrund mangelnder Zeit gegen Projektende wurde die Funktion zum Löschen von Abteilungen nicht mehr implementiert.
Alle noch zu erledigenden Aufgaben sind im GitHub-Repository unter [Issues](https://github.com/fhintermayr/digifrei-frontend/issues) zu finden.

### Anträge einreichen
Änträge können nur von Azubis eingereicht werden. Diese haben in der Antragsübersicht einen Button namens **Neuen Antrag einreichen**.
Über diesen gelangen sie zum Antragsformular. Ein Antrag kann nicht eingereicht werden, solange nicht die Pflichtfelder ausgefüllt sind und die Checkbox angewählt wurde.
Der eingereichte Antrag ist nun in der Antragsübersicht zu finden.

### Anträge verwalten
Anträge können nur von Ausbildern verwaltet werden. Die Anträge ihrer Abteilung sind in der Antragsübersicht zu finden.
Die Anträge können über den Button oben rechts im Antrag bearbeitet werden.
Unter den Antragsdetails befindet sich ein Button, über den der Antrag genehmigt oder abgelehnt werden kann.

# Dashboard

## Prerequisite

* NodeJS need to be installed
* Bower need to be installed 

## Steps

* Use git clone or download project from GIT
* Run **npm install** to install all dependencies (Internally this run bower install as well).
* Run **npm start** to start server in development mode.
* Use **http://localhost:8000** to vist dashboard.

## Data Provider and Customization

### With Node Based REST API

* Follow instruction given in **https://github.com/gahoiv/NodeBasedRestAPI** to run node server.

### With dummy data

* Install static http-server using **npm install http-server** command
* cd /ReportsData
* run command **http-server-p 8001**
* change **/app/services/data-provider.js** update **env='test'**
* Incase user want to change top resulst to show. Update  **number=toCount** in **/app/services/data-provider.js** 
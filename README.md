# Social One
Social One is a web semantic that provide reliable information about social media from many people to connecting each other. This website provides features for searching social media accounts using the SPARQL implementation

## Development Progress
- [x] Build Apache Jena Fuseki Server
- [x] Desain Mockup for Website
- [x] User Inteface
- [x] Route to Not found Page if result not found
- [x] Dummy dataset (user.ttl)
- [x] Query Select all data for landing page
- [x] Query for Search name 

## Installation
### Node.Js
1. Download Node.js installer
2. Install Node.js and NPM (see.. https://nodejs.org/en/docs/)
3. Install - Use XAMPP
4. Start Apache and Mysql service on your xampp control panel
5. Clone https://github.com/kazuzukan/social-one.git into your directory
6. Run NPM start on your terminal

```bash
$ npm start
```
10. Go to your browser, input http://127.0.0.1:3000/
11. You will see main page Social-One

### Apache Jena Fuseki
1. Download Apache Jena Fuseki in https://jena.apache.org/download/
2. Install to your directory.
3. run fuseki-server.bat
4. Go to your browser, input http://127.0.0.1:3030/


## How To Use
### Upload Dataset
1. Go to http://127.0.0.1:3030/ after Apache Fuseki jena started
2. klik manage dataset, and make new one. 
3. Upload data from dataset folder

```bash
user.ttl
```
4. Wait until upload data success.

### Search user data 
1. After run npm start, go to your browser, input http://127.0.0.1:3000/
2. Search name in search bar (ex: Risyad with Uppercase)

## API
Apache Jena Fuseki URL: http://127.0.0.1:3030/
### API for query
```bash
${URL}/socialone/query
```

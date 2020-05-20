# Social One
Social One is a web semantic that provide reliable information about social media from many people to connecting each other. This website provides features for searching social media accounts using the SPARQL implementation

## Development Progress
- [x] Build Apache Jena Fuseki Server
- [x] Desain Mockup for Website
- [x] User Inteface 80%
- [x] Route to Not found Page if result not found
- [x] Dummy data for passing to User Interface

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
11. If you see that, then pinjemin server is already running
```json
{"Hello":"Welcome to Social-One"}
```

### Apache Jena Fuseki
1. Download Apache Jena Fuseki in https://jena.apache.org/download/
2. Install to your directory.
3. run fuseki-server.bat
4. Go to your browser, input http://127.0.0.1:3030/

## API
Apache Jena Fuseki BASE URI http://127.0.0.1:3030/

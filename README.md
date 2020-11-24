# HerokuTest

Very basic project consisting of a backend and a frontend in separate folders.

This project is used as a continuous integration example. 

## Technologies 
- **Backend :** NodeJs / Express
- **Frontend :** Angular
- **Automated tests and deployement :** GitHub Actions
- **Hosting :** Heroku 

## ToDo 

- [X] Initialize gitHub repository

- [ ] Setup basic **backend** in NodeJs & Express
    - [X] nodemon 
    - [X] create very basic api 
    - [ ] add unit-tests
- [ ] Setup basic **frontend** in Angular 
    - [ ] welcome page
    - [ ] simple route to page 2
    - [ ] add button
        - [ ] fetch data from api 
        - [ ] display data 
    - [ ] add unit-tests

- [ ] run all locally (manually)
- [ ] serve Frontend from backend 

- [ ] Initialize Heroku app 
- [ ] create github action -> on push to master
    - [ ] build frontend
    - [ ] move dist/build from frontend to backend ? 
    - [ ] build backend
    - [ ] push to heroku 

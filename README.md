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

- [X] Setup basic **backend** in NodeJs & Express
    - [X] nodemon 
    - [X] create very basic api 
    - [X] add unit-tests
- [ ] Setup basic **frontend** in Angular 
    - [X] welcome page
    - [X] Cars page
      - [X] fetch data from API on page load
      - [X] display data
      - [X] spinner while data load
    - [ ] add unit-tests

- [ ] run all locally (manually)
- [ ] serve Frontend from backend 

- [ ] Initialize Heroku app 
- [ ] create github action -> on push to master
    - [ ] build frontend
    - [ ] move dist/build from frontend to backend ? 
    - [ ] build backend
    - [ ] push to heroku 

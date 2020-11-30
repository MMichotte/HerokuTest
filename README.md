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
- [X] Setup basic **frontend** in Angular 
    - [X] welcome page
    - [X] Cars page
      - [X] fetch data from API on page load
      - [X] display data
      - [X] spinner while data load
    - [X] add unit-tests
    - [ ] advanced unit-tests
- [ ] add end-to-end tests ?

- [X] run all locally (manually)
- [X] serve Frontend from backend 

- [X] Initialize Heroku app 
- [ ] create github action -> on push to master
    - [X] test frontend
    - [X] build frontend
    - [X] move ./dist from frontend to backend 
    - [X] test backend
    - [ ] build backend ?
    - [X] push to heroku 

**Phase 2 :**
- [X] add postgreSQL database on Heroku
- [X] set ENV variables to configure app
- [ ] use postgres db in backend to store data
  - [ ] CRUD on cars
  - [ ] status handling
  - [ ] tests

## Issues :
- Heroku push not working if app was created beforehand. (solved ✅)
  - app must be created with the `akhileshns/heroku-deploy@v3.3.6` workflow.
- On app creation w/ `akhileshns/heroku-deploy@v3.3.6`, region is set to US. (How to change to EU?) (solved ✅)

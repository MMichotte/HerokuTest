# HerokuTest

Very basic project consisting of a backend and a frontend in separate folders.

This project is used as a continuous integration example. 

## Technologies 
- **Backend :** NodeJs / Express
- **Frontend :** Angular
- **DataBase :** PostgreSQL
- **Automated tests and deployement :** GitHub Actions
- **Hosting :** Heroku 

## ToDo 

**Phase 1 :**
- [X] Initialize gitHub repository
>
- [X] Setup basic **backend** in NodeJs & Express
    - [X] nodemon 
    - [X] create very basic api 
    - [X] add unit-tests
>
- [X] Setup basic **frontend** in Angular 
    - [X] welcome page
    - [X] Cars page
      - [X] fetch data from API on page load
      - [X] display data
      - [X] spinner while data load
    - [X] add unit-tests
    - [ ] advanced unit-tests
>
- [X] Run all locally (manually)
- [X] Serve Frontend from backend 
>
- [X] Initialize Heroku app 
- [X] Create github action -> on push to master
    - [X] test frontend
    - [X] build frontend
    - [X] move ./dist from frontend to backend 
    - [X] test backend
    - [ ] ~~build backend ?~~
    - [X] push to heroku 

**Phase 2 :**
- [X] Use ENV variables to configure app
- [X] Create local postgreSQL database
- [ ] Use DB to store data
  - [ ] CRUD on cars
  - [ ] status handling
- [X] Add unit-tests with a mock database (**❗️ no localhost ❗️**)
>
- [X] Create postgreSQL database on Heroku and only use it in prod
>
- [ ] Add end-to-end tests

## Issues :
- (✅ **solved**) ~~Heroku push not working if app was created beforehand.~~ 
  - ~~app must be created with the `akhileshns/heroku-deploy@v3.3.6` workflow.~~
- (✅ **solved**) ~~On app creation w/ `akhileshns/heroku-deploy@v3.3.6`, region is set to US. (How to change to EU?)~~

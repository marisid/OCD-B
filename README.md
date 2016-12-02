# OCD-B (Open Code DataBase)

A platform for writing and sharing reviews of coding resources. Available online at ...  

## Installation instructions

- Clone this repo and `cd` into it
- Install Postgres ([see here for instructions](https://github.com/dwyl/learn-postgresql))
- Enter Postgres command line tool (`psql postgres` on Mac)
- Create database by typing `CREATE DATABASE ocdb;`
- Ask us for the database password
- Add user 'adminocdb' and assign as the owner of the database:  
  `CREATE USER adminocdb WITH SUPERUSER PASSWORD 'password-here';`  
  `ALTER DATABASE ocdb OWNER TO adminocdb;`
- Create a `config.env` file with the following two lines:  
  `export DB_URL = postgres://adminocdb:password-here@localhost:5432/ocdb`  
  `export DB_MAX_CONNECTIONS = 2`  
- Run `npm install` to install all dependencies
- Run `npm run build` to build the database
- Run `npm start` to start the server
- Navigate to `http://localhost:4000/` in your browser

## General objectives

- Build a Hapi app
- Implement a Postgres database
- Implement login and authentication
- Make use of JOIN queries
- Make use of HTML templates
- Use test driven development
- Host the project on Heroku

## User stories

- I can log in
- I can see a list of recent reviews
- I can see a list of reviewed resources
- I can create, edit and view my own reviews
- I can see a list of reviews of a particular resource
- I can click on a listed review to read it

## Daily progress

- [Tuesday](https://github.com/NodeGroup2/OCD-B/issues/11)
- [Wednesday](https://github.com/NodeGroup2/OCD-B/issues/24)
- [Thursday](https://github.com/NodeGroup2/OCD-B/issues/33)

## Front-end design

![](images/frontend-design.jpg)

## Database structure

Table 1: Users

| :key: user_id | username | password | experience |
| :--- | :--- | :--- | :--- |
|   |   |   |   |

Table 2: Resources

| :key: resource_id | title | language | source | url | average_rating |
| :--- | :--- | :--- | :--- | :-- | :--|
|   |   |   |   |   |   |

Table 3: Reviews

| :key: review_id | time_stamp | rating | summary | description | :lock: user_id | :lock: resource_id |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|   |   |   |   |   |   |   |

## Endpoints

`/` and `/login` : main page, login page  
`/register` :  registration page  
`/account/?user=` : main user page  
`/account/addreview/?resource=...` : user page to add resource review   
`/account/reviewform/`: user page to access review form

## Testing

- Back-end unit tests (Tape)
- Code coverage (Istanbul)
- Stretch goals: Travis, Nightwatch, database tests

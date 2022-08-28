# Anaaam
A MERN based secret messaging app
## Technologies
* React
* MongoDB/Mongoose
* Express
* Axios
* JWT
* Node.js

## Features
* Allows users to register and login using JWT tokens
* Each registered user gets a personal sharable link for others to post secret messages
* The users can view the messages on their dashboard and also delete them
* User accounts and tasks are stored within a MongoDB database
* Both backend and frontend are hosted on Heroku

## Build/Deploy
To run the app locally, clone the repo and install the app using: 
```
  > git clone https://github.com/tBSE12/anaaam.git
  > cd anaaam
  > npm i
```
To run the client only
```
  > npm run client
```
To run the backend only
```
  > npm run server
```
To run both at the same time
```
  > npm run dev
```
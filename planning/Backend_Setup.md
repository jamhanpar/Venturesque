# Run NPM install
npm install

# Add a ./config/keys.js
Add MongoURI connection with personal password

# Create .env 
Include API keys for various APIs

# Ensure client proxy
Add "proxy": "http://localhost:5000/" to package.json file in client folder


# User Authentication Setup
## Npm install necessary packages
    - npm i express jsonwebtoken bcrypt body-parser cors mongoose dotenv
        - express
        - bcrypt
        - body-parser
        - jsonwebtoken
        - mongoose
        - cors
        - dotenv
    - npm i -D nodemon
        - nodemon
## Database
- Setup and connect MongoDB
## Model
- create database schema to define a user registration and login
## Routes, Controllers, Utils
- setup two API routes (signup & signin) using jsonwebtoken for authentication and build input validation without any dependencies
## Testing APIs
- test API routes using postman
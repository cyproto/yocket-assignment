## Overview
The project contains 2 ways of storing data one is db another is a file storage. It uses express as the major web framework, pg for connecting with postgres db, validator for validations and dotenv to get env variables.

## Routes
### /event (GET)
Returns all the events in the following format based on the type of event it is.
```json
{
    "upcoming": [ all upcoming events ],
    "live": [ all live events ]
}
```

### /event (POST)
Create a new event with the following body:
```json
{
    "name": "Upcoming 13",
    "start_datetime": 1653988506,
    "duration": 60
}
```

## File structure
### controllers:
	Contains the business logic, for both get and post events. 
### middlewares:
	Contains middlewares that will be run based on the requirement. Ideally they are called before the controllers are called.
### misc:
	DDL for db and table creation.
### models:
	Just a basic constructor for event which returns a Event object. In the long run this should also have CRUD operations along with the custom queries related to this entity.
### routes:
	Routing for events entity.
### validators:
	Contains all the validators that are requried while inserting/updating data on any entity.

## Config
- .env.dummy contains all the environment variables for database connection.
- app.js is entry point for the app
- To run the app on local:
	1. 		git clone https://github.com/cyproto/yocket-assignment.git
	2. 		cd yocket-assignment
	3. 		npm install
	4. 		Open misc folder and run the SQL given in PostgreSQL CLI/DBeaver/any client side SQL tool
	5. 		Run nodemon app.js
	6. 		The app should be running on http://localhost:3000
	7. 		While sending any required add a header with key and value as: auth => qwer1234
	8. 		Hit http://localhost:3000/event with GET to get the events and POST to insert an event.
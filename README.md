# SNACK RANKING API

This application allows users to manage and rank different snacks. They are able to retrieve all the snacks stored in the database with their corresponding details, add a new snack, delete a specific one, update votes, as well as find the highest-ranked snack.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- JavaScript
- Docker

## Project Setup

Before running the application, make sure you have installed:

- Node.js
- PostgreSQL (if running the application locally)
- Docker (if running the application in a container)

## Install required libraries

1. Clone the GitHub Repository:
   `git clone <repository-url>`

2. Make sure you are in the project directory containing package.json:
   `cd api`

3. Install required dependencies:
   `npm install`
   `npm i express`

4. Set Up the Database
   Run the following command to create and initialise the database:
   `npm run setup-db`

## How to run the server

1. Create a .env file in the root directory and configure the required environment variables:
   PORT=3000
   DB_URL=your_postgresql_connection_string

2. Open the terminal in the project directory and start the server:
   `node index.js`

3. Open a browser or an API testing tool such as Thunder Client or Postman and navigate to:
   `http://localhost:3000`

To retrieve all snacks, send a GET request to:
`http://localhost:3000/snacks`

## Running with Docker

The project includes a Dockerfile which allows the API to be built and run inside a Docker container.

The steps to build a custom image using the Dockerfile file & run a container based on that image:

1. Install and start Docker Desktop, or use another environment that supports Docker commands.

2. Build the Docker Image

From the project root directory, run:
`docker build -t snack-api`

This builds a custom Docker image called snack-api using the instructions in the Dockerfile.

3. Run the Docker Container

Run:
`docker run -p 3000:3000 --env-file .env snack-api`

This starts a container using the custom image and maps port 3000 inside the container to port 3000 on your local machine.

4. Access the API

Once the container is running, access the application at:

`http://localhost:3000`

You can also test the endpoints using Thunder Client or Postman.

## Future features to implement on the application & their benefits

- Feature 1:
  Snack Categories: Organising snacks into categories (such as sweets and fruits) to make browsing and filtering easier.

- Feature 2:
  Automates Testing: Adding automated unit and integration tests to identify bugs easier and more efficiently.

- Feature 3:
  Search and Filtering: Adding a feature with search by name or number of votes etc. It would make searching for specific snacks much easier.

## Bugs

There are no bugs left on this application.

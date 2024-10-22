Africa Mobile Champs (AMC)

Hosted URL: Africa Mobile Champs
Description

Africa Mobile Champs (AMC) is a platform built for managing and organizing esports tournaments, players, and teams. The app allows admins to create tournaments, track players, and assign teams, while players can view team details and track their performance.
Tech Stack

    Frontend: React, Vite, Tailwind CSS
    Backend: Express.js, Node.js
    Database: MongoDB (Using Mongoose for schema management)
    Hosting: Vercel for frontend, MongoDB Atlas for database
    APIs: Custom REST API for player and team management


    Here’s a template for your README.md file based on your project setup:
Africa Mobile Champs (AMC)

Hosted URL: Africa Mobile Champs
Description

Africa Mobile Champs (AMC) is a platform built for managing and organizing esports tournaments, players, and teams. The app allows admins to create tournaments, track players, and assign teams, while players can view team details and track their performance.
Tech Stack

    Frontend: React, Vite, Tailwind CSS
    Backend: Express.js, Node.js
    Database: MongoDB (Using Mongoose for schema management)
    Hosting: Vercel for frontend, MongoDB Atlas for database
    APIs: Custom REST API for player and team management

Features

    Player and Team management
    Tournament creation
    Fetch and display teams and their players
    CRUD operations on players and teams

Installation
Prerequisites

    Node.js installed on your machine
    MongoDB instance (e.g., MongoDB Atlas)

Steps

    Clone the repository


    git clone https://github.com/JereD1/Africamobilechamps.git
cd Africamobilechamps

    Install dependencies

bash

npm install

    Set up environment variables

Create a .env file at the root of the project and add your environment variables:

makefile

MONGO_URI=<your_mongo_connection_string>
PORT=<your_port>

    Run the project locally

bash

npm run dev

Visit the app at http://localhost:3000




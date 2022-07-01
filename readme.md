# Color Group

## Summary

This project is a submission for an interview.
It is a simple full-stack application with web application UI front-end and a REST API back-end.  The prompt for this project can be found in `prompt.md`.

***

## Deployment Instructions

One of the primary assumptions made is that the person evaluating this project would deploy the containers on their local machine, and evaluate the application from there.

In order to deploy the project, first create a copy of `example.env` and rename the resulting copy `.env`.

```bash
cp example.env .env
```

Next run `docker-compose` to deploy the project.
`docker-compose.yml` is the default, and will deploy a development environment.
`docker-compose.prod.yml` will deploy the production environment.

```bash
# For development environment
docker-compose up --build -d

# For production environment
docker-compose -f docker-compose.prod.yml up --build -d
```

The `--build` flag builds the images, and the `-d` flag runs in detatched mode so the console output doesn't flood your terminal.
Once the images are built, you won't need to include the `--build` flag on the command anymore.

```bash
# To stop your docker containers
docker-compose down

# To restart your docker containers
docker-compose up -d
```

**Warning**: In a production environment, the `-v` flag while using `docker-compose down` will delete the contents of the database.

This project uses ports `3000` and `8081`, so please update the approprate entries in `.env` if those ports conflict with anything on your system.

***

## Project Structure

The project is split into 4 components.

1. Back-end Web API
2. Front-end Web Application
3. MongoDB Database
4. Docker containerization scheme

The back-end project is in `color-group-web-api` and is deployed as a separate container named `web-api`.
`web-api` is an Express-based REST API that serves as a liason between the front-end and the database.
The database library used to communicate with the MongoDB database is "Mongoose".

The front-end project is in `color-group-web` and is also deployed as a separate container named `web`.
`web` uses React as the framework, and communicates with `web-api` to display data.
In the development environment, the React App updated with any code changes for a continuous development experience.
In the production environment, the React App is built to a static site that is served with `nginx` for performance and efficiency.

The database is a MongoDB instance deployed as it's own separate container named `database`.

The entire project is deployed using `docker-compose`.

Normally the `color-group-web-api` and `color-group-web` projects would be set up as git submodules, but for ease of access, all of the project files are in this one repository.

***

## Automated Testing

Automated Unit Tests have been included with each of the projects.
The testing library used for both front and back-end projects is "Jest", and for the web application, "testing-library" is use in conjunction for DOM testing.
The automated tests are run during the build process for each container,
but can be run manually by going into the respective submodule's folder and running `npm run test`.

The approximate code coverages of each project is listed below:

| Project | Code Coverage % |
|---------|-----------------|
| web-api | 78%             |
| web     | 29%             |

Manually running the test cases will show the full code coverage reports.

***

## Security Elements

Two things that were not included in terms of security for the API were:

1. HTTPS
   - HTTPS is important for encrypting connections and protecting against man-in-the-middle type attacks where someone could snoop on the user's communications.
   - HTTPS was not implemented because self-signed certificates often cause browsers to panic and often block users from accessing such sites (or jump through hoops to view the site).  Getting a properly signed certificate seemed outside the scope of this project.

2. Login/Authentication System
   - A login/authentication system would simply be a separate API which would issue a cryptographically secure token (e.g. JWT) as a cookie or in the session-store and record a requisite entry into the database.  The main API would implement middleware to check a user's requests for the token against the database.
   - Storing user login information would involve storing a user's password in a salted and hashed form using a library like bCrypt.
   - This setup was not implemented due to time constraints.

The security practices that were implemented are:

1. Use of `helmet` for the Express API which sets certain HTTP headers, as well as disabling the "x-powered-by" header.

2. Setting the CORS permissions to be limited only to the origin of the `web-api`.  While setting `localhost:3000` as an accepted origin is not exactly secure, since anyone could run their own web application locally, in a real production environment, the CORS setting would be changed to the appropriate domain name(s) of the application and NOT include `localhost` or `127.0.0.1`.

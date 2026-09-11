Achievo — Student Performance Insight System

Achievo is a full-stack web application designed to help students assess and improve their academic performance through subject-wise mock tests, study notes, performance tracking, and account management.

The application was developed using Java Servlets, JSP, JDBC, MySQL, HTML, CSS, and JavaScript, with Apache Tomcat as the application server.

Features

- User registration and login
- Forgot password functionality with email OTP verification
- OTP expiry and password reset
- Subject-wise mock tests
- 60 questions per subject
- 30-minute test timer
- Instant test results
- Session-based user information
- Subject-wise study notes
- Edit profile
- Change password
- Change email
- Account deletion
- Logout functionality

Tech Stack

Frontend

- HTML
- CSS
- JavaScript
- JSP

Backend

- Java
- Java Servlets
- JDBC

Database

- MySQL

Server & Tools

- Apache Tomcat 9
- Eclipse IDE
- Java 17
- MySQL Workbench

Project Architecture

Achievo follows a traditional Java web application architecture:

Frontend → JSP/HTML/CSS/JavaScript

Backend → Java Servlets

Database Layer → JDBC

Database → MySQL

User requests are handled by Java Servlets, which communicate with the MySQL database through JDBC. JSP and frontend technologies are used to display dynamic content and provide the user interface.

Security & Configuration

Database and email credentials are not stored directly in the source code.

Achievo uses environment variables for sensitive configuration:

ACHIEVO_DB_USERNAME
ACHIEVO_DB_PASSWORD
ACHIEVO_EMAIL_USERNAME
ACHIEVO_EMAIL_PASSWORD

This keeps sensitive credentials outside the Git repository.

The database connection URL is configured for the local MySQL database:

jdbc:mysql://localhost:3306/achievo

Database

The application uses a MySQL database named:

achievo

The required database tables should be created before running the application.

Running the Project Locally

Prerequisites

Make sure the following are installed:

- Java 17
- Eclipse IDE for Enterprise Java and Web Developers
- Apache Tomcat 9
- MySQL
- MySQL Workbench

Setup

1. Clone the repository.

git clone https://github.com/SnehaPrasad-Dev/Achievo.git

2. Import the project into Eclipse as an existing Eclipse web project.

3. Configure Apache Tomcat 9 as the server.

4. Create the "achievo" database in MySQL.

5. Configure the required environment variables:

ACHIEVO_DB_USERNAME
ACHIEVO_DB_PASSWORD
ACHIEVO_EMAIL_USERNAME
ACHIEVO_EMAIL_PASSWORD

6. Update the database schema according to the application's requirements.

7. Run the application using Apache Tomcat.

Project Structure

Achievo_New
│
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── achievo
│       │           ├── AppConfig.java
│       │           ├── Servlets
│       │           └── db
│       │
│       └── webapp
│           ├── css
│           ├── images
│           ├── WEB-INF
│           ├── JSP files
│           ├── HTML files
│           └── JavaScript files
│
└── .gitignore

Key Learning Outcomes

Through this project, I worked with:

- Java Servlet-based backend development
- JDBC and MySQL database connectivity
- JSP-based web applications
- Session management
- Form handling and validation
- Email-based OTP verification
- CRUD operations
- Environment-based configuration
- Apache Tomcat deployment
- Git and GitHub version control

Future Improvements

Possible future improvements include:

- Role-based authentication
- More detailed performance analytics
- Additional subjects and question banks
- Admin dashboard
- Responsive UI improvements
- Deployment to a cloud platform

Author

Sneha Prasad

BCA Graduate | Aspiring Backend Developer

GitHub: "SnehaPrasad-Dev" (https://github.com/SnehaPrasad-Dev)
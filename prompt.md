# Coding Prompt

Attached is the JSON input file. Process/parse the attached json file & store the content in a NoSQL database of your choice. Note that the content of the input file could change. More groups, people & colors can be added in the file before being parsed by your program. You can assume that the structure of the object remains the same (ie, no further nested groups) & that 1 person only has 1 color & no duplication in person’s name.

Develop RESTful APIs to handle the following:

- Feature for users to add new group, person and color to the database (via an UI). If a person’s name already exists, replace the input color as the color for that person
- Feature for users to retrieve all people for a particular color. Color can be selected from a pre-populated drop down list retrieved from DB. If no color is selected, display all the people organized by color and group.

Things to note:

- Ensure that proper security mechanism is implemented for your APIs
- Please use NodeJS or Java for backend & React for front end.
- DB must be NoSQL
- Please include automated unit testing & indicate what your code coverage % is.
- Bonus points for Docker/container deployment.
- State any assumptions that you make on the logics/rules.
- Organize your code in your own personal Github & send the link to the repo with detailed instruction on how to setup & run the application.


# Corona management system for a health fund

## Description
The system manages the data of the members of the health insurance fund.
The options include displaying all members of the checkout, adding a new member, displaying a specific checkout member by ID number, editing and deleting.
In addition, morbidity data for the last month and the number of recent vaccinated are also shown.

## Requirements 
- [Nodejs](https://nodejs.org) 
- [MongoDB](https://www.mongodb.com) 
- [React](https://react.dev/)

## Server side: Node.js 

### Installation
npm i mongoose  
npm i dotenv  
npm i exppress  
npm i cors  
npm i joi  

### Development
Start  
**terminal:** `node index.js ` 

**Description:** Start the project in development mode
### Add .env file should contain URL & PORT
    PORT=3000
    DB_CONNENTION="mongodb+srv://shira6461:kfmZ4KTdrgalIgbW@cluster0.devvyyu.mongodb.net/project?retryWrites=true&w=majority"


## Rest API:

| CRUD   | Response              | Explain                 | Method | Send in Body | URL                  |
|--------|-----------------------|------------------------|--------|--------------|-----------------------|
| Create | New member object       | Add a new member to the system | POST   | JSON Object (see below) | /api/members           |
| Read   | List of members         | Retrieve a list of all members | GET    |    ---          | /api/members           |
| Read   | Single member by ID     | Retrieve details of a specific member | GET    | ---         | /api/members/:id       |
| Update | Updated member object   | Update an existing member | PUT    | JSON Object (see below) | /api/members/:id       |
| Delete | Deleted member object   | Delete a member from the system | DELETE | ---          | /api/members/:id       |
            

Stop

**terminl:** `ctrl+c`

## Client side: React 

### Installation
npm i @mui/material  
npm i @emotion/react  
npm i @emotion/styled  
npm i @fontsource/roboto  
npm i @hookform/resolvers 
npm i @mui/icons-material  
npm i @mui/styled-engine-sc
npm i @mui/x-charts  
npm i @testing-library/jest-dom  
npm i @testing-library/react 
npm i @testing-library/user-event  
npm i axios  
npm i joi  
npm i react  
npm i react-dom 
npm i react-hook-form  
npm i react-router-dom  
npm i react-scripts 
npm i styled-components  
npm i web-vitals   

### Development
Start

**terminal:** `npm start ` 
**Description:** Start the project in development mode
         
Stop

**terminl:** `ctrl+c`

### screenshot

![details](photos/displays_corona_data_for_the_current_month.png)
![details](photos/does_not_allow_adding_a_member_due_to_a_missing_field.png)
![details](photos/does_not_allow_updating_due_to_a_missing_field.png)
![details](photos/making_a_deletion.png)
![details](photos/registration_form_for_a_new_member.png)  
![details](photos/shows_all_the_members_of_the_HMO.png)  
![details](photos/shows_member_details.png)  

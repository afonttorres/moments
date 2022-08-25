
# Moments App
This React App pretends to emulate both Instagram performance and its design although its design is inspired by [Hazif Rana](https://dribbble.com/shots/15919643-Social-Media-Mobile-App/attachments/7750406?mode=media/). It has been developed using React and calls an API Rest developed with Java.


## Tech Stack
+ HTML 5
+ CSS 3
+ ES6
+ REACT

### Rest API
+ [Moments API](https://github.com/afonttorres/momentsAPI)

### Version control
+ GIT
+ Git Hub

### Development tools & libraries
+ Visual Studio Code
+ Postman
+ Axios
+ Styled-Components

## Objectives
The main entity of this project are the moments. Each moment has its image, title, description and location. User can upload its own moments, update and delete them and interact of those that are not theirs liking, saving or adding comments performing as a small social media.

The functional requirements of this project were divided by sprints which were developed by importance using Agile Methodologies as Kanban and Scrum.

### Sprint 1
User should be able to see a list of moments, see its detail in a detail page, upload a new moment, update an already existing moment and delete it. Furthermore, user should be able to search a moment by typing its title, description or location.

### Sprint 2
Besides the CRUD operations seen in the first sprint, every moment should display its author and user should be able to like or dislike a moment and add comments to it. Both comments and likes as well as its count should be displayed. Given a like field on each moment, user should be able to see the list of his liked moments.

### Sprint 3
The last functional requirement is for the user to be able to register and login so he can be part of this social media and be authenticated in the application to improve its user experience.

## Features
### Moments CRUD
+ Upload a moment
+ Update a moment
+ Display a list of moments
+ Display moment detail
+ Delete a moment
+ Search moments

### User CRUD
+ Login
+ Register
+ Update settings
+ Log out

### Comments CRUD
+ Add a comment to a moment

### Likes & Saves CRUD
+ Add a like or Saves
+ Delete a like or Saves
+ Display user liked or saved moments

### Extra
+ Printable page (allows the user to print a moment)
+ Copy a link to Clipboard

### Design
+ Responsive Web Design
+ Modularity and Scalability (by using React components)
+ Upload moment pictures

## Preview
#### Desktop
![App Screenshot](./assets/desk/singin.png)
![App Screenshot](./assets/desk/login.png)
![App Screenshot](./assets/desk/home.png)
![App Screenshot](./assets/desk/home-modal.png)
![App Screenshot](./assets/desk/upload.png)
![App Screenshot](./assets/desk/upload-change.png)
![App Screenshot](./assets/desk/preview.png)
![App Screenshot](./assets/desk/detail.png)
![App Screenshot](./assets/desk/favs.png)
![App Screenshot](./assets/desk/searcher.png)
![App Screenshot](./assets/desk/print.png)
![App Screenshot](./assets/desk/update.png)
![App Screenshot](./assets//desk/profile.png)
![App Screenshot](./assets/desk/user-profile.png)
![App Screenshot](./assets/desk/user-bb.png)
![App Screenshot](./assets/desk/user-settings.png)

#### Mobile
![App Screenshot](./assets/mobile/singin.png)
![App Screenshot](./assets/mobile/login.png)
![App Screenshot](./assets//mobile/home.png)
![App Screenshot](./assets/mobile/home-modal.png)
![App Screenshot](./assets/mobile/upload.png)
![App Screenshot](./assets/mobile/upload-change.png)
![App Screenshot](./assets/mobile/preview.png)
![App Screenshot](./assets/mobile/detail.png)
![App Screenshot](./assets/mobile/favs.png)
![App Screenshot](./assets/mobile/seacher.png)
![App Screenshot](./assets/mobile/print.png)
![App Screenshot](./assets/mobile/update.png)
![App Screenshot](./assets/mobile/profile.png)
![App Screenshot](./assets/mobile/user-profile.png)
![App Screenshot](./assets/mobile/user-bb.png)
![App Screenshot](./assets/mobile/user-settings.png)

## Next
+ Messenger so users can chat
+ Like or dislike a comment
+ Update a comment
+ Delete a comment
+ Upload avatar and banner pictures
+ Error component (Not found...)
+ Error handling service

## Installation

This project was bootstrapped with Create React App therefore requires node.js and npm.  Once you've verified node is installed in your directory take the following steps:

#### 1. Clone the repository
```bash
 https://github.com/afonttorres/moments.git
```


#### 2. Run the app in development mode
```bash
 npm start
 ``` 

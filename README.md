# marist-mscs621-matthew-blades

## Intro

This application is deigned to help a user translate text from english to a diffrent language of the user's choice. The user enters text into the left textbox and then clicks translate. The now translated text will apear in the text box to the right. To select the language to be translated to the user selects an option from the dropdown. 

The Application consits of a node server running express as a middleware that serves the React.js front end and connests to the IBM service. This is all hosted in the clouse by Heroku.

The translation of the text is done through the IBM Language Translator service then returned back to the application.

## Deployment

To deploy the application to the cloud follow these steps

1. Clone this repository locally
2. Navigate to the MyAwesomeApp directory
3. Run "npm install"
4. Nagigate to the ui-react directory
5. Run "npm install"
6. Run "npm run build"
7. Navigate back to the MyAwesomeApp directory
8. Run "heroku login"
9. Ensure docker is running "docker ps"
10. Run "heroku container:login"
11. Run "heroku container:push web --app matthew-blades-project"
12. run "heroku containre:release web --app matthew-blades-project"

Now the newest version has been deployed to the cloud and can be viewed at https://matthew-blades-project.herokuapp.com/



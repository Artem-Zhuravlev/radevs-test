# Radevs test project 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### JSON Server (Server for JSON Test Data)
To initiate the JSON Server for handling JSON test data, execute the following command:
```
npm run start:server
```
This command starts the server configured to serve and manage JSON data for testing purposes. Adjustments to the server setup can be made in the corresponding configuration files as needed.


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Folders structure
The project follows the following file and folder structure:
* **/assets:** This directory houses shared images and resources utilized throughout the project.
* **/components:** Reusable UI components are stored within this folder, promoting a modular and maintainable codebase
* **/config:** Configuration files for various packages (e.g., axios) are centralized in this directory, facilitating easy access and management.
* **/constants:** This directory contains reusable constants, enhancing code readability and maintainability by centralizing such values.
* **/entities:** Components with business logic are organized in this folder, promoting a clear separation of concerns within the codebase.
* **/http:** API requests and related logic for server interaction are centralized in this directory, ensuring a structured and organized approach to handling server communication.
* **/store:** The Vuex store, responsible for managing the application's state, is located in this folder. This centralization promotes a scalable and maintainable state management solution.
* **/styles:** Shared styles used across the application are stored in this directory, promoting consistency in the visual presentation and facilitating easy updates to the overall styling.


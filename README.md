## User Guide
  - To run the project:
    -Firstly, install the needed dependencies using this command (npm i) in the terminal.
    -Then run the project using this command : ng serve --open.

  - What you'll find:
    - The landing page which is the search page, write the name of any movie you want, search for it within the list that appears below and scroll down to trigger on scroll pagination.
    - On each movie card there is a view more button that will take you to the movie info page where you'll find more info about the movie along with the option to export the movie data to an excel sheet.
    - In the search bar, you'll find that the last 10 successful searched for keywords (unique) will be automatically suggested as options.

## Project Structure
  - The project consists of multiple angular components divided into modules, services, pages, components and layout.
    - The modules :
      -  The app module which is the root module that contains all module imports.
    - The services :
      - The app service which contains useful shared logic that is used by the components.
      - The web service which is responsible for sending the http requests for the api calls, it holds the root url and gets passed the type of request and the extension to send the request.
    - The pages are divided into :
      - Search Page, which consists of:
        - app-search-component which is the search card component.
        - app movie-list which is the component that holds the list of app-movie-list-items that come out as the search results.
        - app-loading-spinner which is the layout for the loading screen whenever the search results are being loaded either on search or on scroll for pagination.
      - Movie Info Page, which holds the data of the movie searched for and has the option to export movie data as excel.

    - The components were mentioned above, each component is not a page of its own, instead it's an element that's placed within the page or within another component that is going to be placed within the page.

    - The layout components are components that don't have logic or complex functionalities, such as the header, the app-button that holds the styling for the buttons that are used and the loading spinner.

        
## Tools used:
  - Various tools and libraries were used in this project to achieve the list of requirements these tools consist of:
    - Angular Material:
      Multiple elements that are used in this page are essentially angular material elements, such as :
        - mat-form-field
        - mat-label
        - mat-icon
        - matInput
        - matAutoComplete
        -mat-option
    - Ngx infinite scroll library:
      This library was used to achieve the infinite scrolling with pagination.
    - Input, Output and EventEmitter from angular/core were used to pass data and function calls from child to parent components and vice versa.
    - Media queries were used to achieve a responsive design that would work smoothly on all devices.

    
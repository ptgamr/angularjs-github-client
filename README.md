# angularjs-github-client
A Simple AngularJS app which comsumes Github REST API 

### Live Demo
http://ptgamr.github.io/angularjs-github-client/#/

### Features

* Create an input form where users can enter the owner and the name of a Github repository. Upon pressing “search”, this feature should retrieve a list of issues of the given Github repository. Each of the issues should be displayed with its number, title, and creation date in tabular format for the user to browse.
[Finished]
* Add pagination to the table of Github repository issues you’ve displayed from the first feature. Make it possible to specify the number of items per page. Make sure you never query more data from the server than needed for the issues you have to display on a given page, for a given page size.
[Finished]
* Implement proper error handling and use an animation to indicate that data is being fetched from the server. Make sure that your application never gets stuck in a loading state forever.
[Finished]
* Change the input form such that focusing out from the username input field populates an autocomplete with all of the user’s repositories. On initialization, show an empty autocomplete with a placeholder indicating that the user should “Select a Repository”. Selection of a repository should trigger the fetching and listing of the selected repository’s issues automatically.
[Finished]
* Add routing to your SPA and create a second page for displaying the details of a Github issue. When clicking on an issue number, navigate the user to the issue details page and display the issue details of your choice. Make sure that you provide a way to navigate back to your issue list page!
[Finished]
* For each issue, display its author along with his username, profile picture, and a link to his GitHub page.
[Finished]
* Provide a more finalized version of your application’s styling, giving it some additional flavor and making it fun to use. Clean up all your styling code in order to provide good, clean, and maintainable CSS throughout the task. 
[Finished]

### how to run?

* `npm install`
* `bower install`
* `grunt serve`

### E2E Tests
End To End Testing with Protractor

* after running `npm install`
* run this command `node_modules/protractor/bin/webdriver-manager start` to start a Selenium Standalone Process
* `grunt e2e` for end to end testing

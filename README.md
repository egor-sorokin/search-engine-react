## How to run
```
git clone 
cd path/to/project
npm start
```

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

**Note**: if it's not running try to type and run `npm i` command before start


```
npm run build
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits.

Your app is ready to be deployed.
There are some other commands in the *package.json* file in the project that can be useful for development.

This description was taken and modified form the repository [create-react-app]

## Description
#### requirements / assumptions
1) This is a simple single page application, with almost one page with a search result.
2) No post- and pre-processing are required.
3) There can be requests to many APIs, but each request should be processed in a unique way since responses are always different
4) In the future, there can be additional pages with pictures/videos/ music and different filters for the search and search result, 
which can be built easily in the current state of the project.  
   


#### technical concepts and technology choice
1) Since the interface is simple enough, there is no need to use full and heavy MVC frameworks such *EmberJS* or *AngularJS*
2) The choice is between *React*, *Vue* and pure *ES6*.
 *React* is chosen because the community is bigger than *Vue* one,
 so there are more chances to find any type of support and it is stable.
  There are some cool libraries for that as well.
3) [create-react-app] is a good starter kit for starting developing


#### programming
1) **src** folder includes *components*, *images*, *styles* and main *index.js*
2) Common styles that related to the whole app are presented in folder **styles**.
3) Folder **images** is for images.
4) Folder **components** includes each component and its own file for styles and testing.
5) **index.js** is an entry point.

**Assumption**: In the future **redux** will be used here so developer
 can split current *components* into *actions*, *store*, *reducers* and *components*
 
 
#### tests
Were not written. 

#### deployment / building (including how we should build the project)
Please see **"How to run"** section above. 


#### technical documentation
Please see **"programming"** section above and for details about starter kit visit [create-react-app].



[create-react-app]: <https://github.com/facebook/create-react-app>

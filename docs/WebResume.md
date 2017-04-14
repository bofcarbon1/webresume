# Web Resume Angular 2

# Project-Task Notes

**What We Are Doing**

The purpose of this project is to create a Web Resume. The Web Resume application 
will be an SPA using Angular 2 with Node.js, Express.js and a MongoDB Web Resume database.

Angular 2 is the newest version of Angular (version 1) for Single Page Applications.

**Where We Will Work**

Our development workspace will be on Cloud 9. Our workspace is named webresumeproject
and our application is called webresume

**Interfacing Library Dependencies**

- Npm
  - We originally used NPM to generate application scaffolding and library dependencies.
  - Recommended version 3.0 or higher and we have 2.15.9. This was replaced with Angular-CLI 
  - see the notes below.
- TypeScript
  - See the notes below on this scripting language
- Nodejs
  - We use Nodejs as a client side server tool
  - Latest version is 6.9.1 and we are using 4.5.1
- Express
  - Works with Nodejs and will be used to create services to handle data requests
- MongoDB
  - A database tool that can be installed and run on the client side. It uses a simple 
  - key and value pair structure similar to JSON and can include array structures at a 
  - detail level if desired.
- Angular Seed
  - A seed is an application that builds out the framework that supports that supports the 
  - run time environment. Angular-seed is an application skeleton for a typical AngularJS 
  - application. Angular-seed is built on top of node and bower, and builds out a basic 
  - AngularJS application running on Node.js. It sets up basic placeholder templates and 
  - code, and provides a testing environment to use as your application grows. While it 
  - contains a configuration file for continuous integration via Travis CI, you still need 
  - to configure the application to communicate correctly with your application git repository. 
  - This was replaced by angular-CLI see the notes below.

**Using angular-cli**

The Angular team was working on a tool that would make creating an Angular application easier. 
Do some of the scaffolding of the project and its dependencies. We need to see how this works 
with Cloud 9 our current IDE tool of choice.  The link is below

[https://github.com/angular/angular-cli](https://github.com/angular/angular-cli)

**Installing**

- $ npm install -g angular-cli
- $ ng new webresume
- $ cd webresume (in Cloud 9 the workspace is at the project root already)
- $ ng serve

**Angular2 Seed**

The author of the book we used to start our code is part of the Angular 2 team. There is 
an Angular 2 seed in one of his repositories on github. The problems with using the Angular 2 
seed is that changes to the Angular 2 codebase may be made without the Angular 2 seed being 
updated. There are import references to deprecated code for example with the router features. 
Forms may also be out of date and this book recommends picking up form imports from common 
and not form where many tutorials out there suggest using forms as the proper place to import 
code. So who is right?  Since the book is dated published more than 6 months ago and code 
changes so quickly do not count on layers being reliable. Have the ability to import what 
you need.

**Angular2 Web Pack Starter**

Similar to the Angular2 Seed there are similar code projects for web backs. Designed to make 
it easier to use web packs. The same issue may come up as the starter project must keep up 
with changes, bug fixes and so on.



**GitHub Remote Repository and Cloud 9 Workspace Local Repository**

In a more realistic collaborative effort a GitHub repository might be shared by one or more 
members contributing to the work. Local repositories map workspaces to the shared remote 
repository. The local repository should remain in sync with the changes that may occur 
to the remote repository while at the same time pushing changes to the remote repository 
and making that work available for other members to see and use.

GitHub repositories use branches to split up work in the repository. This could be by version
or by member depending on what choices are made for members working in the same repository. 
These decisions are part of a larger strategic effort to stage and deploy work. In any case 
when staging and moving code (pushing or pulling) you must always be aware of your repository 
URI and branch name. It will resolve addressing and find where the code changes and 
synchronization should go.

This project is using GitHub with Cloud9. Ideally it would be nice to set up automatic 
pushing of changes from Cloud9 to the remote repository in GitHub. The Android Studio tool 
allows this and requires some configuration to map the local Cloud 9 workspace to the remote 
GitHub repository.

**Create or Clone GitHub Remote Repository**

If you start by creating a GitHub repository you can create a new C9 project and select 
the option to clone from the remote GitHub repository. If you have already started the 
C9 project.

- $ git remote add pb https://github.com/bofcarbon1/expressapis.git

- $ git remote -v // Display the remote repository

**Commits, and Pushing changes to the GitHub Remote Repository**

1. Change the current working directory to your local repository.
2. Stage the file for commit to your local repository.
3. git add .
4. # Adds the file to your local repository and stages it for commit. To unstage a file, 
   use git reset HEAD _YOUR-FILE_;.
5. $ git status //Should show you the files staged to be committed.
6. Commit the file that you&#39;ve staged in your local repository.
7. git commit -m &quot;Add existing file&quot;
8. # Commits the tracked changes and prepares them to be pushed to a remote repository. 
   To remove this commit and modify the file, use git reset --soft HEAD~1; and commit and 
   add the file again.
9. [Push the changes](https://help.github.com/articles/pushing-to-a-remote) in your local 
   repository to GitHub.
10. git push origin _your-branch_

# Pushes the changes in your local repository up to the remote repository you specified as 
#  the origin

\*\* where your your-branch is master  (which should match the name in parenthesis at 
  your project root level)

**git Pull**

There may be times when you need to perform a git Pull request. For example if the remote 
repository has work (files and folders) that the local workspace repository does not have. 
Git suggests that you execute the Pull request.

The git Pull request generates a summary of pending changes.

So for our GitHub remote repository URI with project using the master we could use the 
following

git request-pull v1.0 [https://github.com/bofcarbon1/switchingToAngular2x](https://github.com/bofcarbon1/switchingToAngular2x) master&#39; or we have to add a version if we can determine what the version is. Using the command without a version resulted in an invalid revision error. There were no solutions on the web for this error. At best guess if the revision corresponds to commits then setting the number to the last commit was at &#39;32.0&#39; but it doesn&#39;t make sense that it should need that but it is &#39;git&#39; so nothing will make sense anyway.


**TypeScript**

TypeScript is the scripting language that is recommended for Angular 2. It is an open source 
language developed and maintained by Microsoft. TypeScript provides a compiler that will do 
some checks on syntax that would otherwise be caught only at run time. To take advantage of 
this use static typing such as when creating variables. Type annotation is a built in feature 
helpful in identifying language usage that tools like the Google Closure Compiler can pick up 
on and expose potential errors.

Here is a link to TypeScript Documentation

[https://www.typescriptlang.org/docs/tutorial.html](https://www.typescriptlang.org/docs/tutorial.html)

**Installing**

We can install TypeScript using npm as show below

$ npm install -g typescript   // This command installed version 2.0.3 by entering tsc -v

**Compiling**

A benefit of TypeScript is that you can compile it to generate a JavaScript file

$ tsc file.ts // This command will create a file.js output version)

**Executing Scripts**

We can execute a JavaScript file using node.js as show below

$ node file.js

Debugging is also an option. Insert the keyword debugger above the desired code line to debug. 
Then execute the following command.

$ node debug file.js

This starts the debug session. It is not going to highlight code and show values like a 
Google debugger will in a browser. You can add watchers to objects like watch
(my\_expression)

To exit debug mode enter &#39;quit&#39; or &#39;.exit&#39; at the $ command line or CTRL-C on the keyboard



**TypeScript Language Notes**

- Variables
  - **Let** replaces ;var; and has scope within a lexical block. You can still make something 
  - global but you would do that at a scope location that is the root of the script.
  - **Const** can be used set a value that should remain constant
- Interface
  - Define contracts within your code using structural typing
  - When doing a compile via &#39;tsc&#39; without parameters by default the interface is not 
  - included in the generated JavaScript file. After some reading there was an indication that 
  - the interface option is only available with certain ES script version. There is an option 
  - to specify what libraries to include in the compile which may be needed to get the interface
  - to show up in the JavaScript file.
- Classes
  - These are similar to C#.NET classes with constructors and methods
  - You can inherit by extending common classes
  - super is an option that allow a reference to a base class constructor/method
  - this is an option that qualifies references within the current instance of the class
  - Access modifiers are used to indicate how the class or class items should be accessed.
    - Public – can be accessed outside of the class
    - Private – cannot be accessed outside of the class
  - As with the Interface; feature after compiling with tsc; default the class does not 
  - translate in the generated JavaScript file.
- Functions
  - this and  =&gt; functions
    - Insures that a return function will use a this referencing the original class upon 
    - creation as opposed to how it is invoked
  - any as a type in a function allows overloading or the passing of any type and you can use 
  - the typeof keyword to determine the type that was sent
  - Contextual Typing is a short hand that will default to a type
- Namespace
  - Similar to the C#.NET namespace it groups TypeScript code that have a common purpose such 
  - as validation
  - The **Export** keyword allows the item to be seen outside of the namespace in which it was 
  - created. You can export multiple items in a list {func1, func2, const1}.
  - The **Import** keyword is used to reference a namespace exported code. You use this to 
  - consume the code.
    - import {square, log10} from ./ math
    -

**TypeScript Language Notes Continued**

- ** ** Module Resolution
  - This what the compiler uses to find the reference code in the import. It can also be a 
  - relative reference using / or ./ (relative) which imply a hierarchical relevance to a 
  - tiered project file structure. In addition to the tier reference file types of ts, 
  - tsx or d.ts also play a part in the resolving the reference.
  - Strategies
    - Classical
      - Resolved relative to the importing file
      - import { b } from &quot;./module&quot; looks up /root/src/folder/moduleB.ts through /moduleB.ts
    - Node
      - Mimics the node.js resolution method. Node.js uses a function called require and looks 
      - for files package.json or index.js
      - Non-relative reference depends on node\_modules and searching is done through a 
      - directory chain
    - BaseURL
      - This is where the root will start see the tsconfig.json file
    - Path
      - Paths can be configured to resolve files in the tsconfig.json file.
- Decorators
  - Prefixed with an @ sign.
  - Consists of a target, target property and descriptor
  - Return references to code often for configuration purposes
- Generic Types
  - You can use a generic type reference T as a parameter that allows any type to be used 
  - when the object is invoked
- Ambient Types
  - Use typings; in config.json; in directory ./typings
    - $ npm install -g typings
    - $ typings init // creates &#39;config.json&#39;
    - $ typings install angularjs --ambient
  -

**TypeScript Code Examples**

**Class Example**

A class is similar to a C#.NET class. It can contain constructors and functions

**class** Student {

fullName: string;

**constructor** ( **public** firstName, **public** middleInitial, **public** lastName) {

**this**.fullName = firstName + &quot; &quot; + middleInitial + &quot; &quot; + lastName;

}

}

**var** user = **new** Student(&quot;Jane&quot;, &quot;M.&quot;, &quot;User&quot;);

**Interface Example**

An interface can be a composite structure

**interface** Person {

firstName: string;

lastName: string;

}

**function**** greeter**(person: Person) {

**return**&quot;Hello, &quot; + person.firstName + &quot; &quot; + person.lastName;

}









**Angular 2 Coding**

How do you identify Angular 2 script code from TypeScript code?  Angular code often has a 
ng prefix. Other than that its seems difficult to separate it out.

**Angular2 Application Parts**

| **Component** | **Description** |
| --- | --- |
| Controller (class) | Controls the processing execution and navigation similar to MVC Handles user input and delegate responsibility to the service. They are constructed as a class. |
| Service | Encapsulates business logic including communication with REST, HTTP, WebSockets and WebRTC. Includes domain models and business rules. When there is repeating logic it should be handled in a service and accessed in a controller via dependency injection. |
| Directive | Encapsulate UI with manipulation of the DOM logic. Delegates business logic to a Service. May use DI to use the Service. Use with components and templates. |
| View |   |
| Component | All Angular2 code is built on components. Components extend directives and delegate business logic to services. May use DI to use services. An example might be a tag element in HTML that is customized for example dates or headers, footers. In Angular 1 this was the equivalent of the combination of directives, controllers and scope. That is now all in the component. Components can have child components that are built in a tree structure. Every Angular2 app should start with a root component that could include a header, trailer, side bar and an area for managing view content.   |
| Router | Defines the routes for the application. Only Components are rendered by the Router. The Router uses the Directive to get things like predefined hyperlinks between views. To use routing there are multiple tutorials none of which have been proven to work.   |
| Pipes | Equivalent to what filters used to be in Angular 1 they can be used with Components. You could create a Pipe that transforms data to lowercase or formats with currency for example. |

**The Angular Style Guide**

Conventions for coding in Angular can be found in the link below.

[https://angular.io/styleguide](https://angular.io/styleguide)



**Angular 2 Coding continued**

**Scripts Libraries**

One of the issues with building Angular apps on Node.js with Typescript is the script 
dependencies for compilation and run time. The TypeScript compiler will throw errors and 
correctly translate TypeScript code to JavaScript code.

**Server Side Rendering**

Improvements have been made to address loading and rendering in the browser. Similar to 
the way ReactJS Is used to pre-render on the client server like node.js DOM implementation. 
Angular 2 allows decoupling from the DOM where things are run outside of the context of 
the browser. It allows for pre-rendering of the view on the client server before sending 
it to browser

**Components contain….**

- Selector
  - Reference to a customized HTML tag where the component goes
- Styles
  - CSS that is customized for the component when beyond the default bootstrap
- Template
  - The &#39;template&#39; attribute directs content to be imbedded in html but not 
  - rendered by the browser. This content is controlled by the Angular Directive.  
  - We can create variables in a template which hopefully only have scope within the template

**Dependency Injection**

In Angular 2 dependency injection (DI) allows us to inject dependencies in **components** 
throughout an application.  Any exposure to the MEAN stack architecture demonstrates the 
layered dependencies. The typical Node.js application contains a **package,json** file will a 
long list of dependencies with references to a multitude of script files. The objective of 
DI is to create testable and reusable code. We want to decouple dependencies between our 
classes.  Inversion of control (IOC) includes annotation decoration using EMCAScript and 
allow objects behavior to be manipulated using reflection

Angular uses providers (recipes or instructions for dependencies (objects)), tokens 
(injector) created and injected through constructors in components or directives. With these 
providers (**providers[]**) dependency lookups say for a specific service may end up going 
beyond the desired boundaries and use an unexpected service.  To prevent this there is a 
@host() clause with the constructor as the first argument before the provider name  option 
that limits the search boundaries to current applications host.

Services are a way to use dependency injection and it is often the **service** that is 
included in **providers[]** to use within components.

.

**Injector Example**

&#39;@NgModule ({

  imports: [BrowserModule],

providers: [**NameService**],

declarations: [App],

bootstrap: [App]

} )

export class AppModule {}

class App {

 constructor(@Inject(NameService) NameService {

  this.name = NameService.getName();

}

} 

The TypeScript version looks like this…

 class App {

constructor(NameService: NameService {

  this.name = NameService.getName();

}

} 



Another way to do injection with providers in a component

@Component  ({

 Selector : app

 Providers: [

  { provide: NameService, useValue: Thomas}

],

Template: &lt;h1&gt;Hello {{name}}&lt;/h1&gt

})

Class App {….} 





**Directives**

**Directives Example**

@Directive ({ selector: saTooltip }) …. Export class Tooltip { saTooltip: string; ... 
constructor

Arrow Functions (=&gt;)

Provides an easier way to perform functions and handle this references. Code to the right of 
=&gt; is treated like a function.

Example below lets you remove the word function(x)

items.forEach((x) =&gt; {

    console.log(x);

    incrementedItems.push(x+1);

  });

Or a simpler form of the above iincrementor …

incrementedItems = items.map((x) =&gt; x+1);

**Services**

**Service Example**

class NameService {

 name = Pascal;

  getName() {

 return this.name;

}

} 

**Web Resume Project**

Our project webresume will be to build a single page architecture web resume using Angular 2 
with Node.js and TypeScript. 

When completed that code will be redeployed to a live running option so it can be seen by 
prospective clients. That will give us a practical application that will also bring us up to 
date with digital resume presence in the IT community.

The web resume should contain at a minimum the following features

- Index View
  - Links Menu to the following external links
    - LinkedIn, Facebook Business,
  - Links Menu to external repository links with sample code in GitHub and Microsoft
  - List of featured services with links to detail partial views
    - UI – JavaScript, Angular 2, TypeScript, JQuery, Ajax, HTML
    - Middle Tier - C#.NET, LINQ, etc…
    - Services – RESTful, Web API, WCF
    - Data – SQL Server 2014, Oracle 11g, Entity Framework
  - List of project work history highlights
    - Each project highlight is a link to a project work detail
- App Views
  - Service Detail partial views
    - UI, Middle Tier, Service and Data
  - Project Detail partial views
    - One detail for each project highlight
- App Angular JavaScript files
  - As needed determined by the book. The breakout of scripts by code fragments is still TBD. For example directives, services and other Angular code will probably be split up so it and referenced as assembled code at run time.

**Web Resume Angular SPA Project**

**Class Structures**

The following class structures will be created

- Resume
  - Will consist of a constructor that takes the other resume detail classes
- Personal
  - Name
  - Title
  - Address
  -
- Services
  - What IT services are being offered such as .NET Web Development or Web API Services
    - Name
    - Description
- Projects
  - Project highlights
    - Name
    - Dates
    - Description
- Skills
  - IT skills
    - Name
    - Description
- Professional Links
  - Name
  - URL
- Code Samples
  - Name
  - URL

**What we want the web resume to do**

Let us list what we want our web resume to do (user stories)

- Main View
  - Personal Information (name, title, email, phone, rate, salary, objective)
  - Skill List by service category
  - Services Offered List with links to detail and tooltip
  - Service detail
    - Service Description
    - Project Experience List
      - Name
      - Description
      - Dates

**Web Resume Components, Directives and Providers**

Angular 2 components are the main building blocks of the application. Here are the notes for 
our application components.

Angular 2 directives apply behavioral or structural changes over the DOM. Directives augment 
elements in views. One element can have many directives. They should be used as attributes in 
the element prefixed with the TypeScript namespace.

Angular uses providers (recipes or instructions for dependencies (objects)), tokens (injector) 
created and injected through constructors in components or directives. With these providers 
(**providers[]**) dependency lookups say for a specific service may end up going beyond the 
desired boundaries and use an unexpected service.

- Create
- app-module.ts
-   this is where our ng-module will be and where we bootstrap the app  
- app-component.html and app-component.ts
  - This is our root component and will consists of the following features
    - resume header
    - personal contact Info with site links
    - resume Objective
    - Services offered
  - Create webresume.services.ts 
    - Here we will create observable calls to our Express APIs
    - This service will be injected into any component that requires data
    - Service details consisting of projects, dates and skills used 
    
- Create folder skill
-  Create files 
  - skill.component.html and skill.component.ts

- Create folder services
  - Create files 
  -  project.ts // the resume project class
  -  project.service.ts // 
  -  project.type.filter.ts // a pipe used to filer resume projects
  -  service.component.html // the view for resume projects
  -  service.component.ts // resume project component
      - Uses tabs to list projects by project type
      - Contains event emitter for the project tab
      - Includes addTab function to set the active tab after selection


**Services**

Angular 2 services can be used to communicate and pass data between components. 
We take advantage of services in this project


**Projection**

We can use projection to swap out the projects content when a new service 
tab is selected. Using the ng-content feature will help


**Pipes**

Angular 2 uses pipes to filer (or more) and they are referenced  in a component 
through the directive[]

- Project Type Filter Pipe
  - This is a pipe injectable with a transform that will be used to filer the 
  - projects by web, database or service
- Sort Descending Pipe
  - This is a pipe injectable with a transform that will be used to sort 
  - projects by year in descending order


**MongoDB**

As part of our Node.js approach we will utilize a MongoDB database to store 
data for our web resume. To install MongoDB on Cloud 9 we use the following 
steps

- Open a new Remote Terminal Window
- At the root enter the following command to install MongoDB in the workspace
  - sudo apt- **get** install -y mongodb-org
- To run MongoDB enter the following commands
  - $ mkdir data
  - $ echo &#39;mongod --bind\_ip=$IP --dbpath=data --nojournal --rest &quot;$@&quot;&#39; &gt; mongod
  - $ chmod a+x mongod
- Start the MongoDB server
  - $ ./mongod

As is often the case with the Node.js community the tools often become 
deprecated before anyone can finish a book or tutorial. The Cloud 9 MongoDB 
is not the new community version but it works. If you want to be ambitious you 
can try for something beyond version v2.6.12.

- Start the mongoDB database (use option –-nojournal in Cloud9 because of space issues)
  - $ mongod  –-nojournal
- Proper close (yeah I don&#39;t know crazy documentation out there)
- Repair the MongoDB (when not cleanly shutdown
  - $ mongod – repair
-



















**Creating the Web Resume data**

MongoDB uses collections which are equivalent to tables. 
Documents are structures that are equivalent to JSON value key pairs. 
MongoDB has a flexible structure that allows you to just insert data as 
you need it.  If you want to take a de-normalized approach you can mix 
single items with arrays. We will use that approach and insert the single 
items first for the web resume data and place the arrays last.

- From the Mongo Shell
  - $ mongo
  - Insert data
    - $ db.wr\_personal.insert({emailname: &quot;bofcarbon1&quot;})
  - Update data
    - $ db.wr\_personal.update({&quot;\_id&quot; : ObjectId(&quot;58548f3baf3b420bf48f6172&quot;l}, emailname: &quot;bofcarbon1&quot;)
  - Query data
    - $ db.wr\_personal.find()  // gets all the documents in the collection
    - $ db.wr\_project.count(); // gets a count of all docs in collection
  - Delete data
    - $ db.wr\_project.remove({})  //removes all documents from a collection
- Insert into database **&#39;test&#39;**
  - Create document **&#39;wr\_personal&#39;**
    - Contains web resume single string items
  - Array **&#39;wr\_services&#39;** to hold 3 string service values
  - skill array
    - ** &#39;wr\_skills&#39;**
  - project array
    - **&#39;wr\_projects&#39;**

The document should follow this pattern.

{

wr\_personal:

{

name:  &quot;Brian Quinn&quot;,

title:  &quot;Sr. .NET Web/Database Developer&quot;,

phone:  &quot;518-727-2933 (cell) &quot;,

emailname: &quot;bofcarbon&quot;,

emailsite: &quot;gmail&quot;

},

wr\_sitelinks:  =

[

 {

sitename: &quot;linkedIn&quot;,

sitelink: [https://www.linkedin.com/in/brian-quinn-372a87?trk=nav\_responsive\_tab\_profile](https://www.linkedin.com/in/brian-quinn-372a87?trk=nav_responsive_tab_profile)

},

     {

sitename : &quot;facebook&quot;,

sitelink: [https://www.facebook.com/Q-Squared-Brian-Quinn-IT-Services-199266363455557/?ref=aymt\_homepage\_panel](https://www.facebook.com/Q-Squared-Brian-Quinn-IT-Services-199266363455557/?ref=aymt_homepage_panel)

}

],

 wr\_repositorylinks:

[

{

rlink: &quot;Github&quot;

},

{

rlink: &quot;Microsoft Thing&quot;

}

],

}


**Express MongoDB APIs**

To get data from our MongoDB database we will use an Express server to make data requests as APIs. We will create a new workspace on Cloud 9 to do this.

- Create Workspace &#39;expressapis&#39;
- Create main script &#39;server.js&#39; to start the express server
- Create API services
  - Create &#39;routes.js&#39;
    - &#39;app.get(&#39;api/resume/personal&#39;  (get personal resume data)
    - &#39;app.get(&#39;api/resume/skills&#39; (get skill resume data)
    -

**Web Resume Phase II**

**Adding Media**

I decided to add a Power Point presentation. It will go under the skills. 
The media tool for our Angular code is videogular which was installed using 
npm. The link below has a nice example that we will use to build the control. 
We then modified the code to use the link to our presentation. Because the 
tool does not yet support YouTube we opted to upload the mp4 file to our 
application. We just use a local source reference instead of the URL to 
YouTube now. The videogular 2 people are not sure if and when they will 
support YouTube in the future.

Check them out they have a really cool tool 

[https://github.com/videogular/videogular2/tree/master/src/](https://github.com/videogular/videogular2/tree/master/src/)

**Code Changes**

- Update app.module.ts
  - Include the videogular components to imports and directives
- Add folder presentation
- **** sanity check.  I originally thought I needed these files
- **** but I think they are already in node_modules when you install
- **** videogular. So don't automatically add all the files I used
- **** into the aplication that are already in noe_modules... OK onward...
  - Add files
    - single-media-player.ts
    - single-media-player.html
- Add folder video
  - Upload files
    - WebResumePPP.mp4 (You can create this with MS Power Point)
- Copy folder fonts from the node-modules videogular files or make sure 
- you point to the right place where the font file is located or you 
- will not get the controls to work right. I found it easer to copy the 
- folder and place it in the same folder as the styles.css file. 



**Optimizing Our Application**

We want to take advantage of the most efficient application design and 
configuration techniques available. This will insure that we offer the 
best interactive experience for those viewing our web resume.

Web Workers

Web Workers allow us to utilize a multi thread processing approach one 
for the main UI and one that runs in the background. Web Workers use the 
bundling technique for loading resources into memory threads. The system.js 
and loader.js scripts will work together to achieve this. The 
background\_bootstrap.js script will start the application in the background. 
Responses to processing events will be communicated between the main UI and 
background thread via messaging.

- Modify the main index.html page by adding the following scripts
  - system.source.js
  - angualr2-pollyfills.js
  - ui.dev.js
  - Inline script to configure web workers use and import the bootstrap.js
- Create the following scripts
  - bootstrap.ts
    - Transpiles to include web worker platform and include loader.js
  - loader.ts
    - Imports the scripts needed to run application using web workers



**Testing Our Code**

As mentioned we are working from a workspace on Cloud 9. Our code is run on 
the server assigned. 

Our code is in work space webresumeproject and our application project is 
called webresume. We used angular2-cli to build the project

- On work space webresumeproject
  - npminstall-gangular-cli
  - ngnewmyapp
  - nvm use 6.5.0
    - Make sure you are using node 6.5.0 or higher. The above command will 
    - set the version from the default version in your IDE tool.
  - cd to webresume and enter the following command 
  - ngserve--host 0.0.0.0--port 8080 --live-reload-port 8081
    - This gets our web resume to run on Cloud 9 development

This will start the application on the Cloud 9 local server. Cloud 9 has 
designated a URL and host ports that are allowable.  

My service APIs run via Express so I start those up first using npm start.
They use port 8082 and you can test them with Fiddler or whatever using
the links below. If you want to copy my Express services feel free but 
remember that you have 3 ports in Cloud 9 8080, 8081 or 8082.

**** Since Cloud 9 is a space for developers to learn code my Express API
**** services do not run continously. If I decide to upgrade I'll be happy
**** keeping this running 

[https://expressapis-bofcarbon1.c9users.io:8082/api/resume/sitelinks](https://expressapis-bofcarbon1.c9users.io:8082/api/resume/sitelinks)

[https://expressapis-bofcarbon1.c9users.io:8082/api/resume/skills?skilltype=database](https://expressapis-bofcarbon1.c9users.io:8082/api/resume/skills?skilltype=database)

[https://expressapis-bofcarbon1.c9users.io:8082/api/resume/projects?projecttype=web](https://expressapis-bofcarbon1.c9users.io:8082/api/resume/projects?projecttype=web)

Use the links above to test the Express APIs that retrieve resume data from 
the MongoDB

For our web resume enter the link below.

http://webresumeproject-bofcarbon1.c9users.io:8080/
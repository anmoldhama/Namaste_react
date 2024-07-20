Namaste react

***************************Lecture 01 *********************************

1) Create a simple hello world program using javascript.   ---done
1) Browser don't understand the react code directly
2) what is CDN react ?
        * A CDN (Content Delivery Network) for React is a way to load React (and other libraries) directly 
          from a network of distributed servers rather than downloading and hosting the files locally within your project.
3) CDN is a place where the react is hosted.
4) we need to inject react in our project using cdn links.
5) Why do we use cdn ?
        * Performance Improvement : When a user requests a file, the CDN serves it from the server closest to the user, Reduced Latency.
        * Faster Load Times: By serving files from the nearest server, CDNs decrease the load time for web pages and assets.
        * High Availability: CDNs are designed to handle large amounts of traffic and can distribute this load across multiple servers, 
                             reducing the risk of server overload and ensuring that content is always available.
        * Redundancy: CDNs provide redundancy. If one server goes down, another can take over, ensuring continuous availability of the content.
        * Handling Traffic Spikes: CDNs can easily handle traffic spikes, such as during viral events or major product launches, 
                                   by distributing the load across multiple servers.
        * Global Reach: CDNs provide a global reach, ensuring that content can be served efficiently to users worldwide.
        * Caching: CDNs cache content at various points around the world, reducing the need to repeatedly fetch the same 
                   content from the origin server.
        * DDoS Protection: Many CDNs offer built-in protection against Distributed Denial of Service (DDoS) attacks, providing an 
                           additional layer of security.
        * TLS/SSL Offloading: CDNs can handle SSL/TLS encryption, reducing the processing burden on the origin server and 
                              ensuring secure content delivery.
        * Ease of Setup: Including React from a CDN can be as simple as adding a few script tags in your HTML, allowing for quick setup and prototyping.

6) What is crossorigin written inside the link ?
       When a web page makes a request for a resource on another origin (a different domain, protocol, or port), it is considered a cross-origin request.
       The crossorigin attribute specifies how the request should be handled, including whether credentials like cookies or authorization headers should 
       be included.
7) write React in browser console after injecting the cdn link you will seen many react function and methods to use.
8) At the end react is the javascript code.

9) const heading = React.createElement("h1", {}, "hello world");
10) this createElement is used to create elements.
11) const root = ReactDOM.createRoot(document.getElementById("root"));
12) root.render(heading);  --- to render anything on the browser.

13)  ("h1", {}, "helloworld");------ this {} is for the attributes.
14) console.log(heading); ------ this should print the whole element inside browser console like type, props, etc
15) split the javascript code into the separate file ./app/js.

16) how to create nested childs in react using createElement api.
17) how to create siblings in react dom using array of createElement api.
18) But the code structure is very complex and hard to read using this concept.
19) To overcome this complexity the JSX is introduced.


***********************Lecture 02 **********************************

1) npm does not stands for node package manager even doesn't have any full form.
2) npm is a standard repository for all the packages, all the packages are hosted there.
3) command to initialize (npm init).
4) install package bundler.
5)  some bundler name web pack,weat, parsel.
6) npm install -D parcel
7) difference between package.json and package-lock.json.
8) .gitignore
9) If you have package-lock.json and package.json then the node_modules can be regenerated.(npm install)

10) to ignite our app use command npx parcel index.html
11) npm install react
12) npm install react-dom
13) remove the cdn link in your project because there is no need to hit the cdn link again and again after install react in your project.
14) but need to import the react at the top of the file.
15) <script type="module" src="./app.js"></script> --type= "module" is added in this script tag for the browser understanding that this is not a normal javascript file.
16) parcel working functionalities: 
      * Dev Build
      * Local Server
      * HMR: Hot Module Replacement
      * File watching algorighms written in c++
      * caching things
      * Image optimization
      * minification files
      * Bundling
      * Compress
      * Consistent Hashing
      * Code splitting
      * Differential Bundling : support older browsers
      * Diagnostic
      * Error Handlings
      * HTTPS
      * tree shaking : remove unused code
17) for production build (npx parcel build index.html);
18) browserlist tool
19) 

************************Lecture 03****************************************
1) npm run start ----to start the react app
2) npm run build ----to create a production build
3) What is JSX?
4) React is also written without jsx.
5) JSX is not the mandatory for react.
6) JSX is not html inside javascript.
7) JSX has html like syntax.
8) Babel installed by Parcel have a job to convert jsx code into React.createElement code.
9) Various attributes in used in jsx.
10) In jsx it is mandatory use () if code is written is in multiple lines.
11) install extension on vs code : 1) Prettier code 2) Bracket pair colourizer.
12) Two ways to write react components are: 
      a) Class based components.
      b) Functional based components.
13) A function that is returning a jsx component is known as functional based component.
14) To render react functional components use root.render(<JsxHeading />);
15) component name should be in pascal case.
16) component composition : It is a component call inside another component.
17) 

***************************Lecture 04**********************************

1) Create component for resraurant cards.
2) add header,body and footer
3) config driver ui.
4) loop over the data using map filter.
5) always give a key to the component because react need this key at the time of rendering the component.
6) React itself says that never use index as the key.

 
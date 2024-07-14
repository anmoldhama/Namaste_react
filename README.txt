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

 
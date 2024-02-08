# Assignment 4

The goal of this assignment is to start to use Node.js and some of its built-in modules to build a very simple web server that serves static content.

You are provided with several files in `public/` implementing the Tweeter site we've been working on throughout the course, with the exception of `index.js`.  The `index.html` file implements the site you're familiar with by now, with all of its styling included in `style.css` and, when you add your own `index.js` file, its interactions.  In addition to your familiar files, you're also provided with a file `404.html`, whose purpose we'll get to in a bit.

The file `server.js` is the file you'll work on for this assignment.  Your job is to complete that file to implement a very basic Node-based web server that satisfies the following requirements:

  * First, add your name and oregonstate.edu email address to the header comment in `server.js`, so the person grading your assignment knows who you are.

  * The server can only use Node's built-in modules (e.g. `http`, `fs`, `path`, etc.), no third-party modules.

  * The server should listen for requests on the port specified by the environment variable `PORT`.  If the variable `PORT` is not present in the environment, the server should listen on port 3000 by default.

  * When someone requests a path from your server that corresponds to the name of one of the files in `public/` (including `404.html`), your server should respond with the contents of that file and a status code of 200.  In addition, the server's response should have the `Content-Type` header set to the appropriate value for the type of file being sent (i.e. `"text/html"` for an HTML file, `"text/css"` for a CSS file, `"application/javascript"` for a JS file, and `"image/jpeg"` for a JPEG image file).  For example, if you run your server on port 3000 on your laptop, you should be able to access the following files by entering the following URLs into your browser:
    * `public/index.html` - [http://localhost:3000/index.html](http://localhost:3000/index.html)
    * `public/index.js` - [http://localhost:3000/index.js](http://localhost:3000/index.js)
    * `public/style.css` - [http://localhost:3000/style.css](http://localhost:3000/style.css)
    * `public/404.html` - [http://localhost:3000/404.html](http://localhost:3000/404.html)

    Note that if everything is hooked up correctly, your `index.html` and `404.html` pages will automatically have styles and interactions from `style.css` and `index.js` because the browser will see those files referenced from the HTML and make additional requests for those files.

  * When someone requests the root URL path (i.e. `/`) from your server, it should respond with the contents of `public/index.html` and a status code of 200.  For example, if you run your server on port 3000 on your laptop and visit [http://localhost:3000](http://localhost:3000) in your laptop's browser, your server should send the contents of `public/index.html`.

  * If someone visits a path on your site that does not correspond to the name of any of the files in `public/`, your server should respond with the contents of `public/404.html` and a status code of 404.  For example, if you run your server on port 3000 on your laptop and visit  [http://localhost:3000/thispagedoesnotexist](http://localhost:3000/thispagedoesnotexist) in your laptop's browser, your server should serve the contents of `public/404.html`.

  * Your server should read any given file in `public/` from disk only once.  In other words, the contents of each file should be stored in the server's memory (e.g. stored in a variable) after the first read, and the server should use this stored value when responding with a file's contents instead of reading the file a second time.  In other words, after you read a file from disk once, you should always read it from memory thereafter.  You should add a `console.log()` statement immediately before each call to read a file to prove to yourself that each file is being read only once.

Note that since this assignment is released before assignment 3 is due, the contents of `index.js` are incomplete.  If you want to see the full site in action, including the interactions you implemented for assignment 3, you can replace the contents of `public/index.js` with your `index.js` from assignment 3.  However, no part of your grade for this assignment will be based on changes to `index.js`.  For this assignment, it only matters that you correctly serve the contents of `public/index.js`, whatever they are.

## Tips/Hints

Here are a few tips/hints to help you out with the assignment:

  * One big difference between the HTML files in the `public/` directory for this assignment and the HTML files you've worked with for previous assignments is the URLs used to include CSS and JS files into the HTML.  In particular, in this assignment, the URLs all start with a slash, e.g.:
      ```html
      <link rel="stylesheet" href="/style.css" media="screen">
      ```
      instead of
      ```html
      <link rel="stylesheet" href="style.css" media="screen">
      ```
      This is an important change now that we'll be serving these files, but it'll mean that if you open the HTML files directly in your browser like you did before (i.e. opening them using a `file:///...` URL), you won't see the styles or JS applied.  That's OK.  Once you're properly serving the files, you should be able to see the styled pages again using `http://...` URLs like the ones above.

  * To see an example of essentially the way your server should behave, you can use [the serve package from npm](https://www.npmjs.com/package/serve) to run a static server based on the contents of the `public/` directory.  This command will do that for newer versions of Node.js:
      ```
      npx serve ./public/
      ```
      Then, you can use URLs similar to the ones above to see the files from `public/` (note that serve runs on port 5000 by default).  This will give you an idea of what your own server should do.

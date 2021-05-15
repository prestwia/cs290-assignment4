/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below, so we know whose code we're grading.
 *
 * name: Alexander Prestwich
 * email: prestwia@oregonstate.edu
 */

/* import needed modules */
var http = require('http');
var fs = require('fs');

/* vars to hold files once they have been loaded */
var html = undefined;
var style = undefined;
var js = undefined;
var error = undefined;

/* start server */
var server = http.createServer(function(req, res) {
  /* handle case user loads main or index.html */
  if(req.url === '/' || req.url === '/index.html') {
    /* load if not loaded before */
    if (html === undefined) {
      /* get data from file */
      html = fs.readFileSync('public/index.html');
    }
    /* write data with 200 status */
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
  }
  /* handle case to load css */
  else if (req.url === '/style.css') {
    /* load if not loaded before */
    if (style === undefined) {
      /* get data from file */
      style = fs.readFileSync('public/style.css');
    }
    /* write data with 200 status */
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(style);
  }
  /* handle case to load js */
  else if (req.url === '/index.js') {
    /* load if not loaded before */
    if (js === undefined) {
      /* get data from file */
      js = fs.readFileSync('public/index.js');
    }
    /* write data with 200 status */
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.write(js);
  }
  /* handle case to load 404.html or any other urls */
  else {
    /* load if not loaded before */
    if (error === undefined) {
      /* get data from file */
      error = fs.readFileSync('public/404.html');
    }
    /* write data with 200 status */
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(error);
  }
  /* end response */
  res.end();
  /* listen on PORT env variable or port 3000 */
}).listen(process.env.PORT || 3000);

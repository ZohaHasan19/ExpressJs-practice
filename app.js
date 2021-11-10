// console.log("My First Node Js");

// const Fs = require("fs");

// Fs.writeFileSync("hello.txt", "Hello from Node.Js");

//Creating a server

// first middleware
// USE method allows to add a new middleware function
// NEXT allows the req to continue to the next middleware
// SEND allows us to send a req
// '/' doesnt mean any specific path, it means any path starting with '/'

const http = require("http");

const express = require("express");
const { title } = require("process");

const app = express(); // here we store express in a const as a function bcz express exports a function

app.use("/", (req, res, next) => {});

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method:'POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express!!!</h1>");
});

const server = http.createServer(app);

server.listen(3000);

import express from "express";

let configviewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //ejs la 1 framework
    app.set("views", "./src/views")
}

module.exports = configviewEngine;

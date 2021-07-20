//noi ma moi lan truy cap vao duong link cua minh thi se chay vao duong link nay dau tien 
import express from "express";
import homeController from "../controllers/homeController";
import usercontroller from "../controllers/userController"

let router = express.Router();//ng dan dg

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);
    
    router.post("/post-crud", homeController.postCRUD)
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);

    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);
 
    router.post('/api/login',usercontroller.handleLogin); 

    //rest api
    return app.use("/", router);
}

module.exports = initWebRoutes;
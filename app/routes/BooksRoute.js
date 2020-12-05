BooksRoute = app => {
    const BookController = require("../controllers/BookController");
  
    var Router = require("express").Router();
  
    // Create a new Book
    Router.post("/", BookController.create);
  
    // Retrieve a single Book with id
    Router.get("/:id", BookController.findOne);

    // Retrieve all Books 
    Router.get("/", BookController.findAll);
  
    // Update a Book with id
    // Router.put("/:id", BookController.update);
  
    // mounts the router module on a path in the main app.    
    app.use('/api/books', Router);
};

module.exports = BooksRoute

// GET /items?price=gte:10&price=lte:100
// GET /users?sort_by=email&order_by=asc
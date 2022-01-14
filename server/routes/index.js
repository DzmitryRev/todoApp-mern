const Router = require("express");
const router = new Router();
const TodoController = require("../controllers/todo.controller");
const UserController = require("../controllers/user.controller");

// Auth Routes
router.post("/login", UserController.login);
router.post("/signup", UserController.signUp);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activateAccount);
router.get("/refresh", UserController.refresh);

// Todos Routes
router.get("/todo", TodoController.getAllTodos);
router.get("/todo/:id", TodoController.getTodo);
router.post("/todo", TodoController.createTodo);
router.put("/todo/:id", TodoController.editTodo);

module.exports = router;

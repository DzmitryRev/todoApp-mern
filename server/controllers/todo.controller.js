class TodoController {
  async getAllTodos(req, res, next) {
    res.send("get all todos");
    // try - catch
    // add error class
    // add service function with logic
  }
  async getTodo(req, res, next) {
    const id = req.params.id;
    res.send("get todo " + id);
    // try - catch
    // add error class
    // add service function with logic
  }
  async createTodo(req, res, next) {
    res.send("post todo");
    // try - catch
    // add error class
    // add service function with logic
  }
  async editTodo(req, res, next) {
    const id = req.params.id;
    res.send("put todo " + id);
    // try - catch
    // add error class
    // add service function with logic
  }
}

module.exports = new TodoController();

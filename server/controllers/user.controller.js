class UserController {
  async login(req, res, next) {
    res.send("login");
    // try - catch
    // add error class
    // add service function with logic
  }
  async logout(req, res, next) {
    res.send("logout");
    // try - catch
    // add error class
    // add service function with logic
  }
  async signUp(req, res, next) {
    res.send("registration");
    // try - catch
    // add error class
    // add service function with logic
  }
  async activateAccount(req, res, next) {
    const activationLink = req.params.link;
    res.send("activate account " + activationLink);
    // try - catch
    // add error class
    // add service function with logic
  }
  async refresh(req, res, next) {
    res.send("refresh token");
    // try - catch
    // add error class
    // add service function with logic
  }
}

module.exports = new UserController();

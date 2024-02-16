const validate = require('../middleware/validationMiddleware');

const login = (req, res) => {
 
  validate.validateLogin(req, res);
  res.json({ message: 'Login successful' });
};

const register = (req, res) => {
 
  validate.validateRegister(req, res);
  res.json({ message: 'Registration successful' });
};

module.exports = {
  login,
  register,
};

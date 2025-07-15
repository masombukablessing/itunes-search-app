const jwt = require('jsonwebtoken');
const token = jwt.sign({ user: 'demo' }, 'secret123', { expiresIn: '2h' });
console.log(token);

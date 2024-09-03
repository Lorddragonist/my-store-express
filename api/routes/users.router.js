const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [{
    name: 'Andres',
    id: 1,
  }, {
    name: 'Felipe',
    id: 2,
  }];

  res.json(users);
});


module.exports = router;

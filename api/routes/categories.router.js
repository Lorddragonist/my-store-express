const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [{
    name: 'Electronics',
    id: 1,
  }, {
    name: 'Shoes',
    id: 2,
  }];

  res.json(categories);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const userService = require('../services/user-service');

router.get('/', async (req, res, next) => {
  res.send(await userService.findAll());
});

router.get('/:id/json', async (req, res, next) => {
  const user = await userService.find(req.params.id);
  if (!user) res.status(404);
  res.send(user);
});

router.post('/', async (req, res, next) => {
  const user = await userService.add(req.body);

  res.send(user);
});
router.delete('/:id', async (req, res, next) => {
  await userService.del(req.params.id);

  res.send('User Deleted!');
});

module.exports = router;

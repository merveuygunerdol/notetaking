const express = require('express');
const router = express.Router();

const noteService = require('../services/note-service');

router.get('/', async (req, res, next) => {
  res.send(await noteService.findAll());
});

router.get('/notes', async (req, res, next) => {
  const notes = await noteService.findAll();
  res.render('note', { notes });
});

router.get('/:id', async (req, res, next) => {
  const note = await noteService.find(req.params.id);

  res.render('note-detail', { note });
});

router.post('/', async (req, res, next) => {
  const note = await noteService.add(req.body);

  res.send(note);
});

router.delete('/:id', async (req, res, next) => {
  await noteService.del(req.params.id);

  res.send('Note Deleted!');
});

module.exports = router;

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
  res.send(note);
});

router.get('/:id/json', async (req, res, next) => {
  const note = await noteService.find(req.params.id);
  if (!note) res.status(404);
  res.send(note);
});

router.post('/', async (req, res, next) => {
  const note = await noteService.add(req.body);

  res.send(note);
});
// to-do list
router.post('/:noteId/todo', async (req, res, next) => {
  const note = await noteService.find(req.params.noteId);
  const todo = await noteService.find(req.body.todoId);

  note.todo.addToSet(todo);
  await todo.save();
  const newNote = await note.save();
  res.send(newNote);
});

router.delete('/:id', async (req, res, next) => {
  await noteService.del(req.params.id);

  res.send('Note Deleted!');
});

module.exports = router;

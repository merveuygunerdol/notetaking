import test from 'ava';
import request from 'supertest';
import app from '../app';

test('Get list of notes', async (t) => {
  const noteToCreate = { title: 'Title', body: 'Body' }; // same as axios.post....

  const creation = await request(app) // same as axios.post.... supertest lib syntax
    .post('/note')
    .send(noteToCreate);

  const res = await request(app) // get the list of notes - get the results to test - check the db
    .get('/note');

  t.is(res.status, 200); // check if this test is successfull
  t.true(Array.isArray(res.body), 'Body should be an array');
  t.true(res.body.length > 0); // there should be at least 1 note
});

test('Create new note', async (t) => {
  const noteToCreate = { title: 'Title1', body: 'Body1' };

  const res = await request(app) // calls the backend api - creates a record in mongodb then api returns the created note
    .post('/note')
    .send(noteToCreate);

  t.is(res.status, 200);
  t.is(res.body.title, noteToCreate.title); // check the fields - is title matching w/ the note that I create
  t.is(res.body.body, noteToCreate.body);
});

test('Get details of a note', async (t) => {
  t.plan(2);

  const note = (await request(app)
    .post('/note')
    .send({ title: 'Title2', body: 'Body2' }))
    .body;

  const show = await request(app)
    .get(`/note/${note.id}/json`);

  t.is(show.status, 200);
  t.deepEqual(show.body, note); // body of the response(note) should exactly match the note that I created before
});

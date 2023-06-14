const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

//All routes should live here, structure is free-form

// /api/minions

// GET /api/minions to get an array of all minions.
apiRouter.get('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions);
});

// POST /api/minions to create a new minion and save it to the database.
apiRouter.post('/minions', (req, res, next) => {
    const newMinion = req.body;
    const minion = db.addToDatabase('minions', newMinion)
    if(minion) {
        res.status(201).send(minion);
    } else {
        res.status(404).send();
    }
});

// GET /api/minions/:minionId to get a single minion by id.
apiRouter.get('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minion = db.getFromDatabaseById('minions' , minionId);
    if(minion) {
        res.status(200).send(minion);
    } else {
        res.status(404).send();
    }
});

// PUT /api/minions/:minionId to update a single minion by id.
apiRouter.put('/minions/:minionId', (req, res, next) => {
    const minionToUpdate = req.body;
    const minion = db.updateInstanceInDatabase('minions', minionToUpdate);
    if(minion) {
        res.status(204).send(minion);
    } else {
        res.status(404).send();
    }
});

// DELETE /api/minions/:minionId to delete a single minion by id.
apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const result = db.deleteFromDatabasebyId('minions', minionId)
    if(result) {
        res.status(204).send(minionId);
    } else {
        res.status(404).send();
    }
});


// /api/ideas

// GET /api/ideas to get an array of all ideas.
apiRouter.get('/ideas/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.status(200).send(ideas);
});

// POST /api/ideas to create a new idea and save it to the database.
apiRouter.post('/ideas', (req, res, next) => {
    const newIdea = req.body;
    const idea = db.addToDatabase('ideas', newIdea)
    if(idea) {
        res.status(201).send(idea);
    } else {
        res.status(404).send();
    }
});

// GET /api/ideas/:ideaId to get a single idea by id.
apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const idea = db.getFromDatabaseById('ideas' , ideaId);
    if(idea) {
        res.status(200).send(idea);
    } else {
        res.status(404).send();
    }
})

// PUT /api/ideas/:ideaId to update a single idea by id.
apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    const ideaToUpdate = req.body;
    const idea = db.updateInstanceInDatabase('ideas', ideaToUpdate);
    if(idea) {
        res.status(204).send(idea);
    } else {
        res.status(404).send();
    }
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const result = db.deleteFromDatabasebyId('ideas', ideaId)
    if(result) {
        res.status(204).send(ideaId);
    } else {
        res.status(404).send();
    }
});


// /api/meetings

// GET /api/meetings to get an array of all meetings.
apiRouter.get('/meetings', (req, res, next) => {
    const meetings = db.getAllFromDatabase('meetings');
    res.status(200).send(meetings);
});

// POST /api/meetings to create a new meeting and save it to the database.
apiRouter.post('/meetings', (req, res, next) => {
    const newMeeting = db.createMeeting();
    const meeting = db.addToDatabase('meetings', newMeeting)
    if(meeting) {
        res.status(201).send(meeting);
    } else {
        res.status(404).send();
    }
});

// DELETE /api/meetings to delete all meetings from the database.
apiRouter.delete('/meetings', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.status(204).send();
});


module.exports = apiRouter;

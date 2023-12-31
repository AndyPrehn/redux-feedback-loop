const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET request to get user data
router.get('/', (req, res) => {

    let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.error('Error getting results from DB', error);
            res.sendStatus(400);
        });

})

// POST request handling user submission
router.post('/', (req, res) => {
    console.log(req.body);
console.log('Andy');
    let queryText = `INSERT INTO "feedback" ("name", "feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4, $5);`;
   
    pool.query(queryText, [
        req.body.name,
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments])
        .then(result => {
            res.sendStatus(200);
            console.log('POST successful.');
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });

});

module.exports = router;
const express = require('express');
const connection = require('../db.js');

const router = express.Router();

router.get('/projets',(req, res) =>{
  res.send("helloroutes")
});

router.get('/projets',(req, res) =>{
  connection.query('SELECT * from projet', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/projets/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * from projet WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } 
    if (results.length === 0) {
      return res.sendStatus(404);
    } else {
      res.json(results[0]);
    }
  });
}); 

router.post('/projets/', (req, res) => {
  const formData = req.body;
  if (formData.name == null || formData.name === '') {
    res.sendStatus(422);
  } else {
    connection.query('INSERT INTO projet SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(201).json({...formData, id:results.insertId });
      }
    });
  }
});

router.put('/projets/:id', (req, res) => {
  const id = req.params.id;
  const formData = req.body;
  if (formData.name == null || formData.name === '') {
    res.status(400).send("miss information");
  } else {
    connection.query('UPDATE projet SET ? WHERE id=?' , [formData, id], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send({...formData});
      }
    });
  }
});

router.delete('/projets/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM projet WHERE id = ?', id, err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(204);
    }
  });
});

module.exports = router;
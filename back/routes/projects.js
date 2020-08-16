const express = require('express');
const connection = require('../db.js');

const router = express.Router();


router.get('/',(req, res) =>{
  connection.query('SELECT * from projet', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

//fait
router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM projet WHERE id = ?', id, err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(204);
    }
  });
});

//parse request
/*
const extractProject =(req, res, next) => {
  next();
};

const extractProjectId = (req, res, next) => {
  req.id = parseInt(req.params.id);
  next();
};

// db query

const findProject = (req, res, next) => {
  db.query('SELECT * from projet', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      req.data = results
    }
  });
}

const findProjectById = (req, res, next) => {
  db.query('select * from users where project = ?', [Id], (err, results) => {
      if (err) {
          console.log(err);
          res.sendStatus(500);
      }
      else {
        req.data = results[0];
        next();
      }
  })
}

// response construction

/*const sendProjectIfExist = (req, res, next) => {
  const { data } = req;

  if (data == null) {
    return res.sendStatus(404);
  }
  res.json(data);
};

const sendIfExists = (req, res) => {
  const { data } = req;
  if (data == null) {
    return res.sendStatus(404);
  }
  res.json(data);
};

// using middleware
app.get('/projets', extractProject, findProject, sendIfExists);
app.get('/projets/:id', extractProjectId, findProjectById, sendIfExists);
*/

// ne pas oublier de passer conection en db
module.exports = router;
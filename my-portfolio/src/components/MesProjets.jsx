import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Link,

} from 'react-router-dom';

const MesProjets = () => {

  const [projets, setprojets] = useState([]);

  useEffect (() => {
    Axios.get(`http://localhost:8000/projets`,)
      .then((response) => {
        setprojets(response.data);
      });
  }, []);
  
  return (
    <div>
      {projets !== null ? projets.map((projet)=> <Link className="" to="/projet"><img src={projet.image} alt={projet.name} className="" /></Link> ) : ""}
    </div>
  );
}

export default MesProjets;

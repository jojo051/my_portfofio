import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Projets = () => {

  const [projets, setprojets] = useState([]);

  useEffect (() => {
    Axios.get(`http://localhost:8000/projets`,)
      .then((response) => {
        setprojets(response.data);
      });
  }, []);
  

  return (
    <div>
      hello
      {/*{projets.map((projet)=> ) }*/}
    </div>
  );
}

export default Projets;

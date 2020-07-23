import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Link,

} from 'react-router-dom';

const MesProjets = () => {

  const [projects, setProjects] = useState([]);

  useEffect (() => {
    Axios.get(`http://localhost:8000/projects`,)
      .then((response) => {
        setProjects(response.data);
      });
  }, []);
  
  return (
    <div>
      {projects.map((project)=>  <Link to={`/projects/${project.id}`}><img src={project.image} alt={project.name} /></Link>  )}
    </div>
  );
}

export default MesProjets;

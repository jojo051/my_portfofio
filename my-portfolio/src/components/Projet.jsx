
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  useParams,
} from 'react-router-dom';
import Footer from './Footer';
import ContactMe from './ContactMe';

const Projet = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  useEffect (() => {
    Axios.get(`http://localhost:8000/projects/${projectId}`,)
      .then((response) => {
        setProject(response.data);
      });
  }, []);

  return (
    <>
      <section>
        <img src={project.image} alt={project.name}/>
        <h1>{project.name}</h1>
          <div>
            <div>
              {project.type}
            </div>
            <div>
            {project.texte_pitch}
            </div>
            <div>
            {project.lien}
            </div>
          </div>
        <div><ContactMe /></div>
        <div><Footer /></div>
      </section>
    </>
  );
}

export default Projet;

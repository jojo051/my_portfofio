
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Link,
  useParams,
} from 'react-router-dom';
import Footer from './Footer';
import ContactMe from './ContactMe';
import './projet.css';

const Projet = () => {

  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  

  useEffect (() => {
    Axios.get(`http://localhost:8000/projects/${projectId}`,)
      .then((response) => {
        setProject(response.data);
      });
  }, [projectId]);
    
  

  return (
      <section className="project">
        <img src={project.image} alt={project.name}/>
        <h1>{project.name}</h1>
          <div className="project-presentation">
            <div className="project-type">
              <p>Type de projet</p>{project.type}
            </div>
            <div className="project-texte">
            <p>Description du projet</p>
            {project.texte_pitch}
            </div>
            <div className="project-lien">
            <p>Lien du projet</p>
            {project.lien}
            </div>
          </div>
          <div className="project-all-button"> 
            <button type="button" onClick={projectId -1} >projet précédent</button>
            <Link className="button-link-home" to="/home">
              retour
              <img src="" alt="" className="button-home" />
            </Link>
            <button type="button" onClick={projectId +1}>projet suivant</button>
          </div>
        <div><ContactMe /></div>
        <div><Footer /></div>
      </section>
  );
}

export default Projet;

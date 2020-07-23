
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Link,
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
  }, [projectId]);
    
  

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
          <div> 
            <button type="button" onClick={projectId -1} >projet précédent</button>
            <Link className="BtnLink" to="/home">
              home
              <img src="" alt="" className="" />
            </Link>
            <button type="button" onClick={projectId +1}>projet suivant</button>
          </div>
        <div><ContactMe /></div>
        <div><Footer /></div>
      </section>
    </>
  );
}

export default Projet;

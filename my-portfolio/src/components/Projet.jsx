
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
      <section className="flex flex-col items-center justify-center text-center">
        <img className=" max-w-xl" src={project.image} alt={project.name}/>
        <h1 className="">{project.name}</h1>
          <div className="">
            <div className="">
              <p>Type de projet</p>{project.type}
            </div>
            <div className="">
            <p>Description du projet</p>
            {project.texte_pitch}
            </div>
            <div className="">
            <p>Lien du projet</p>
            {project.lien}
            </div>
          </div>
          <div className=""> 
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button" onClick={projectId -1} >projet précédent</button>
            <Link  to="/home" className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              retour home
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button" onClick={projectId +1}>projet suivant</button>
          </div>
        <div><ContactMe /></div>
        <div><Footer /></div>
      </section>
  );
}

export default Projet;

import React from 'react';
import Footer from './Footer';
import {
  Link,
} from 'react-router-dom';
import ContactMe from './ContactMe';
import MesProjets from './MesProjets';
import zoomjojo from '../image/zoomjojo.png';

const Home = () => {
  return (
    <>
      <div> 
        <h1>Bonjour</h1>
        <h2> Je me présente</h2>
        <p> moi, c'est joel, ... lorem ipsum</p>
        <p> lorem ipsum</p>
        <img src={zoomjojo} alt="" />
        <h2>Bon passons aux choses serieuses ...</h2>
        <p>Voici quelques uns des projets que je suis fier de vous presenter :</p>
          <MesProjets />

          <Link className="BtnLink" to="/projet">
            voir le projet
            <img src="" alt="" className="BtnImg" />
          </Link>

        <h2>Envie de me contacter ?</h2>
          <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default Home;

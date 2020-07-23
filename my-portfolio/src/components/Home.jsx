import React from 'react';
import Footer from './Footer';
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
        <p> Je suis développeur Web junior à la recherche d'un stage, extrêmement motivé pour développer constamment mes compétences et évoluer professionnellement</p>
        <img src={zoomjojo} alt="" />
        <h2>Bon passons aux choses serieuses ...</h2>
        <p>Voici quelques uns des projets que je suis fier de vous presenter :</p>
          <MesProjets />
        <h2>Envie de me contacter ?</h2>
          <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';
import Footer from './Footer';
import ContactMe from './ContactMe';
import MesProjets from './MesProjets';
import zoomjojo from '../image/zoomjojo.png';
import './home.css';

const Home = () => {
  return (
      <section className="home"> 
        <div>
          <h1>Bonjour</h1>
          <div className="home-intro">
            <h2> Je me présente</h2>
            <p> moi, c'est joel, ... lorem ipsum</p>
            <p> Je suis développeur Web junior à la recherche d'un stage, extrêmement motivé pour développer constamment mes compétences et évoluer professionnellement</p>
          </div> 
            <div classname="home-img"><img src={zoomjojo} alt="my head" /></div>
            <h1>Bon passons aux choses serieuses ...</h1>
            <p>Voici quelques uns des projets que je suis fier de vous presenter :</p>
          <div className="home-projects">
            <MesProjets />
          </div>
          <div className="home-contact">
            
              <ContactMe />
          </div>
          <Footer />
        </div>
      </section>
  );
}

export default Home;

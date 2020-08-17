import React from 'react';
import Footer from './Footer';
import ContactMe from './ContactMe';
import MesProjets from './MesProjets';
import zoomjojo from '../image/zoomjojo.png';

const Home = () => {
  return (
      <section className="flex flex-col justify-center text-center"
      > 
        <div>
          <h1 className="text-6xl text-white bg-blue-500 h-45 flex justify-center items-center" >Bonjour</h1>
          <div className="">
            <h2 className="">Je me présente</h2>
            <p className=""> moi, c'est joel,</p>
            <p className="" > Je suis développeur Web junior à la recherche d'un stage, extrêmement motivé pour développer constamment mes compétences et évoluer professionnellement</p>
          </div> 
            <div className="flex justify-center"><img className="max-w-xl" src={zoomjojo} alt="my head" /></div>
            <h1 className="text-6xl text-white bg-blue-500 h-45 text-center flex items-center">Bon passons aux choses serieuses ...</h1>
            <p>Voici quelques uns des projets que je suis fier de vous presenter :</p>
          <div className="flex justify-center">
            <MesProjets />
          </div>
          <div className="">
              <ContactMe />
          </div>
          <Footer />
        </div>
      </section>
  );
}

export default Home;

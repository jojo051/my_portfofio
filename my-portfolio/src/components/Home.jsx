import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div> 
      <h1>Bonjour</h1>
      <h2> Je me presente</h2>
      <p> moi, c'est joel, ... lorem ipsum</p>
      <p> lorem ipsum</p>
      <img src="" alt="" />
      <h2>Bon passons aux choses serieuses ...</h2>
      <p>Voici quelques uns des projets que je suis fier de vous presenter :</p>
      <projets></projets>
      <h2>Envie de me cotacter ?</h2>
      <button type="button" >Envoyer un Email</button>
      </div>
      <Footer />
    </>
  );
}

export default Home;

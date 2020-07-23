import React from 'react';
import Footer from './Footer';
import {
  Link,
} from 'react-router-dom';
import ContactMe from './ContactMe';

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
          <Link className="BtnLink" to="/projets">
            voir mes projets
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

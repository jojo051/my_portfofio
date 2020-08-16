import React from 'react';
import {
  Link,
} from 'react-router-dom';

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h2>Envie de me contacter ?</h2>
      <Link className="button-link-contactme" to="/contact">
        Envoyer un Email
        <img src="" alt="" className="button-" />
      </Link>
    </div>
  );
}

export default ContactMe;

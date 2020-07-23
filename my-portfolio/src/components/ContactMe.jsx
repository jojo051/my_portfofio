import React from 'react';
import {
  Link,
} from 'react-router-dom';

const ContactMe = () => {
  return (
    <>
    <Link className="button-link-contactme" to="/contact">
      Envoyer un Email
      <img src="" alt="" className="button-" />
    </Link>
    </>
  );
}

export default ContactMe;

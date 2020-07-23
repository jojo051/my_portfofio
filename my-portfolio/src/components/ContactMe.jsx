import React from 'react';
import {
  Link,
} from 'react-router-dom';

const ContactMe = () => {
  return (
    <>
    <Link className="BtnLink" to="/contact">
      Envoyer un Email
      <img src="" alt="" className="BtnImg" />
    </Link>
    </>
  );
}

export default ContactMe;

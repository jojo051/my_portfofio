import React, {useState} from 'react';
import {
  Link,
} from 'react-router-dom';
import './contact.css';


const Contact = () => {
  const [sendName, setSendName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const onChangeSendName = (e) => {
    setSendName(
      e.target.value,
    );
  };

  const onChangeMail = (e) => {
    setMail(
      e.target.value,
    );
  };

  const onChangeMessage = (e) => {
    setMessage(
      e.target.value,
    );
  };

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <section className="contact">
      <h1>Formulaire de contact</h1>
        <form onSubmit={submitForm} className="contact-form">
          <div className="label-send-name">
            <label htmlFor="sendname" >Votre nom:  </label>
              <input
                type="text"
                id="sendname"
                name="sendname"
                onChange={onChangeSendName}
                value={sendName}
                required
                />
          </div> 
          <div className="label-mail">
            <label htmlFor="mail" >Votre adresse Email:  </label>
              <input
                type="text"
                id="mail"
                name="mail"
                onChange={onChangeMail}
                value={mail}
                required
                />
          </div>
          <div className="label-texarea"> 
            <label htmlFor="textarea" >Message à envoyer: </label>
              <textarea 
                id="textarea" 
                name="textarea"
                value={message}
                rows="5" 
                cols="33"
                onChange={onChangeMessage}
                required
              >
              </textarea>
          </div>
            <div className="button-send-mail">
              <button type="submit" >
                Envoyer
              </button>
            </div>
        </form>
      <Link className="button-link-home" to="/home">
        retour
        <img src="" alt="" className="button-home" />
      </Link>
    </section>
  );
}

export default Contact;

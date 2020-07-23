import React, {useState} from 'react';
import {
  Link,
} from 'react-router-dom';


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
    <section>
      <h1>Formulaire de contact</h1>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="sendname" className="label-send-name">Votre nom:  </label>
              <input
                type="text"
                id="sendname"
                name="sendname"
                onChange={onChangeSendName}
                value={sendName}
                required
                />
          </div> 
          <div>
            <label htmlFor="mail" className="label-mail">Votre adresse Email:  </label>
              <input
                type="text"
                id="mail"
                name="mail"
                onChange={onChangeMail}
                value={mail}
                required
                />
          </div>
          <div>
            <label htmlfor="story">Message à envoyer: </label>
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
            <div>
              <button type="submit" className="button-send-mail">
                Envoyer
              </button>
            </div>
        </form>
      <Link className="BtnLink" to="/home">
        retour
        <img src="" alt="" className="" />
      </Link>
    </section>
  );
}

export default Contact;

import "./style.css";
import { spirals } from "../../assets";
import { useState, useCallback, useRef, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    let userInfo = window.localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    if (userInfo) {
      setFullName(userInfo.fullName);
      setEmail(userInfo.email);
    }
  }, []);

  const handleOnNameChange = ({ target }) => {
    setFullName(target.value);
  };
  const handleMessageChange = ({ target }) => {
    setMessage(target.value);
  };
  const handleOnEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const form = useRef();

  const sendEmail = useCallback((event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_lot6wql", // service id
        "template_d8w04q9", // template id
        form.current,
        "Kefe-D8ptQvK3HNJ7" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }, []);
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${spirals})`,
      }}
    >
      <form className="form" ref={form} onSubmit={sendEmail}>
        <h2>Have some questions?</h2>
        <div className="form-input">
          <TextInput
            label="Full Name"
            name="name"
            defaultValue={fullName}
            onChange={handleOnNameChange}
          />
        </div>
        <div className="form-input">
          <TextInput
            label="Email address"
            name="email"
            defaultValue={email}
            onChange={handleOnEmailChange}
          />
        </div>
        <div className="form-input">
          <TextArea
            label="Send us a message"
            name="message"
            defaultValue={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className="form-input">
          <Button className="submit-button">Send 💌</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

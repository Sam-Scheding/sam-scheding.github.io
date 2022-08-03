import "./style.css";
import { spirals } from "../../assets";
import { useState, useCallback, useRef, useEffect } from "react";
import Button from "../../components/Button";
import Success from "../../components/Success";
import emailjs from "emailjs-com";

const Contact = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [submitted, setSubmitted] = useState(false);

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
          setSubmitted(true);
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
      {submitted ? (
        <Success message={"Your message has been sent!"} />
      ) : (
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h2 class="title">Have some questions?</h2>
          <div class="input-container ic1">
            <input
              name="name"
              class="input"
              type="text"
              placeholder=" "
              defaultValue={fullName}
              onChange={handleOnNameChange}
              required
            />
            <div class="cut cut-short" />
            <label htmlFor="name" class="placeholder">
              Full Name
            </label>
          </div>

          <div class="input-container ic2">
            <input
              class="input"
              type="email"
              placeholder=" "
              name="email"
              defaultValue={email}
              onChange={handleOnEmailChange}
              required
            />
            <div class="cut cut-email" />
            <label htmlFor="email" class="placeholder">
              Email Address
            </label>
          </div>

          <div class="input-container ic2 text-area">
            <textarea
              class="input text-area-input"
              type="text"
              placeholder=" "
              name="message"
              required
            />
            <div class="cut" />
            <label htmlFor="message" class="placeholder">
              Send us a message
            </label>
          </div>

          <div className="form-input">
            <Button className="submit-button">Send 💌</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;

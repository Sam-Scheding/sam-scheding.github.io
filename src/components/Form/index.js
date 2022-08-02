import { useState, useCallback, useRef, useEffect } from "react";
import "./style.css";
import Checkbox from "../Checkbox";
import emailjs from "emailjs-com";

const Form = () => {
  const [isChecked, setChecked] = useState(false);
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

  const handleOnChange = useCallback(({ target }) => {
    setChecked(target.checked);
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
        "template_ct2k4ca", // template id
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

  if (submitted) {
    return <div class="form submitted">✅</div>;
  }

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <h2 class="title">RSVP</h2>
      <div class="subtitle">Kindly reply by October 2022</div>

      <div class="input-container ic1">
        <input
          id="name"
          name="name"
          class="input"
          type="text"
          placeholder=" "
          defaultValue={fullName}
          onChange={handleOnNameChange}
          required
        />
        <div class="cut cut-short" />
        <label for="name" class="placeholder">
          Full Name
        </label>
      </div>

      <div class="input-container ic2">
        <input
          id="email"
          class="input"
          type="text"
          placeholder=" "
          name="email"
          defaultValue={email}
          onChange={handleOnEmailChange}
          required
        />
        <div class="cut cut-email" />
        <label for="email" class="placeholder">
          Email Address
        </label>
      </div>

      <div class="ic2">
        <Checkbox
          name="attendance"
          className="form-input"
          label="Will you be joining us?"
          onChange={handleOnChange}
          value={isChecked}
        />
      </div>
      {isChecked && (
        <div class="input-container ic2">
          <input
            name="dietary"
            id="dietary"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut" />
          <label for="dietary" class="placeholder">
            Dietary Restrictions/Allergies
          </label>
        </div>
      )}

      <button type="text" class="button__input">
        submit
      </button>
    </form>
  );
};

export default Form;

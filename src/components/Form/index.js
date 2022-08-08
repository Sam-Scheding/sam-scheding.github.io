import { useState, useCallback, useRef, useEffect } from "react";
import "./style.css";
import Checkbox from "../Checkbox";
import emailjs from "emailjs-com";
import Success from "../Success";
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

  const handleOnChange = useCallback(() => {
    setChecked(!isChecked);
  }, [isChecked]);

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
    return <Success message={"Your RSVP has been sent!"} />;
  }

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <h2 class="title">RSVP</h2>
      <div class="subtitle">Kindly reply by 31 October 2022</div>

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
        <>
          <div class="input-container ic2">
            <input
              class="input"
              type="tel"
              placeholder=" "
              name="mobile"
              required
            />
            <div class="cut cut-email" />
            <label htmlFor="mobile" class="placeholder">
              Mobile Number
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
          <div class="input-container ic2">
            <input
              class="input"
              type="text"
              placeholder=" "
              name="address"
              required
            />
            <div class="cut cut-email" />
            <label htmlFor="address" class="placeholder">
              Postal Address
            </label>
          </div>
          <div class="input-container ic2">
            <input name="dietary" class="input" type="text" placeholder=" " />
            <div class="cut" />
            <label htmlFor="dietary" class="placeholder">
              Dietary Restrictions/Allergies
            </label>
          </div>
          <div class="input-container ic2 text-area">
            <textarea
              class="input text-area-input"
              type="text"
              placeholder=" "
              name="special"
            />
            <div class="cut" />
            <label htmlFor="special" class="placeholder">
              SPECIAL QUESTION TBC
            </label>
          </div>
        </>
      )}
      <div class="input-container ic2 text-area">
        <textarea
          class="input text-area-input"
          type="text"
          placeholder=" "
          name="comments"
        />
        <div class="cut cut-short" />
        <label htmlFor="comments" class="placeholder">
          Comments
        </label>
      </div>
      <button type="submit" class="button__input">
        submit
      </button>
    </form>
  );
};

export default Form;

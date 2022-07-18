import { useState, memo, useCallback, useRef } from "react";
import "./style.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import emailjs from "emailjs-com";

function Form() {
  const [isChecked, setChecked] = useState(false);

  const handleOnChange = useCallback(({ target }) => {
    setChecked(target.checked);
  }, []);

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }, []);

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <h2>RSVP</h2>
      <p>Kindly reply by October 2022</p>
      <div className="form-input">
        <TextInput label="Full Name" name="name" />
      </div>

      <div className="form-input">
        <TextInput label="Email address" name="email" />
      </div>

      <div className="form-input">
        <Checkbox
          name="attendance"
          className="form-input"
          label="Will you be joining us?"
          onChange={handleOnChange}
          value={isChecked}
        />
      </div>
      {isChecked && (
        <div className="form-input">
          <TextInput
            label="Dietary Restrictions/Allergies"
            placeholder="Vegetarian, Vegan, Celiac, etc"
            name="dietary"
          />
        </div>
      )}
      <div className="form-input">
        <Button className="submit-button">Reply Now</Button>
      </div>
    </form>
  );
}

export default memo(Form);

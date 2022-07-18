import { useState, memo, useCallback, useRef } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import SelectInput from "./components/Select";
import emailjs from "emailjs-com";

function App() {
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
    <div className="root">
      <header className="header">
        <h1>Mia & Vlad's Wedding RSVP</h1>
      </header>
      <main>
        <div className="container">
          <iframe
            title="Wedding location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.318545704798!2d144.96581558271888!3d-37.805747226059054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad668f6537835d7%3A0xdd25b58e27cec5f4!2sLune%20Croissanterie!5e0!3m2!1sen!2sus!4v1655984142122!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container">
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
        </div>
      </main>
    </div>
  );
}

export default memo(App);

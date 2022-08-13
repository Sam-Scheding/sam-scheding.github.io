import { useState, useCallback, useRef, useEffect } from "react";
import "./style.css";
import Checkbox from "../Checkbox";
import emailjs from "emailjs-com";
import Success from "../Success";
const Form = () => {
  const [isChecked, setChecked] = useState(true);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [additionalGuests, setAdditionalGuests] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [guestAttendance, setGuestAttendance] = useState([])

  useEffect(() => {
    let userInfo = window.localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    console.log(userInfo)

    if (userInfo) {
      setFullName(userInfo.fullName);
      setEmail(userInfo.email);
      setAdditionalGuests(userInfo.guests)
      if((userInfo.guests && userInfo.guests.length > 0)) {
        setGuestAttendance(Array(userInfo.guests.length).fill(true))
      }
    }
  }, []);


  const handleOnGuestChange = (event, id) => {
    const g = [...guestAttendance]
    g[id] = !g[id]
    setGuestAttendance(g)
  }

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
      <h2 className="title">RSVP</h2>
      <div className="subtitle">Kindly reply by 31 October 2022</div>

      <div className="input-container ic1">
        <input
          name="name"
          className="input"
          type="text"
          placeholder=" "
          defaultValue={fullName}
          onChange={handleOnNameChange}
          required
        />
        <div className="cut cut-short" />
        <label htmlFor="name" className="placeholder">
          Full Name
        </label>
      </div>

      <div className="ic2">
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
          <div className="input-container ic2">
            <input
              className="input"
              type="tel"
              placeholder=" "
              name="mobile"
              required
            />
            <div className="cut cut-email" />
            <label htmlFor="mobile" className="placeholder">
              Mobile Number
            </label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              type="email"
              placeholder=" "
              name="email"
              defaultValue={email}
              onChange={handleOnEmailChange}
              required
            />
            <div className="cut cut-email" />
            <label htmlFor="email" className="placeholder">
              Email Address
            </label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              type="text"
              placeholder=" "
              name="address"
              required
            />
            <div className="cut cut-email" />
            <label htmlFor="address" className="placeholder">
              Postal Address
            </label>
          </div>
          <div className="input-container ic2">
            <input name="dietary" className="input" type="text" placeholder=" " />
            <div className="cut" />
            <label htmlFor="dietary" className="placeholder">
              Dietary Restrictions/Allergies
            </label>
          </div>
        </>
      )}

          {additionalGuests && additionalGuests.map((guest, idx) => (
            <div key={idx} style={{marginTop: "40px"}}>
              <hr />
              <div className="input-container ic1">
                <input
                  name={`name_${idx}`}
                  className="input"
                  type="text"
                  placeholder=" "
                  defaultValue={guest}
                  required
                />
                <div className="cut cut-email" />
                <label 
                  htmlFor={`name_${idx}`}
                  className="placeholder">
                  Guest Name {idx + 1}
                </label>
              </div>

              <div className="ic2">
                <Checkbox
                  name={`attendance_${idx}`}
                  className="form-input"
                  label={`Will ${guest} be joining us?`}
                  onChange={(event) => handleOnGuestChange(event, idx)}
                  value={guestAttendance[idx]}
                />
              </div>

              { guestAttendance[idx] && (
                <div className="input-container ic2">
                  <input 
                    name={`dietary_${idx}`}
                    className="input" type="text" placeholder=" " />
                  <div className="cut" />
                  <label 
                    htmlFor={`dietary_${idx}`}
                    className="placeholder">
                    Dietary Restrictions/Allergies
                  </label>
                </div>
              )}
            </div>
          ))

          }

        <hr />

        { isChecked && (
          <div className="input-container ic2 text-area">
            <textarea
              className="input text-area-input"
              type="text"
              placeholder=" "
              name="special"
            />
            <div className="cut cut-long" />
            <label htmlFor="special" className="placeholder">
              What’re your favourite songs to dance to?
            </label>
          </div>
      )}

      <div className="input-container ic2 text-area">
        <textarea
          className="input text-area-input"
          type="text"
          placeholder=" "
          name="comments"
        />
        <div className="cut cut-short" />
        <label htmlFor="comments" className="placeholder">
          Comments
        </label>
      </div>
      <button type="submit" className="button__input">
        submit
      </button>
    </form>
  );
};

export default Form;

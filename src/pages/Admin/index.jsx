import React from "react"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import NumberInput from "../../components/NumberInput"
import './style.css'
import { useState } from "react"

const BASE_URL = 'http://vladmiawedding.com'

export default function Admin() {
  // Form Data
  let [fullName, setFullName] = useState('')
  let [email, setEmail] = useState('')

  let [additionalGuests, setAdditionalGuests] = useState(0)

  let [guests, setGuests] = useState([]);
 
  let [displayLink, setDisplayLink] = useState('')
  let [decodedUserInfo, setDecodedUserInfo] = useState('')

  const handleOnGuestNameChange = (key, event) => {
    let newGuests = guests;
    newGuests[key] = event.target.value;
    setGuests(newGuests);
  }

  const handleOnClick = () => {
    const userInfo = {
      fullName,
      email,
      additionalGuests,
      guests,
    }

    const encodedUserInfo = window.btoa(JSON.stringify(userInfo))
    const urlEncodedUserInfo = encodeURIComponent(encodedUserInfo)

    const url = `${BASE_URL}/?u=${urlEncodedUserInfo}`
    setDisplayLink(url)

    const decoded = JSON.parse(window.atob(decodeURIComponent(urlEncodedUserInfo)))
    setDecodedUserInfo(JSON.stringify(decoded, null, 2))
  }

  const handleOnFullNameChange = (event) => {
    setFullName(event.target.value)
  }

  const handleOnEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleOnAdditionalGuestChange = (event) => {
    const addGuestsLength = Number(event.target.value);
    setAdditionalGuests(addGuestsLength);
    if(guests.length > addGuestsLength) {
      const newGuests = guests.splice(0, addGuestsLength);
      setGuests(newGuests);
    } else if (addGuestsLength > guests.length) {
      const newArray = new Array(addGuestsLength - guests.length).fill('');
      const mergeArray = [...guests, ...newArray];
      setGuests(mergeArray);
    }
  }

  return (
    <div className="admin-container">
      <div className="content">
        <h1>Generate RSVP Link</h1>
        <br />
        <div className="form-container">
          <TextInput 
            label='Full Name'
            name='fullName'
            onChange={handleOnFullNameChange}
          />
          <TextInput 
            label='Email'
            name='email'
            onChange={handleOnEmailChange}
          />
          <NumberInput
            label='Number of Additional Guests'
            name='additionalGuests'
            initialValue={additionalGuests}
            onChange={handleOnAdditionalGuestChange}

          />
          {!!guests.length && guests.map((_, idx) => (
            <TextInput
              key={idx}
              label={`Guest Name ${idx + 1}`}
              name='fullName'
              onChange={(event) => handleOnGuestNameChange(idx , event)}
            />
          ))}

          <Button
            type="submit"
            onClick={handleOnClick}
            >
            Generate
          </Button>
        {decodedUserInfo &&
          <code className="code-box">
            <pre>
              { decodedUserInfo }
            </pre>
          </code>
        }
        </div>
        <br />
        <div className="link-container">
          <a href={ displayLink }>
            { displayLink }
          </a>
        </div>
      </div>
    </div>
  )
}

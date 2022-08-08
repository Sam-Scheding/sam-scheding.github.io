import React from "react"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import './style.css'
import { useState } from "react"

const BASE_URL = 'http://vladmiawedding.com'

export default function Admin() {
  // Form Data
  let [fullName, setFullName] = useState('')
  let [email, setEmail] = useState('')
 
  let [displayLink, setDisplayLink] = useState('')
  let [decodedUserInfo, setDecodedUserInfo] = useState('')

  const handleOnClick = () => {
    const userInfo = {
      fullName,
      email,
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

  return (
    <div className="admin-container">
      <div className="content">
        <h1>Generate RSVP Link</h1>
        <br />
        <div className="form-container">
          <TextInput 
            label={'Full Name'}
            onChange={handleOnFullNameChange}
          />
          <TextInput 
            label={'Email'}
            onChange={handleOnEmailChange}
          />       
          <Button
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
        <div class="link-container">
          <a href={ displayLink }>
            { displayLink }
          </a>
        </div>
      </div>
    </div>
  )
}

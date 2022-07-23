import React from "react"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import './style.css'
import { useState } from "react"

// const BASE_URL = 'https://mia-and-vlads-wedding.com'
const BASE_URL = 'http://localhost:3000'

export default function Admin() {
  let [fullName, setFullName] = useState('')
  let [email, setEmailName] = useState('')
  let [displayLink, setDisplayLink] = useState('')

  const handleOnClick = () => {
    const userInfo = {
      fullName,
      email,
    }

    const encodedUserInfo = window.btoa(JSON.stringify(userInfo))
    const urlEncodedUserInfo = encodeURIComponent(encodedUserInfo)

    const url = `${BASE_URL}/?u=${urlEncodedUserInfo}`
    setDisplayLink(url)

    const decoded = window.atob(decodeURIComponent(urlEncodedUserInfo))
    console.log(JSON.parse(decoded))
  }

  const handleOnFullNameChange = (event) => {
    setFullName(event.target.value)
  }
  const handleOnEmailChange = (event) => {
    setEmailName(event.target.value)
  }

  return (
    <div className="admin-container">
      <div className="content">
        <a href={ displayLink }>
          { displayLink }
        </a>
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
        </div>
      </div>
    </div>
  )
}

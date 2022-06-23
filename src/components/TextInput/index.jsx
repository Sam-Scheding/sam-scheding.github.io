import React from 'react'
import './style.css'



export default function TextInput({ 
  label, 
  isRequired = false,
  placeholder, 
}) {
  return (
    <div className='text-input__root'>
      <label className='text-input__label'>
        { label }
      </label>
      <input 
        className='text-input__input'
        placeholder={placeholder}
        type="text" 
        required={isRequired} 
      />
    </div>
  )
}

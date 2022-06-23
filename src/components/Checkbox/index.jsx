import React from 'react'
import './style.css'



export default function Checkbox({ label, isRequired = false, onChange }) {

  return (
    <div className='checkbox__root'>
      <label className='checkbox__label'>
        { label }
      </label>
      <input 
        className='checkbox__input'
        type="checkbox" 
        required={isRequired}
        onChange={onChange}
      />
    </div>
  )
}

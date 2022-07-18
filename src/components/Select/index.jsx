import React from 'react'
import './style.css'



export default function TextInput({ label, isRequired = false, options }) {
  return (
    <div className='select__root'>
      <label className='select__label'>
        { label }
      </label>
      <select name="" id="">
        {
          options.map((option) => (
            <option className='select__option' value={option.value}>{ option.name }</option>
          ))
        }
      </select>
    </div>
  )
}

import React from 'react'
import './style.css'

export default function Button({ children, onClick }) {
  return (
    <button 
      className='button__input'
      onClick={onClick}
    >
      { children }
    </button>
  )
}

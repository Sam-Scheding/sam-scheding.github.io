import { useState, memo, useCallback } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import SelectInput from './components/Select';

function App() {
  const dietaryRequirementsOptions = [
    {
      name: 'Vegetarian',
      value: 'vegetarian',
    },
    {
      name: 'Vegan',
      value: 'vegan',
    },
    {
      name: 'Celiac',
      value: 'celiac',
    },
  ]

  const [isChecked, setChecked] = useState(false)
  
  const handleOnChange = useCallback(({ target }) => {
    setChecked(target.checked)
  }, [])

  return (
    <div className='root'>
      <header className='header'>
        <h1>Mia and Vlad's Wedding RSVP</h1>
      </header>
      <main>
        <div className='container'>
          <form className='form'>
            <h2>Enter your details</h2>
            <div className="form-input">
              <TextInput label='Full Name' />
            </div>

            <div className="form-input">
              <Checkbox 
                className='form-input' 
                label='I can make it' 
                onChange={handleOnChange}
              />
            </div>
            { isChecked && 
              <div className="form-input">
              <TextInput
                  label='Dietary Restrictions/Allergies'
                  placeholder='Vegetarian, Vegan, Celiac, etc'
                />
              </div>
            }
            <div className="form-input">
              <Button className="submit-button">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default memo(App)


const cache = {
  'some,serialised,function,args': 'some return value',
  'some,other,function,args': 'some new return value'
}

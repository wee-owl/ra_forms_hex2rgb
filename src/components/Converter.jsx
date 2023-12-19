import React from 'react';
import '../App.css';

function Converter() {
  const [state, setState] = React.useState('rgb(255, 255, 255)');

  const parser = (code) => code.match(/[a-f0-9]{2}/gi) ? parseInt(code, 16) : 'NaN';

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const r = parser(value.substring(1, 3));
    const g = parser(value.substring(3, 5));
    const b = parser(value.substring(5));
    const result = `rgb(${r}, ${g}, ${b})`;

    if (value.length === 7 && value.charAt(0) === '#' && !result.includes('NaN')) {
      setState(result);
    } else if (value.length === 7) {
      setState('Error!');
    }
  }

  return (
    <div  className='container' 
          style={{backgroundColor: state === "Error!" ? '#ff6464' : state}}>
      <div className='wrapper'>
        <input  className='input' 
                id='input' 
                maxLength={7} 
                placeholder='#ffffff' 
                onChange={handleChange}>
        </input>
        <label  className='output' 
                htmlFor='input'>
          {state}
        </label>
      </div>
    </div>
  )
}

export default Converter;

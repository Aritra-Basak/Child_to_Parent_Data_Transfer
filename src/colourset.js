import React from 'react'
import { useState } from 'react';

//child component
export default function Colourset({getcolour}) 
{
    let x =0;
    const[activeColour,setactiveColour]=useState(null); //useState to keep the written colour in the input field as a value
    const handleChange =(e)=>
    {
        x++;
        const {value}=e.target;
        setactiveColour(value);
        getcolour(value); //passing the written value to the getcolour function of the parent class
    }

    
  return (
    <div>
        <label>Write your colour.</label>
        <br></br>
        <input 
        type="text"
        id="input"
        aria-label='input'
        onChange={handleChange}
        value={activeColour}
        />
    </div>
  )
}

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Colourset from './colourset';

//parent component
function App() {
const[UIcolour,setUIcolour]=useState(null);
//our callback function--using this only we can pass data from child to parent,like we passed the below function as a prop to the child component and then the child component passed the value for the mycolour parameter
const getcolour=(mycolour)=>
{
  //getting the mycolour value from the child class.
  setUIcolour(mycolour);
};



  return (
    <div className='mainApp'>
      <div className='App_colour_container' style={{background:`${UIcolour}`}}>
        <p>Hello, I am <strong>{UIcolour}</strong></p>
      </div>
      {/* passing the getcolour function as a prop in the Colourset component i.e. our child component */}
      <Colourset getcolour={getcolour}/> 
      
    </div>
  );
}

export default App;

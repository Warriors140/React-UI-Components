import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className= 'wholecalculator'>
    <div className= 'display'>
      <CalculatorDisplay text= '0'  />
    </div>  
    <div className= 'topbutton numberbutton2'>
      <ActionButton text= 'clear' actionStyle= 'clearbutton' />
      <ActionButton text= '&divide;' actionStyle= 'button2' />
    </div>  
    <div className= 'middlebutton1 numberbutton2'>
      <NumberButton text= '7' buttonStyle= 'button' />
      <NumberButton text= '8' buttonStyle= 'button' />
      <NumberButton text= '9' buttonStyle= 'button' />
      <ActionButton text= '&times;' actionStyle= 'button2' />
    </div>  
    <div className= 'middlebutton2 numberbutton2'>
      <NumberButton text= '4' buttonStyle= 'button' />
      <NumberButton text= '5' buttonStyle= 'button' />
      <NumberButton text= '6' buttonStyle= 'button' />
      <ActionButton text= '&minus;' actionStyle= 'button2' />
    </div>
    <div className= 'middlebutton3 numberbutton2'>  
      <NumberButton text= '1' buttonStyle= 'button' />
      <NumberButton text= '2' buttonStyle= 'button' />
      <NumberButton text= '3' buttonStyle= 'button' />
      <ActionButton text= '+' actionStyle= 'button2' />
    </div>
    <div className= 'bottombutton numberbutton2'>  
      <NumberButton text= '0' buttonStyle= 'zerobutton' />
      <ActionButton text= '=' actionStyle= 'button2' />
    </div>  
    </div>
    
    
 
  )
 }   

export default App;

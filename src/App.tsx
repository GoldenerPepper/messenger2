import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type InputProps={
  alias: String;
  defaultValue?: String;
}
const Input =(props:InputProps) => {
  return (
    <div className='InputComponent'>
      <div className='input-alias'>
        {props.alias}
      </div>
      <div className='input' contentEditable={true}></div>
    </div>
  )
}

function App() {
  return(
    <div className='registration'>
      <Input alias ={''} defaultValue={'Email'} />
      <Input alias ={''} defaultValue={'Password'} />
      <Input alias ={''} defaultValue={'Password'} />
      

    </div>
  )
 
}

export default App

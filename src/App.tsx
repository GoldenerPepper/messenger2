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

type ButtonProps ={
  title: String;
  bacgroundColor?: String; 
}

const Button = (props: ButtonProps) => {
  return (
    <div className='button' style={{backgroundColor: props.bacgroundColor}}>
      {props.title}

    </div>
  )
}

function Title() {
  return <div className='title'> 
    <h1>Registration</h1>;
  </div>
}

function App() {
  return(
    <div className='registration'>
      <div className='registrationPage'>
      <Input alias ={''} defaultValue={'Email'} />
      <Input alias ={''} defaultValue={'Password'} />
      <Input alias ={''} defaultValue={'Password'} />
      <Button title = {'Login'} />

      </div>
    </div>
  )
 
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'
function SignIn(props) {
  return (
    <div className='login'>
        <h1>SignIn Form</h1>
        <input type="text" placeholder="enter your user-name..." onChange={e=>props.setUsername(e.target.value)}/><br></br>
        <input type="text" placeholder='enter your email...' onChange={e=>props.setEmail(e.target.value)}/><br></br>
        <Link to="/details"><button>LogIn</button></Link><br></br><br></br>
    </div>
  )
}

export default SignIn
import { Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from './Form'

export default function Signup() {
    const  nav=useNavigate();

  return (
    <div> 
     <Form title='Signup' />
     <p  className='newAccount'>Already have an account? <a   onClick={()=>nav('/')} className='signupLink' > Login </a> </p>   
    </div>
  )
}

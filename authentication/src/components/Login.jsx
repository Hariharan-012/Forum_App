import { Input, TextField, Typography,Box, Button } from '@material-ui/core'
//   import LoginIcon from '@mui/icons-material/Login';
  import Outlook from '../Images/Outlook2.png'
import React,{useState} from 'react'
import Form from './Form';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [signup,setSignup]=useState(false);
    const navigate=useNavigate();
 
  return (
    <div  > 
        <Form title='Login' />

        <p  className='newAccount'> Don't have an account? <a   onClick={()=>navigate('/signup')} className='signupLink' > Sign Up </a> </p> 

    </div>



  )
}

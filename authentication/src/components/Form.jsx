import React from 'react'
import { Input, TextField, Typography,Box, Button } from '@material-ui/core'
import Outlook from '../Images/Outlook2.png'

export default function Form(props) {
  return (
    <div className='wrapper'>

      <div className='container'>   
      <Typography variant="h4"> {props.title} </Typography>      
  
     <form>    
           <TextField  style={{margin:'20px',width:'75%'  }} label='Incedo Mail '  color='primary'  variant='outlined' autoComplete='off' size='small' />
           <br /> 
           
           <TextField   style={{width:'75%'}} label='Password'   color='primary' variant='outlined' type='password' size='small'  />

            <br />
        {props.title==='Login' ? <a   className='forgotPwd' href='/'> Forgot password?</a> :''}    
            <br />
           <Button   style={{margin:'50px' ,width:'75%',borderRadius:'25px' ,padding:'12px'}} variant='contained' color='primary' > {props.title} </Button> 
   
           <div  class='line'>
               <div class='separator'> </div>
               <div class='or'> OR </div> 
            </div>  


            <div  className='outlookButton'> 
          
          <img  className='outlookIcon'src={Outlook} /> { props.title==='Login'? 'Login with Outlook ' :'Continue with Outlook' }
          </div>
           
           </form>
           </div>
    </div>
  )
}


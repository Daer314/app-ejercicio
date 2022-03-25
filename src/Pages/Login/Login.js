import React from 'react'
import { LoginContainer,
  FormContainer,
  InputContainer,
  FormInput,
  FormLabel,
} from './login-Styles.js'

function Login() {
  return (
    <LoginContainer>
      <FormContainer>
        <InputContainer>
          <FormInput placeholder='Enter Email'/>
          <FormLabel>Email</FormLabel>
        </InputContainer>        
        <InputContainer>
          <FormInput placeholder='Enter password'/>
          <FormLabel>Password</FormLabel>
        </InputContainer>
      </FormContainer>    
    </LoginContainer>
  )
}

export default Login
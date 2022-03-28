import React from 'react'
import SubmitButton from '../../Components/SubmitButton.js'
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
          <FormInput placeholder='Email'/>
          <FormLabel>Email</FormLabel>
        </InputContainer>        
        <InputContainer>
          <FormInput placeholder='Password'/>
          <FormLabel>Password</FormLabel>
        </InputContainer>
        <SubmitButton />
      </FormContainer>    
    </LoginContainer>
  )
}

export default Login
import React from 'react'
import SubmitButton from '../../Components/SubmitButton.js'
import {  SupContainer,
  SupFormContainer,
  SupFormInput,
  SupFormLabel,
  SupInputContainer

} from './Signup-Styles.js'

function Signup() {
  return (
    <SupContainer>
      <SupFormContainer>
        <SupInputContainer>
          <SupFormInput placeholder='Name' />
          <SupFormLabel>Name</SupFormLabel>
        </SupInputContainer>
        <SupInputContainer>
          <SupFormInput placeholder='Last Name'/>
          <SupFormLabel>Last Name</SupFormLabel>
        </SupInputContainer> 
        <SupInputContainer>
          <SupFormInput placeholder='Email'/>
          <SupFormLabel>Email</SupFormLabel>
        </SupInputContainer>        
        <SupInputContainer>
          <SupFormInput placeholder='Password'/>
          <SupFormLabel>Password</SupFormLabel>
        </SupInputContainer>
        <SubmitButton/>
      </SupFormContainer>
    </SupContainer>
  )
}

export default Signup
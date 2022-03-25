import styled from "styled-components";

export const LoginContainer = styled.div`
   margin-top: 10vh;
   height: 90vh;
   display: flex;
   align-items: center;
   padding: 0 30px;
`

export const FormContainer = styled.div`
   width: 100%;
   height: 300px;
   color: white;
   background-color: black;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   border-radius: 25px;
`

export const InputContainer = styled.div`
   width: 100%;
   margin: 8px 0;
   display: flex;
   align-items: center;
   flex-direction: column;
`

export const FormInput = styled.input`
   width: 70%;
   margin: 10px;
   height: 35px;
   padding-left: 10px;
   border: 1px solid white;
   border-radius: 10px;
`

export const FormLabel = styled.label`
   color: white;
`
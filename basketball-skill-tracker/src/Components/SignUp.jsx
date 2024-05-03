import React from "react";
import styled from "styled-components";

import TextInput from "./TextInput";
import Button from "./Button";
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () =>{
    return (
        <Container>
        <div>
          <Title>Create New Account 👋</Title>
          <Span>Please enter details to create a new account</Span>
        </div>
        <div style={{
            display: "flex",
            gap:"20px",
            flexDirection:"column"
        }}>
            <TextInput label="FullName" placeholder="Enter your Full-Name" />
            <TextInput label="Email Addres" placeholder="Enter your Email" />
            <TextInput label="Password" placeholder="Enter your Password" password/>
            <Button text="Signup"/>
        </div>
          
      </Container>
    )
}

export default SignUp;
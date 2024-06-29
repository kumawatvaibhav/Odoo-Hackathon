'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backgroundImage from '@/public/retro-living-room-interior-design.jpg'; // Ensure the image is in the public folder

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <ImageWrapper>
        <StyledImage src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <FormWrapper>
        <Form>
          <Title>{isLogin ? 'Login Now!' : 'Register!'}</Title>
          <Input placeholder="Username/Email" />
          <Input type="password" placeholder="Enter Password" />
          {!isLogin && <Input type="password" placeholder="Confirm Password" />}
          <Options>
            <RememberMe>
              <input type="checkbox" />
              Remember Me
            </RememberMe>
            {isLogin && <ForgotPassword>Forgot password?</ForgotPassword>}
          </Options>
          <Button>{isLogin ? 'Login' : 'Register'}</Button>
          <ToggleText>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <ToggleLink onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Register' : 'Login'}
            </ToggleLink>
          </ToggleText>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Form = styled.div`
  background: transparent;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  font-size: 1rem;
  background: transparent;
  color: white;

  &::placeholder {
    color: #282c34;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: white;
`;

const ForgotPassword = styled.a`
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  background: white;
  color: #0070f3;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #282c34;
  }
`;

const ToggleText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: white;
`;

const ToggleLink = styled.span`
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

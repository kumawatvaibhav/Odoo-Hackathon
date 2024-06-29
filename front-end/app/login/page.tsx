'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backgroundImage from '@/public/retro-living-room-interior-design.jpg'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful login, e.g., save token, redirect, etc.
        console.log('Login successful:', data);
      } else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login');
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful registration, e.g., redirect to login, etc.
        console.log('Registration successful:', data);
      } else {
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <StyledImage src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <Header>
        <BrandName>Furniture-Rent</BrandName>
      </Header>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Title>{isLogin ? 'Login Now!' : 'Register!'}</Title>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Input 
            placeholder="Username/Email" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <Input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <Options>
            <RememberMe>
              <input type="checkbox" />
              Remember Me
            </RememberMe>
            {isLogin && <ForgotPassword>Forgot password?</ForgotPassword>}
          </Options>
          <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
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

const Header = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

const BrandName = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
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

const Form = styled.form`
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
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

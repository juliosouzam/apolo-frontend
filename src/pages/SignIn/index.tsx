import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, AnimationContainer } from './styles';

import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    //
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>SignIn</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Login</Button>
          </Form>

          <Link to="/register">
            <FiLogIn />
            SignUp
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;

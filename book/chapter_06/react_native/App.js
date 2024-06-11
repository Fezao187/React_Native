import React from 'react';
import { Container, Header, Body, Title } from 'native-base';
import MyForm from './MyForm';
export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>List of Products</Title>
        </Body>
      </Header>
      <MyForm />
    </Container>
  );
}
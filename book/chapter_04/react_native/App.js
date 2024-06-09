import { StatusBar } from 'expo-status-bar';
import { Container, Header, Content, Button, Text, Body, Title } from 'native-base';
import ProductList from "./ProductList";
import Rating from './Rating';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export default function App() {
  return (
    <>
      <Container>
        <Header>
          <Body>
            <Title>List of Products</Title>
          </Body>
        </Header>
        <Content>
          <ProductList />
        </Content>
      </Container>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle:{
//     fontSize: 50
//     }
// });

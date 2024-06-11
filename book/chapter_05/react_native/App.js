import { Container, Header, Content, Body, Title } from 'native-base';
import ProductList from "./ProductList";
import MyCard from './MyCard';

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
        <MyCard>
 This is a long sentence, and I want to insert content into the
 Card component from the outside.
 </MyCard>
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

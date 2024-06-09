import { StatusBar } from 'expo-status-bar';
import { Container, Header, Content, H1, Text } from 'native-base';
import ProductList from "./ProductList";

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export default function App() {
  const user = {
    firstName: 'Kristine',
    lastName: 'Wildheart'
  };
  return (
    <>
      {/* <Container>
        <Header />
        <Content>
          <H1> Hello,</H1>
          <Text> {formatName(user)}</Text>
        </Content>
      </Container> */}
      <ProductList />
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

import { StatusBar } from 'expo-status-bar';
import { Container, Header, Content, Button, Text } from 'native-base';
import ProductList from "./ProductList";
import Rating from './Rating';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export default function App() {
  const isValid = false;
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
          <Button danger >
            <Text>Danger</Text>
          </Button>
          <Button danger disabled={!isValid}>
            <Text>Disabled</Text>
          </Button>
          <Rating rating="1" />
          <Rating rating='2' />
          <Rating rating='3' />
          <Rating rating='4' />
          <Rating rating='5' />
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

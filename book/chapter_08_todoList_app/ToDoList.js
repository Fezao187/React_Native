import React, { useContext } from 'react'
import { TodosContext } from './App'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, Container, Header } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default function ToDoList() {
    // receive state and dispatch from App.js
    const { state, dispatch } = useContext(TodosContext);
    const renderItem = data => (
        <View style={styles.rowFront}>
            <Text>{data.item.text}</Text>
        </View>
    );
    return (
        <Container>
            <Header><Text>ToDoList</Text></Header>
            <SwipeListView
                data={state.todos}
                renderItem={renderItem}
            />
        </Container>
    );
}
const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomWidth: 0.25,
        justifyContent: 'center',
        height: 50,
    }
});
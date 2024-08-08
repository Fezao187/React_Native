import React, { useReducer } from "react";

const todosInitialState = {
  todos: [{
    id: 1,
    text: "Finish doing hooks chapter"
  },
  {
    id: 2,
    text: "Ain't no way"
  },
  {
    id: 3,
    text: "Yeah"
  }]
};

function todosReducer(state, action) {
  switch (action.type) {
    default:
      return todosInitialState;
  }
}

export const TodosContext = React.createContext();

export default function App() {
  const [state, dispacth] = useReducer(todosReducer, todosInitialState);
  return (
    <TodosContext.Provider value={{ state, dispacth }}>
      {/* Add child components */}
    </TodosContext.Provider>
  )
}
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from './store/todoSlice';
 
function App() {
  
  const [text, setText] = useState('');
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText(' ');
  }
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  
  return (
    <div className="App">

      <InputField
        value={text} 
        handleInput={setText} 
        handleSubmit={addTask} 
      />

      {status === 'loading' && <h2>Загрузка...</h2>}
      {error && <h2>Упс, что-то пошло не так: {error}</h2>}
      
      <TodoList />
    </div>  
  );
}


export default App;
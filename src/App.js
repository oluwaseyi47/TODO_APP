import './App.css';
import React from 'react'
import AddTask from './Components/AddTask';
import List from './Components/List';
import './css/main.css'


function App() {
  return (
    <div className="App">
    <h1>Todo App</h1>
  <AddTask />
  <List />
    </div>
  ); 
}

export default App;

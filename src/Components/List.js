import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/Reducer";
import Task from "./Task";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodos: (id) => dispatch(completeTodos(id)),
  };
};

const List = (props) => {
    const [sort, setSort]= useState('active')
  return (
      <div className='list'>
    <div className='buttons'>
        <button onClick={()=>setSort('active')}>Active</button>
        <button onClick={()=>setSort('complete')}>Completed</button>
        <button onClick={()=>setSort('all')}>All</button>
        
    </div>
    <ul>
        {
            props.todos.length > 0 && sort === 'active' ?

            props.todos.map(item =>{
                return (
                    item.completed === false && 
                    <Task 
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                    />
                )
            })
        :null}

      {/* for completed items */}

      {
            props.todos.length > 0 && sort === 'completed' ?

            props.todos.map(item =>{
                return (
                    item.completed === true && 
                    <Task 
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                    />
                )
            })
        :null}

        {/* for all items */}
        {
            props.todos.length > 0 && sort === 'all' ?

            props.todos.map(item =>{
                return (
                    <Task 
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                    />
                )
            })
        :null}
    </ul>
      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

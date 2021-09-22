import React, {useState, useRef} from 'react'
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/Reducer';


const mapStateToProps = (state) => {
    return{
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo: (obj) =>dispatch(addTodos(obj)),
        removeTodo: (id) =>dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodos: (id)=> dispatch(completeTodos(id))
    };
};

 const AddTask = (props) => {
    const [todo, setTodo] = useState('');
    const inputRef = useRef(true);

    const changeFocus = ()=>{
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    const update = (id, value,e)=>{
        if(e.which === 13){
            // here 13 is key code for enter key
            props.updateTodo({id, item:value  })
            inputRef.current.disabled = true;
        }
    }

    const handleChange = (e) =>{
        setTodo(e.target.value);
    };
// console.log('props from store', props);

   return (
     <div className="addTodos">
       <input
         type="text"
         onChange={(e) => handleChange(e)}
         className="todo-input"
       />
       <button
         className="add-btn"
         onClick={() =>
           props.addTodo({
             id: Math.floor(Math.random() * 1000),
             item: todo,
             completed: false,
           })
         }  
       >
         ADD!
       </button>

     </div>
   );
 };

//  we can use connect methods to connect this component to redux
// export default AddTask
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
import React, { useState } from 'react';

const TodoForm = (props) => {
    const addTodo = props.addTodo;
    const [newTodo, setNewTodo] = useState("");
    return (
        <form className="todo-form" onSubmit={(event) => {
            event.preventDefault()
            addTodo(newTodo)
            setNewTodo("");
        }}>
            <h1>Todo</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(event) => {
                    // stuff goes here
                    setNewTodo(event.target.value);
                }}></input>
        </form>
    )
}

const TodoList = (props) => {
    const todoList = props.todoList;
    console.log(todoList);
    return <div className="todo-list">
        {
            todoList.map((item, idx) => {
                return <h3 key={idx}>{item}</h3>
            })
        }
    </div>
}

const Todo = (props) => {
    let [todoList, setTodoList] = useState([]);
    const addTodo = (todo) => {
        let updatedTodo = [...todoList, todo]
        setTodoList(updatedTodo);
    }
    return <div className="todo">
        <TodoForm addTodo={ addTodo }/>
        <TodoList todoList={ todoList }/>
    </div>
}

export default Todo;
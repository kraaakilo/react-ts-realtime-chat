import React, {useEffect, useState} from 'react';
import {TodoInterface} from "../interfaces/ChatInterface";

const App = () => {
    const [todos, setTodos] = useState<Array<TodoInterface>>([]);

    function deleteTodo(todo: TodoInterface): void {
        const newState : Array<TodoInterface> = todos.filter((subject) => subject.id !== todo.id);
        setTodos(newState);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(r => r.json())
            .then(a => setTodos(a));
    }, []);
    return (
        <div>
            {
                todos?.map((todo, index) =>
                    <div onClick={() => deleteTodo(todo)} key={index} className="card bg-secondary text-white m-2">
                        <div className="card-body">
                            <h5 className="card-title">Todo {todo.id}</h5>
                            <p className="card-text">{todo.title}.</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default App;
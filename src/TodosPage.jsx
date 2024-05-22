import React, { useEffect, useState } from 'react';

function TodosPage() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []); // Bo'sh massiv effekt faqat tarkib yuklanganda bajarilishini ta'minlaydi.

    return (
        <div>
            <h1>TODOS/POSTS</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodosPage;

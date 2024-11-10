import { useState } from "react";

const Todo = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    settodos([todo, ...todos]);
    settodo("");
  }
  function deleteTodo(indexToDelete) {
    settodos(todos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-blue-950 flex items-center justify-center gap-20 text-gray-100">
      <div className="h-[600px] w-[1000px] border-none rounded-lg bg-gray-900 shadow-md p-20">
        <div>
          <h1>Todo app</h1>
          <form action="" onSubmit={addTodo}>
            <input
              required
              onChange={(e) => settodo(e.target.value)}
              type="text"
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        {todos.map((item, index) => (
          <div>
            <label htmlFor="inputcheck">{item}</label>
            <input key={index} type="checkbox" id="inputcheck" />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

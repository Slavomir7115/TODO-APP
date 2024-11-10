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
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-blue-950 flex items-center justify-center text-gray-100">
      <div className="flex flex-row justify-center items-center gap-5 h-[600px] w-[1000px] border-gray-100 border-y-2 rounded-xl bg-gray-900 shadow-md p-20">
        <div className="flex flex-col w-full h-full justify-start items-start gap-5">
          <h1 className="text-3xl uppercase">Todo app</h1>
          <form className="flex flex-row gap-3" action="" onSubmit={addTodo}>
            <input
              className="border-gray-100 border-b-2 text-center  bg-transparent rounded-lg text-gray-100"
              required
              onChange={(e) => settodo(e.target.value)}
              type="text"
            />
            <button
              className="text-gray-100 bg-blue-950 py-2 px-3 uppercase rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full h-full flex flex-col justify-start items-center gap-10">
          <h2 className="text-3xl">Your tasks</h2>
          {todos.map((item, index) => (
            <div>
              <label htmlFor="inputcheck">{item}</label>
              <input key={index} type="checkbox" id="inputcheck" />
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

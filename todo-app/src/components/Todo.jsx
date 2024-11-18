import { useEffect, useState } from "react";

const Todo = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const savedTodosString = localStorage.getItem("todos");
    if (savedTodosString) {
      try {
        const savedTodos = JSON.parse(savedTodosString);
        console.log(savedTodos);
        settodos(savedTodos);
      } catch (error) {
        console.error("Problem with parse", error);
      }
    } else {
      console.log("no tasks in local storage.");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();
    if (todo) {
      settodos((prevTodos) => [todo, ...prevTodos]);
      settodo("");
    }
  }

  function deleteTodo(indexToDelete) {
    settodos(todos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-blue-950 flex items-center justify-center text-gray-100">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 h-[600px] w-[1000px] border-gray-100 border-y-2 rounded-xl bg-gray-900 shadow-md p-20">
        <div className="flex flex-col w-full h-full justify-start items-center sm:items-start gap-5">
          <h1 className="text-3xl uppercase">Todo app</h1>
          <form className="flex flex-row gap-3" action="" onSubmit={addTodo}>
            <input
              className="border-gray-100 border-b-2 text-center  bg-transparent rounded-lg text-gray-100"
              required
              value={todo}
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

        <div className="w-full h-full flex flex-col justify-start items-center gap-5 overflow-y-auto">
          <h2 className="text-3xl">Your tasks</h2>
          {todos.map((item, index) => (
            <div key={index} className="flex gap-5 justify-center items-center">
              <input
                type="checkbox"
                id={`inputcheck-${index}`}
                className="peer"
              />
              <label
                htmlFor={`inputcheck-${index}`}
                className="text-xl peer-checked:text-gray-400 cursor-crosshair"
              >
                {item}
              </label>

              <button
                className="text-gray-100 bg-blue-950 py-2 px-3 uppercase rounded-lg"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

import React, { useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";

function Todo() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "공부하기",
      stat: false,
    },
    {
      id: 2,
      title: "청소하기",
      stat: false,
    },
    {
      id: 3,
      title: "운동하기",
      stat: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const currIndex = useRef(4);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: currIndex.current, title, stat: false }]);
    currIndex.current = currIndex.current + 1;
  };

  const handleChecked = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, stat: !todo.stat } : todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        TODO LIST / {JSON.stringify(new Date().toLocaleDateString())}
      </div>
      <ul className="todolist">
        {todoList &&
          todoList.map((todo) => (
            <div className={todo.stat ? "todo checked" : "todo"} key={todo.id}>
              <input
                onChange={() => handleChecked(todo.id)}
                className="todo__ckbox"
                type="checkbox"
                checked={todo.stat}
              />
              <li className="todo__title">{todo.title}</li>
              <BsFillTrashFill
                className="todo__trash"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          ))}
      </ul>
      <form className="todo__add" onSubmit={handleSubmit}>
        <input
          className="todo__add--title"
          type="text"
          placeholder="Add to Work"
          onChange={(e) => setTitle(e.target.value)}
        />
        <IoMdAddCircleOutline
          className="todo__add--btn"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Todo;

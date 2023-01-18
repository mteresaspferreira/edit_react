/**
 *
 * Learn Todo List App use State
 * Cria uma aplicação que receba uma lista de coisas a aprender
 * Desta lista criem uma botão que permita alterar o estado de esse elemento
 * - A lista é um estado
 * - Para remover ou adicionar elementos devemos modificar o estado
 */

import { useState } from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import "./styles.css";

const EX02 = () => {
  const [todoList, setTodoList] = useState([
    {
      id: "a",
      task: "Learn React",
      complete: true,
    },
    {
      id: "b",
      task: "Learn NodeJS",
      complete: true,
    },
    {
      id: "c",
      task: "Learn MongoDB",
      complete: false,
    },
  ]);
  const [newTask, setNewTask] = useState({});
  const [checked, setChecked] = useState(false);

  const elementoAdicionar = {
    id: "d",
    task: "Master JS",
    complete: false,
  };

  const addTask = () => {
    const allTodoList = [...todoList, elementoAdicionar];
    console.log(allTodoList);
    setTodoList(allTodoList);
  };

  const removeTask = () => {
    setTodoList(todoList.filter((index) => index < todoList.length - 1));
  };

  //current date
  const date = new Date();
  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();

  const creatNewTask = (e) => {
    setNewTask({
      id: crypto.randomUUID(),
      task: e.target.value,
      complete: checked,
    });
    console.log(newTask);
  };

  const addNewTask = () => {
    const addElements = [...todoList, newTask];
    setTodoList(addElements);
  };

  const handleChangeInputCheckbox = (e) => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="date-list">
          <p className="date-list--day">{day}</p>
          <p className="date-list--monthYear">
            <span className="date-list--month">{month}</span>
            <span className="date-list--year">{year}</span>
          </p>
        </div>
        <div className="title-list">My Roadmap</div>
      </div>
      <div>
        <Input type={"text"} OnChangeInput={creatNewTask} />
        <Checkbox
          label={"is completed?"}
          type={"checkbox"}
          checked={checked}
          onChange={handleChangeInputCheckbox}
        />
        <button onClick={addNewTask}>submit</button>
      </div>
      <ul className="card-main">
        {todoList.map((el) => (
          <li
            key={el.id}
            className={"task " + (el.complete ? "completed" : null)}
          >
            <span>{el.task}</span>
            <span>{el.complete ? "✅" : "❌"}</span>
          </li>
        ))}
      </ul>
      <div className="card-buttons">
        <button
          disabled={todoList.length == 3}
          className="btn btn-remove"
          onClick={removeTask}
        >
          –
        </button>
        <button
          disabled={todoList.length == 4}
          className="btn btn-add"
          onClick={addTask}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default EX02;

/*
 * Learn Todo List App use State
 * Cria uma aplicação que receba uma lista de coisas a aprender
 * Desta lista criem uma botão que permita alterar o estado de esse elemento
 * - A lista é um estado
 * - Para remover ou adicionar elementos devemos modificar o estado
 */

import { useState, useEffect } from "react";
import CurrentDate from "../CurrentDate/CurrentDate";
import Tasks from "../Tasks/Tasks";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import "./styles.css";

const initialList = [
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
];

const elementoAdicionar = {
  id: "d",
  task: "Master JS",
  complete: false,
};

const EX02 = () => {
  const [todoList, setTodoList] = useState(initialList);
  const [newTask, setNewTask] = useState({});
  const [checked, setChecked] = useState(false);

  const addTask = () => {
    const allTodoList = [...todoList, elementoAdicionar];
    setTodoList(allTodoList);
  };

  const removeTask = () => {
    setTodoList(
      todoList.filter((element, index) => index < todoList.length - 1)
    );
  };

  const creatNewTask = (e) => {
    setNewTask({
      id: crypto.randomUUID(),
      task: e.target.value,
      complete: checked,
    });
    console.log("new task ", newTask);
  };

  const addNewTask = () => {
    const addElements = [...todoList, newTask];
    setTodoList("add elements ", addElements);
  };

  const handleChangeInputCheckbox = (e) => {
    setChecked(!checked);
    console.log("checked ", checked);
  };

  return (
    <div className="card">
      {/* <div className="card-header">
        <CurrentDate />
        <div className="title-list">My Roadmap</div>
      </div> */}
      <div>
        <Input type={"text"} OnChangeInput={creatNewTask} />
        {/* <Checkbox
          label={"is completed?"}
          type={"checkbox"}
          checked={checked}
          onChange={handleChangeInputCheckbox}
        /> */}
        <button type="button" onClick={addNewTask}>
          submit
        </button>
      </div>
      <Tasks list={todoList} />
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

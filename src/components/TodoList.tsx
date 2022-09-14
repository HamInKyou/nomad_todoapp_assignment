import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryListState, categoryState, toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categoryList = useRecoilValue(categoryListState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateCategory />
      <select value={category} onInput={onInput}>
        {categoryList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

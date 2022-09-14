import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, toDoState, categoryListState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categoryList = useRecoilValue(categoryListState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {categoryList
        .filter((item) => category !== item)
        .map((item) => (
          <button name={item} key={item} onClick={onClick}>
            {item}
          </button>
        ))}
    </li>
  );
}

export default ToDo;

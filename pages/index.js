import { useState } from "react";
import { nanoid } from "nanoid";
export default function Home() {
  const [todoList, setTodoList] = useState([
    { id: "59bieMO6JsBbN-5", item: "water the plants!!!!!!" },
    { id: "oYLHf2rIAfm7MAS", item: "do the laundry" },
    {
      id: "QqzYOVmlhuLqf_y",
      item: "read 50 pages of a book (dhivas recommends the steve jobs biography)",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const convertItemIntoList = (item) => {
    return (
      <li>
        {item.item}
        <button
          onClick={() =>
            setTodoList((prevTodolist) =>
              prevTodolist.filter((curr) => curr.id !== item.id)
            )
          }
        >
          Remove item
        </button>
      </li>
    );
  };

  return (
    <>
      <h1>To do list</h1>
      {todoList.map(convertItemIntoList)}
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button
        onClick={() => {
          setTodoList((prevTodoList) => {
            return prevTodoList.concat([{ id: nanoid(), item: inputVal }]);
          });
          setInputVal("");
        }}
      >
        Add item
      </button>
      <br />
      <button onClick={() => setTodoList([])}>Clear all</button>
    </>
  );
}

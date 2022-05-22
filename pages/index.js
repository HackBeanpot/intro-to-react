import { useState } from "react";
import { nanoid } from "nanoid";
export default function Home() {
  const [todoList, setTodoList] = useState([
    { id: "59bieMO6JsBbN-5", item: "water the plants" },
    { id: "oYLHf2rIAfm7MAS", item: "do the laundry" },
    {
      id: "QqzYOVmlhuLqf_y",
      item: "read 50 pages of a book (dhivas recommends the steve jobs biography)",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  return (
    <>
      <h1>To do list</h1>
      <ul>
        {todoList.map((listItem) => (
          <li key={listItem.id}>
            {listItem.item}
            <button
              onClick={() =>
                setTodoList((prevTodoList) =>
                  prevTodoList.filter((currItem) => currItem.id !== listItem.id)
                )
              }
            >
              Remove item
            </button>
          </li>
        ))}
      </ul>
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button
        onClick={() => {
          setTodoList((prevTodoList) => [
            ...prevTodoList,
            { id: nanoid(), item: inputVal },
          ]);
          setInputVal("");
        }}
      >
        Add item
      </button>
    </>
  );
}

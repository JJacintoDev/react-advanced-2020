import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    //setPerson({ ...person, message: "hello" }); usar isto para objetos. se tiver as 3 variaveis em cima nao ta em objeto
    //os 3 pontos e para copiar os valores anteriores do objeto todos
    setMessage("hello wordl");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        lol clica
      </button>
    </>
  );
};

export default UseStateObject;

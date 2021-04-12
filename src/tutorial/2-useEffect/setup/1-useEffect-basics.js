import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call use");
    if (value >= 1) {
      document.title = `new messages(${value})`;
    }
  }, [value]); //trigger ao use effect quando value é updated

  useEffect(() => {
    console.log("call use");
  }, []); //com o segundo parametro vazio, apenas corre no inicial render

  console.log("lol");
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        botao
      </button>
    </>
  );
};

export default UseEffectBasics;

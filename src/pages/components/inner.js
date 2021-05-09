import React, { useContext } from "react";
import messageContext from "../../contexts/messageContext";

export default function Inner() {
  const [message, setMessage] = useContext(messageContext);
  return (
    <>
      <h3>Inner:</h3>
      <button className="button"  onClick={() => {setMessage(Math.random().toString())}}></button>
    </>
  );
}
 
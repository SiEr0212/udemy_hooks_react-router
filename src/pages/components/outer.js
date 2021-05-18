import React, {useContext} from "react";
import Inner from "./inner";
import messageContext from '../../contexts/messageContext';

export default function Outer() {
  return (
    <>
      <h2>Outer: {useContext(messageContext)[0]}</h2>
      <Inner></Inner>
    </>
  );
}

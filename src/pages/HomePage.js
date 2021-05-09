import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";

export default function HomePage() {
  return (
    <>
      <h1>Welcome Home Page</h1>
      <h2>Message:{useContext(messageContext)}</h2>
    </>
  );
}

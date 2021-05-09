import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";

export default function AboutPage() {
  return (
    <>
      <h1>Welcome About Page</h1>
      <h2>Message:{useContext(messageContext)}</h2>
    </>
  );
}

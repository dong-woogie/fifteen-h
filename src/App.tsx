import React from "react";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import "./styles/styles.css";

function App() {
  return (
    <Wrapper>
      <Nav />
      <Content />
    </Wrapper>
  );
}

export default App;

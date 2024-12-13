import { useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  useEffect(() => {
    console.log("Init");
  });

  return (
    <Container orientacion="vertical">
      <>
        <Counter inc={2} />
        <Counter inc={4} />
      </>
    </Container>
  );
}

export default App;

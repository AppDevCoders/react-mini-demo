import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { Container, Orientations } from "./Container";

function App() {
  const [orientation, setOrientacion] = useState<Orientations>(
    Orientations.horizontal
  );

  useEffect(() => {
    console.log("Init");
  });

  const handleRotate = () => {
    setOrientacion((prev) =>
      prev === Orientations.horizontal
        ? Orientations.vertical
        : Orientations.horizontal
    );
  };

  return (
    <div className="flex flex-col gap-2 min-w-[300px]">
      <Container label="Demo" orientation={orientation}>
        <>
          <Counter inc={1} label="Inc (1)" />
          <Counter inc={5} label="Inc (5)" />
        </>
      </Container>
      <button className="bg-green-500 text-black" onClick={handleRotate}>
        Rotate
      </button>
    </div>
  );
}

export default App;

import { useState } from "react";

// hook
export const useCounter = () => {
  const [valor, setValor] = useState<number>(0);

  const increment = (num: number = 1) => {
    setValor((prev) => prev + num);
  };

  const decrement = (num: number = 1) => {
    setValor((prev) => prev - num);
  };

  const reset = () => {
    setValor(0);
  };

  return {
    valor,
    increment,
    decrement,
    reset,
  };
};

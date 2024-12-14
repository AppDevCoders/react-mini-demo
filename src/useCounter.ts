import { useState } from "react";

// hook
export const useCounter = () => {
  const [value, setValue] = useState<number>(0);

  const increment = (num: number = 1) => {
    setValue((prev) => prev + num);
  };

  const decrement = (num: number = 1) => {
    setValue((prev) => prev - num);
  };

  const reset = () => {
    setValue(0);
  };

  return {
    value,
    increment,
    decrement,
    reset,
  };
};

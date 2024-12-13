import { useCounter } from "./useCounter";

type CounterProps = {
  inc?: number;
};

const Counter: React.FC<CounterProps> = ({ inc = 1 }) => {
  const { valor, increment } = useCounter();

  const handleClick = () => {
    increment(inc);
  };

  return (
    <>
      <div className="bg-slate-100 text-cyan-500">{valor}</div>
      <button onClick={handleClick}>Cambiar</button>
    </>
  );
};

export default Counter;

import { useCounter } from "./useCounter";

type CounterProps = {
  inc?: number;
  label?: string;
};

const Counter: React.FC<CounterProps> = ({ inc = 1, label = "Change" }) => {
  const { value, increment } = useCounter();

  const handleClick = () => {
    increment(inc);
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="bg-slate-100 text-gray-500">{value}</div>
      <button className="bg-blue-500 text-white" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Counter;

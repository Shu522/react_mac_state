import { useState } from "react";

const PlusButton = () => {
  const [num, setNum] = useState(0);

  const plus = () => {
    setNum((v) => {
      return v + 1;
    });
  };

  const minus = () => {
    setNum((v) => {
      return v - 1;
    });
  };

  const reset = () => {
    setNum((v) => {
      return 0;
    });
  };

  return (
    <>
      <button onClick={plus} className="bg-red-300 p-2">
        Plus
      </button>
      <button onClick={minus} className="bg-blue-300 p-2">
        Minus
      </button>
      <button onClick={reset} className="bg-black text-white p-2">
        Reset
      </button>

      <span>{num}</span>
    </>
  );
};

export default PlusButton;

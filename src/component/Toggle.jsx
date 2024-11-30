import { useState } from "react";

const Toggle = () => {
  const ON = () => {
    return { text: "ON", color: "green" };
  };

  const OFF = () => {
    return { text: "OFF", color: "red" };
  };

  const [btn, setBtn] = useState("ON");
  const change = () => {
    setBtn((v) => {
      return v === "ON" ? "OFF" : "ON";
    });
  };

  return (
    <button
      onClick={change}
      style={{ backgroundColor: btn === "ON" ? "green" : "red" }}
      className="p-2 text-white"
    >
      {btn}
    </button>
  );
};

export default Toggle;

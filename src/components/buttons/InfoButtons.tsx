import React from "react";

interface ButtonsProps {
  text: string;
}

export const Buttons: React.FunctionComponent<ButtonsProps> = ({ text   }) => {
  return (
    <button
      className={
        "bg-blue-400 p-2 text-white w-40 rounded-lg shadow text-center my-2 shadow-blue-400"
      }

    >
      <p>{text}</p>
    </button>
  );
};

export default Buttons;

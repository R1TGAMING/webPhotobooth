import React, { JSX } from "react";

interface ButtonsProps {
  text: string;
  href?: string;
}

export const InfoButtons: React.FunctionComponent<ButtonsProps> = ({
  text,
  href = "#",
}): JSX.Element => {
  return (
    <a href={href}>
      <button
        className={
          "bg-blue-400 p-2 text-white cursor-pointer w-40 rounded-lg shadow text-center my-2 shadow-blue-400"
        }
      >
        <p>{text}</p>
      </button>
    </a>
  );
};

export default InfoButtons;

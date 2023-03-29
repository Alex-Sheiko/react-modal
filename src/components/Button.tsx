import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  className: string;
}

export const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

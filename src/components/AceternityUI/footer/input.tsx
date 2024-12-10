import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ id, type = "text", placeholder, className = "", ...props }) => {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
        {...props}
      />
    );
  };
  
  export default Input;
  
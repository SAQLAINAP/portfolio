import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  placeholder: string;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, placeholder, className = "", ...props }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
      rows={4}
      {...props}
    />
  );
};

export default Textarea;
  
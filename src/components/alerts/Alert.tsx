import React from 'react';

interface AlertProps {
  variant: 'success' | 'error';
  message?: string;
}

const Alert: React.FC<AlertProps> = ({ variant, message }) => {
  let alertClass = '';
  let prefix = '';

  if (variant === 'success') {
    alertClass = 'bg-green-700 text-green-500 border-green-700';
    prefix = 'Success!';
  } else if (variant === 'error') {
    alertClass = 'bg-red-700 text-red-500 border-red-700';
    prefix = 'Error occurred.';
  }

  return (
    <div data-testid={`alert-${variant}`} className={`p-3 font-bold bg-opacity-20 border ${alertClass} text-center break-words`}>
      {prefix} {message}
    </div>
  );
};

export default Alert;

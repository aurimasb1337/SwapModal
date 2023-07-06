import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fetching?: boolean;
  'data-testid'?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, fetching , 'data-testid': testId }) => {
  const buttonClass = `py-3 px-8 flex mx-auto text-white text-opacity-90 border border-gray-300 rounded-lg text-lg font-bold  shadow-lg transition-all ${
    disabled || fetching ? 'cursor-not-allowed bg-purple-500 hover:bg-purple-500' : 'bg-purple-800  hover:bg-purple-900'
  }`;

  return (
    <button data-testid={testId} className={buttonClass} onClick={onClick} disabled={disabled || fetching}>
      {fetching ? (
        <div className='flex align-center items-center gap-1'>
          <svg
            data-testid='loading-spinner'
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.309-2.691 6-6 6-1.657 0-3-1.343-3-3H6v2.291z"
            ></path>
          </svg>
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

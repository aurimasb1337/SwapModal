import { useState, useEffect, useRef, useContext } from "react";
import { erc20Tokens } from "../../util/tokens/tokens";
import { tokenType } from "../../util/types/tokenType";
import { SwapContext } from "../../context/SwapProvider";

interface CustomDropdownProps {
  open?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ open = false }) => {
  const [isOpen, setOpen] = useState<boolean>(open);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {targetSwapToken, setTargetSwapToken} = useContext(SwapContext);


  const handleOptionClick = (value: tokenType) => {
    setTargetSwapToken(value);
    setOpen(false);
  };

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} data-testid="select-dropdown"  className="relative inline-block">
      <div
        className="flex items-center justify-between block w-full h-16 appearance-none bg-gray-800 text-white px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        onClick={toggleDropdown}
      >
        <span className="text-white" data-testid="select-placeholder">{targetSwapToken?.name || "Select token"}</span>
      <div className="flex items-center justify-center">
        <span className="text-gray-500">{targetSwapToken?.symbol}</span>
      <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
          ></path>
        </svg>
      </div>
      </div>

      {isOpen && (
        <div  className={`absolute mt-0 py-2 w-full bg-gray-800 border border-gray-600 rounded shadow`}>
          {erc20Tokens.map((token) => (
            <div
              key={token.symbol}
              className={`px-4 py-2 cursor-pointer  hover:bg-gray-700 transition-all text-gray-200 ${targetSwapToken?.symbol===token.symbol ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleOptionClick(token)}
            >
              {token.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

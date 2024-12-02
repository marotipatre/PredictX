import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (selectedOptions: string[]) => void;
  className?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selected,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: string) => {
    const isSelected = selected.includes(option);
    if (isSelected) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={clsx("relative w-52", className)} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-s1 border border-s5 rounded-lg px-4 py-2 cursor-pointer"
      >
        <div className="text-white">
          {selected.length > 0 ? "Filters Applied" : "Select filters"}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
           className={`-mr-1 ml-2 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-lg bg-dark-2 shadow-lg ring-1 ring-dark-4">
          <ul className="py-2 text-gray-200 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option}
                className={clsx(
                  "px-4 py-2 cursor-pointer flex items-center hover:bg-s2 hover:text-white",
                  selected.includes(option) && "bg-s2 text-white"
                )}
                onClick={() => handleSelectOption(option)}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => handleSelectOption(option)}
                  className="form-checkbox h-5 w-5 text-blue-500 mr-2"
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;

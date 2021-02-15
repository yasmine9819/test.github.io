import React from "react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void;
}
function MenuButton({ isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <button
      className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-expanded={isMenuOpen}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        className={` ${isMenuOpen ? "hidden" : "block"}   h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className={` ${!isMenuOpen ? "hidden" : "block"}   h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default MenuButton;

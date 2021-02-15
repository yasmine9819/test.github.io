import React from "react";

interface Props {
  name: string;
}

function MenuLink({ name }: Props) {
  return (
    <a
      href="#"
      className="px-3 py-2 text-sm font-bold text-gray-700 border-none rounded-md font-menuLink hover:text-green-700"
    >
      {name}
    </a>
  );
}

export default MenuLink;

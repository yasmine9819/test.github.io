import React from "react";

interface Props {
  name: string;
  bgColor: string;
}
function TransitionIcon({
  name,
  bgColor,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`${bgColor} flex items-center p-1 m-1 overflow-hidden text-gray-500 duration-200 w-7 transition-width hover:w-32  hover:text-white`}
    >
      <span>{children}</span>
      <span className="font-medium max-w-0 hover:w-32">{name}</span>
    </div>
  );
}

export default TransitionIcon;

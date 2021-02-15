import React from "react";
import MenuLink from "./MenuLink";

interface Props {
  className: string;
}
function Menu({ className }: Props) {
  return (
    <div className={className}>
      <div
        className={` px-2 pt-2 pb-3 space-y-1 lg:flex lg:space-x-4 grid divide-y divide-black `}
      >
        <MenuLink name={""} />
        <MenuLink name={"LE GROUP"} />
        <MenuLink name={"DOMAINES D'ACTIVITÉ"} />
        <MenuLink name={"FONDATION"} />
        <MenuLink name={"ESPACE MEDIA"} />
        <MenuLink name={"CONTACT"} />
      </div>
    </div>
  );
}

export default Menu;

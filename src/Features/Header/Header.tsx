import React, { useState } from "react";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <Navbar />
      <nav className="bg-gray-50 ">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <MenuButton
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
            <div className="flex items-center justify-center flex-1 lg:items-stretch lg:justify-start">
              <div className="flex items-center flex-shrink-0">
                <a
                  href="#"
                  className="text-3xl font-bold text-gray-500 font-logo"
                >
                  SoftGroup
                </a>
              </div>
              <Menu className={`hidden lg:block lg:ml-6`} />
            </div>
          </div>
        </div>

        <Menu className={` ${!isMenuOpen ? "hidden" : "lg:hidden"} `} />
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import Brand from "./subcomponents/Brand";
import Nav from "./subcomponents/Nav";
import NavBarSM from "./subcomponents/NavBarSM";

function Navbar({ classname, children, id }: any) {
  return (
    <div id={id} className={classname}>
      {children}
    </div>
  );
}

Navbar.Brand = Brand;
Navbar.Nav = Nav;
Navbar.Sm = NavBarSM;
export default Navbar;

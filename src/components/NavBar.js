import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)
  return <nav>{navItems}</nav>;
}

export default NavBar;

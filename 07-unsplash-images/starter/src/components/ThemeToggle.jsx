import React, { useState } from "react";
import { useGlobalContext } from "../Context/Context";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
const ThemeToggle = () => {
    const {isDarkTheme , toggleDarkTheme} = useGlobalContext()
  return <section className="toggle-container">
    <button style={{}} className="dark-toggle" onClick={toggleDarkTheme}>
    { isDarkTheme ?(
        <IoMoon className="toggle-icon white" />
    ):<LuSun className="toggle-icon " />}
    </button>
  </section>;
};

export default ThemeToggle;

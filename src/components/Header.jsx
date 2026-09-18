import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <a className="btn btn-ghost text-xl">daisyUI</a>
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

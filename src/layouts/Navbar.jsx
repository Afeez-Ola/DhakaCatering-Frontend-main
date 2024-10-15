import React from "react";
import { Link } from "react-router-dom";
import WishListIn from "../components/WishListIn";
import UserIcon from "../components/ProfileIn";

export default function Navbar() {
  return (
    <div className="mx-4 mt-4">
      <div className="px-2 rounded-full shadow-md navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="flex gap-3 p-2 mt-5 shadow-md menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
            >
              <li className="flex content-center justify-center font-semibold hover-bordered">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li className="flex content-center justify-center font-semibold hover-bordered">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="flex content-center justify-center font-semibold hover-bordered">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="flex content-center justify-center font-semibold hover-bordered">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="flex content-center justify-center font-semibold hover-bordered">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="hidden text-xl font-bold normal-case btn sm:flex btn-ghost"
          >
            DarVoo Catering
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-3 px-1 menu menu-horizontal">
            <li className="flex content-center justify-center font-semibold hover-bordered">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className="flex content-center justify-center font-semibold hover-bordered">
              <Link to="/menu">Package</Link>
            </li>
            <li className="flex content-center justify-center font-semibold hover-bordered">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="flex content-center justify-center font-semibold hover-bordered">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="flex content-center justify-center font-semibold hover-bordered">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <WishListIn />
          <UserIcon />
        </div>
      </div>
    </div>
  );
}

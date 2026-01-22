import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";

import "font-awesome/css/font-awesome.min.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const [openU, setOpenU] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-brokenWhite shadow-md border-b border-salviaGreen/30 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <span className="font-extrabold text-2xl text-slate-700 tracking-wide">
          Mentorly
        </span>

        {/* Links desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <Link
            to="/"
            className="py-2 px-4
             rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
          >
            Home
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative inline-block">
              <button
                onClick={() => setOpenU(!openU)}
                data-popover-target="menu"
                className="rounded-full size-11  bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                <i className="fa fa-user" aria-hidden="true"></i>
              </button>
              <ul
                role="menu"
                data-popover="menu"
                data-popover-placement="bottom"
                className={`absolute right-0  z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm focus:outline-none ${openU ? "block" : "hidden"}`}
              >
                <li
                  >
                <Link
                to="/edit"
                 role="menuitem"

                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
              >
                Edit Profile
              </Link>
                </li>
                  <li
                  >
                 <button
                onClick={handleLogout}
                className="py-2 px-4 flex w-full text-sm rounded-lg hover:bg-red-500/20 transition-colors duration-300 bg-red-200/80"
              >
                Logout
              </button>
                </li>


              </ul>
            </div>
          )}
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden px-3 py-2 rounded-md border border-salviaGreen text-salviaGreen hover:bg-salviaGreen hover:text-brokenWhite transition-colors duration-300"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}
        `}
      >
        <div className="flex flex-col gap-2 px-6 pb-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
          >
            Home
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/edit"
                onClick={() => setOpen(false)}
                className="py-2 px-4 rounded-lg hover:bg-salviaGreen/20 transition-colors duration-300"
              >
                Edit Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="py-2 px-4 rounded-lg hover:bg-red-500/20 transition-colors duration-300 text-left"
              >
                Logout
              </button>
              <span className="ml-2 text-gray-600 font-medium">
                {user.email}
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

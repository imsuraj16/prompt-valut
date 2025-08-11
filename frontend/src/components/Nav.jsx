import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);

  return (
    <nav className="bg-black text-white shadow-md px-[3rem] py-[1.5rem]">
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
          PromptVault
        </NavLink>

        {/* Links */}
        <div className="flex space-x-6">
          <NavLink to="/my-vault" className="hover:text-yellow-400">
            My Vault
          </NavLink>
          <NavLink to="/" className="hover:text-yellow-400">
            Community
          </NavLink>
          <NavLink to="/add-prompt" className="hover:text-yellow-400">
            Add Prompt
          </NavLink>
        </div>

        {/* Auth Buttons */}

        <div className="flex space-x-4">
          {currentUser ? (
            <NavLink
              onClick={() => dispatch(logout())}
              className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Myvault from "../pages/Myvault";
import CommunityVault from "../pages/CommunityVault";
import AddPrompt from "../pages/AddPrompt";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CommunityVault/>} />
      <Route path="/add-prompt" element={<AddPrompt/>} />
      <Route path="/my-vault" element={<Myvault/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  );
};

export default Mainroutes;

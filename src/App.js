import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext.js";
import "./App.css";

import Header from "./component/Header.js";
import MainPage from "./page/MainPage.js";
import Login from "./page/Login.js";
import Signup from "./page/Signup.js";
import KptDetailPage from "./page/KptDetailPage.js";
import CreateKpt from "./page/CreateKpt.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kpt/:id" element={<KptDetailPage />} />
          <Route path="/createkpt" element={<CreateKpt />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

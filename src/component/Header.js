import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

function Header() {
  const navigate = useNavigate();
  const navMain = () => navigate("/");
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 30px",
        backgroundColor: "#b3cefc",
      }}
    >
      <img
        src={logo}
        alt="logo"
        width="80"
        onClick={navMain}
        style={{ cursor: "pointer" }}
      />
      <a href="/login" style={{ textDecoration: "none", color: "#000000" }}>
        로그인
      </a>
    </header>
  );
}
export default Header;

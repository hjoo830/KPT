import React from "react";
import { useNavigate } from "react-router-dom";

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
      <h1 onClick={navMain}>KPT</h1>
      <a href="/login" style={{ textDecoration: "none", color: "#000000" }}>
        로그인
      </a>
    </header>
  );
}
export default Header;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
import logo from "./logo.png";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
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
      {isLoggedIn ? (
        <div>
          <a
            href="/createkpt"
            style={{
              textDecoration: "none",
              color: "#000000",
              marginRight: "20px",
            }}
          >
            새 KPT 작성
          </a>
          <a
            href="#"
            onClick={() => {
              logout();
              alert("로그아웃 되었습니다!");
              navigate("/");
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            로그아웃
          </a>
        </div>
      ) : (
        <a href="/login" style={{ textDecoration: "none", color: "#000000" }}>
          로그인
        </a>
      )}
    </header>
  );
}
export default Header;

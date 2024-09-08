import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // localStorage에서 사용자 정보 가져오기
    const storedUser = localStorage.getItem(userId);
    if (!storedUser) {
      alert("존재하지 않는 사용자입니다.");
      return;
    }

    const user = JSON.parse(storedUser);

    // 비밀번호 확인
    if (user.password !== password) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }

    // 로그인 성공
    localStorage.setItem("loggedInUserNickname", user.nickname); // 로그인된 사용자의 닉네임 저장
    console.log(localStorage.getItem("loggedInUserNickname"));
    login();
    alert(`${user.nickname}님 환영합니다!`);
    navigate("/");
  };

  return (
    <div
      style={{
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "10px 10px 10px rgba(237, 237, 237, 0.9)",
        width: "80%",
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <h1>로그인</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 50px 50px 50px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="userId"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fcfcfc",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fcfcfc",
          }}
        />
        <input
          type="submit"
          value="로그인"
          style={{
            border: "none",
            borderRadius: "10px",
            padding: "18px",
            backgroundColor: "#3e7eed",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        />
        <a
          href="/signup"
          style={{
            textDecoration: "none",
            color: "#3e7eed",
          }}
        >
          아직 회원이 아니신가요?
        </a>
      </form>
    </div>
  );
}
export default Login;

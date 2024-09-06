import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // 비밀번호 일치 확인
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 기존 사용자 확인
    const existingUser = localStorage.getItem(userId);
    if (existingUser) {
      alert("이미 존재하는 사용자입니다.");
      return;
    }

    // 사용자 정보 저장
    const user = {
      userId,
      password,
      nickname,
    };
    localStorage.setItem(userId, JSON.stringify(user));
    alert("회원가입이 완료되었습니다!");
    navigate("/login");
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
      <h1>회원가입</h1>
      <form
        onSubmit={handleSignup}
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
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fcfcfc",
          }}
        />
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fcfcfc",
          }}
        />
        <input
          type="submit"
          value="회원가입"
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
          href="/login"
          style={{
            textDecoration: "none",
            color: "#3e7eed",
          }}
        >
          이미 회원이신가요?
        </a>
      </form>
    </div>
  );
}
export default Signup;

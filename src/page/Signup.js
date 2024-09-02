function Signup() {
  return (
    <div
      style={{
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "10px 10px 10px rgba(237, 237, 237, 0.9)",
        width: "80%",
        margin: "0 auto",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <h1>회원가입</h1>
      <form
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateKpt() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleCreateKpt = (e) => {
    e.preventDefault();

    // 기존 KPT 데이터 불러오기
    const existingKptData = JSON.parse(localStorage.getItem("kptData")) || [];

    // 새로운 KPT ID 자동 생성
    const newId = existingKptData.length
      ? existingKptData[existingKptData.length - 1].id + 1
      : 1;

    // 새로운 KPT 객체 생성
    const newKpt = {
      id: newId,
      title,
      date,
      kpt: [
        { type: "Keep", memo: [] },
        { type: "Try", memo: [] },
        { type: "Problem", memo: [] },
      ],
    };

    // 기존 데이터에 새로운 KPT 추가
    const updatedKptData = [...existingKptData, newKpt];

    // localStorage에 업데이트된 KPT 데이터 저장
    localStorage.setItem("kptData", JSON.stringify(updatedKptData));

    // 입력 필드 초기화
    setTitle("");
    setDate("");
    alert("새 KPT가 성공적으로 추가되었습니다!");
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
      <h1>새 KPT 작성</h1>

      <form
        onSubmit={handleCreateKpt}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 50px 50px 50px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="KPT 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fcfcfc",
          }}
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fcfcfc",
          }}
        />
        <input
          type="submit"
          value="생성"
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
      </form>
    </div>
  );
}
export default CreateKpt;

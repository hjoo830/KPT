import React, { useState } from "react";
import Memo from "./Memo";

function Section({ type, memos, kptId }) {
  const [isWriting, setIsWriting] = useState(false);
  const [newMemo, setNewMemo] = useState("");
  const [memoList, setMemoList] = useState(memos);

  // 현재 로그인된 사용자의 닉네임 불러오기
  const loggedInUserNickname = localStorage.getItem("loggedInUserNickname");

  const handleWriteClick = () => {
    if (!loggedInUserNickname) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    setIsWriting(!isWriting); // 작성 모드 on/off 전환
  };

  const handleMemoChange = (e) => {
    setNewMemo(e.target.value); // 새로운 메모 입력값 저장
  };

  const handleMemoSubmit = () => {
    if (newMemo.trim() === "") return;

    // 새로운 메모 추가
    const newMemoItem = {
      id: memoList.length + 1,
      nickname: loggedInUserNickname, // 로그인된 사용자의 닉네임 사용
      content: newMemo,
    };

    const updatedMemoList = [...memoList, newMemoItem];
    setMemoList(updatedMemoList); // 상태 업데이트

    // 로컬스토리지 업데이트
    const storedData = JSON.parse(localStorage.getItem("kptData")) || [];
    const updatedData = storedData.map((item) => {
      if (item.id === kptId) {
        // 해당 KPT의 id와 일치하는 항목만 수정
        item.kpt = item.kpt.map((section) => {
          // 섹션의 타입이 일치하는지 확인
          if (section.type === type) {
            section.memo = updatedMemoList; // 해당 섹션만 업데이트
          }
          return section;
        });
      }
      return item;
    });
    localStorage.setItem("kptData", JSON.stringify(updatedData));

    // 입력값 초기화 및 작성 모드 해제
    setNewMemo("");
    setIsWriting(false);
  };

  const getText = () => {
    if (type === "Keep") {
      return "잘하고 있는 점";
    } else if (type === "Problem") {
      return "문제점";
    } else if (type === "Try") {
      return "시도할 점";
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h3>{type}</h3>
          <p style={{ fontSize: "small" }}>{getText()}</p>
        </div>
        <a
          onClick={handleWriteClick}
          style={{
            textDecoration: "none",
            color: "#000000",
            borderRadius: "5px",
            backgroundColor: "#fcfcfc",
            padding: "5px 10px",
            cursor: "pointer",
            minWidth: "30px",
          }}
        >
          작성
        </a>
      </div>
      <div
        style={{
          width: "95%",
        }}
      >
        {memoList.map((memo) => (
          <Memo key={memo.id} nickname={memo.nickname} content={memo.content} />
        ))}
      </div>
      {isWriting && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            gap: "5px",
          }}
        >
          <input
            type="text"
            value={newMemo}
            onChange={handleMemoChange}
            placeholder="내용 입력"
            style={{
              width: "100%",
              borderRadius: "5px",
              border: "none",
              padding: "7px",
            }}
          />
          <a
            onClick={handleMemoSubmit}
            style={{
              textDecoration: "none",
              color: "#000000",
              borderRadius: "5px",
              backgroundColor: "#fcfcfc",
              padding: "5px 10px",
              cursor: "pointer",
              minWidth: "30px",
            }}
          >
            추가
          </a>
        </div>
      )}
    </div>
  );
}

export default Section;

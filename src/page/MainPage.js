import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const navKpt = (id) => () => navigate(`/kpt/${id}`);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("kptData")) || [];
    setData(storedData || []);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        padding: "30px",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          onClick={navKpt(item.id)} // 함수 전달 방식으로 수정
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "800px",
            cursor: "pointer",
          }}
        >
          <h2 style={{ maxWidth: "85%" }}>{item.title}</h2>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default MainPage;

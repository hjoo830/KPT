import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KptItem from "../component/KptItem";

function KptDetailPage() {
  const { id } = useParams(); // URL에서 id를 가져옴
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // localStorage에서 kptData 불러오기
    const storedData = JSON.parse(localStorage.getItem("kptData")) || [];
    const item = storedData.find((item) => item.id === parseInt(id));
    setSelectedItem(item); // 해당 id의 항목을 상태로 설정
  }, [id]);

  if (!selectedItem) {
    return <p>해당 항목을 찾을 수 없습니다.</p>;
  }

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ maxWidth: "85%" }}>{selectedItem.title}</h2>
        <p>{selectedItem.date}</p>
      </div>
      <KptItem kpt={selectedItem.kpt} kptId={selectedItem.id} />
    </div>
  );
}

export default KptDetailPage;

import { useParams } from "react-router-dom";
import KptItem from "../component/KptItem";
import data from "../data.json";

function KptDetailPage() {
  const { id } = useParams(); // URL에서 id를 가져옴
  const selectedItem = data.find((item) => item.id === parseInt(id)); // id에 해당하는 데이터를 찾음

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
      <KptItem kpt={selectedItem.kpt} />
    </div>
  );
}

export default KptDetailPage;

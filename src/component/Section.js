import Memo from "./Memo";

function Section({ type, memos }) {
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
          href="#"
          style={{
            textDecoration: "none",
            color: "#000000",
            borderRadius: "5px",
            backgroundColor: "#fcfcfc",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          작성
        </a>
      </div>
      <div
        style={{
          width: "95%",
          minHeight: "100px",
        }}
      >
        {memos.map((memo) => (
          <Memo key={memo.id} nickname={memo.nickname} content={memo.content} />
        ))}
      </div>
    </div>
  );
}

export default Section;

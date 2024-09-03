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
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h3>{type}</h3>
        <p style={{ fontSize: "small" }}>{getText()}</p>
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

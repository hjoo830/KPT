import Memo from "./Memo";

function Section({ type, memos }) {
  return (
    <div>
      <h3>{type}</h3>
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

function Memo({ id, nickname, content, onMemoClick, isEditing }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "105%",
        alignItems: "center",
      }}
      onClick={() => onMemoClick(id)}
    >
      {nickname}: {content}
      {isEditing && (
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            style={{
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#fcfcfc",
              padding: "3px 5px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            수정
          </button>
          <button
            style={{
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#fcfcfc",
              padding: "3px 5px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
}

export default Memo;

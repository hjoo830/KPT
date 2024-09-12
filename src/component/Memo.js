function Memo({
  id,
  nickname,
  content,
  onMemoClick,
  onEditClick,
  onDeleteClick,
  loggedInUserNickname,
  showButtons,
}) {
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
        cursor: loggedInUserNickname === nickname ? "pointer" : "default", // 자신의 메모에만 커서 변경
      }}
      onClick={onMemoClick}
    >
      {nickname}: {content}
      {loggedInUserNickname === nickname && showButtons && (
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
            onClick={onEditClick}
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
            onClick={onDeleteClick}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
}

export default Memo;

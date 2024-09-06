function Memo({ nickname, content }) {
  return (
    <div style={{ marginBottom: "10px", flexWrap: "wrap" }}>
      {nickname}: {content}
    </div>
  );
}

export default Memo;

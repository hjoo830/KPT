import React from "react";
import Section from "./Section";

function KptItem({ kpt, kptId }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
      }}
    >
      {kpt.map((section) => (
        <div
          key={section.type}
          style={{
            gridRow: section.type === "Try" ? "span 2" : "span 1",
            backgroundColor:
              section.type === "Keep"
                ? "#ffc7c2"
                : section.type === "Try"
                ? "#bce3ff"
                : "#fcd19c",
            padding: "0 20px",
            borderRadius: "5px",
          }}
        >
          <Section type={section.type} memos={section.memo} kptId={kptId} />
        </div>
      ))}
    </div>
  );
}

export default KptItem;

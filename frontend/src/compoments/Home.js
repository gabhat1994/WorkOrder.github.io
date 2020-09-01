import React from "react";

export default function Home() {
  const handleSave = (event) => {
    event.stopPropogation();
  };
  return (
    <div>
      <button
        style={{
          color: "balck",
          backgroundColor: "white",
          textAlign: "center",
          fontSize: "20px",
          border: "2px solid grey",
          width: "100px",
        }}
        onClick={() => handleSave}
      >
        Save
      </button>
    </div>
  );
}

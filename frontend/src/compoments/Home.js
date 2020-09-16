import React from "react";

export default function Home(props) {
  const handleSave = (event) => {
    event.stopPropogation();
  };
  return (
    <div
      className="col-md-9"
      style={{ border: "2px solid grey", marginLeft: "15%" }}
    >
      <button
        style={{
          color: "balck",
          backgroundColor: "white",
          textAlign: "center",
          fontSize: "20px",
          border: "2px solid grey",
          width: "100px",
          float: "right",
        }}
        onClick={() => handleSave}
      >
        Save
      </button>
      <Grid {...props} />
    </div>
  );
}

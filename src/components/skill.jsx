import React from "react";
const cardStyle = {
  color: "black",
  minWidth: "90px",
  height: "45px",
  padding: "3px",
  borderRadius: "6px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "8px",
};

const contentStyle = {
  color: "black",
  fontSize: "0.9rem",
  textAlign: "center",
  padding: "2px",
};

const skill = (name) => {
  return (
    <>
      <div className="card" style={cardStyle}>
        <span className="cardContent" style={contentStyle}>
          {name.name}
        </span>
      </div>
    </>
  );
};

export default skill;

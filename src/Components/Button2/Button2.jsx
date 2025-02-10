import React from "react";
import "./Button2.css";

export default function ButtonComponent({ children }) {
  const handleClick = (e) => {
    e.preventDefault();

    let overlay = document.createElement("span");
    overlay.classList.add("overlay");

    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    overlay.style.top = y + "px";
    overlay.style.left = x + "px";
    e.target.appendChild(overlay);

    setTimeout(() => {
      overlay.remove();
    }, 500);
  };

  return (
    <div className="buttons2">
      <button className="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}
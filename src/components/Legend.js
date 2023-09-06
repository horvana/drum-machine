import React, { useEffect, useState } from "react";

function Legend() {
  const [currItem, setCurrItem] = useState("");

  useEffect(() => {
    const drumPads = document.querySelectorAll(".drum-pad");

    const handleClick = (e) => {
      setCurrItem(e.target.id.toUpperCase());
    };

    const handleKeyDown = (e, drumPad) => {
      try {
        if (!drumPad.disabled) {
          const item = document.querySelector(`#${e.key.toLowerCase()}`);
          setCurrItem(item?.parentNode?.id.toUpperCase());
        }
      } catch (error) {
        console.error("Invalid input");
      }
    };

    drumPads.forEach((drumPad) => {
      drumPad.addEventListener("click", handleClick);
      drumPad.addEventListener("keydown", (e) => handleKeyDown(e, drumPad));
    });

    return () => {
      drumPads.forEach((drumPad) => {
        drumPad.removeEventListener("click", handleClick);
        drumPad.removeEventListener("keydown", (e) => handleKeyDown(e, drumPad));
      });
    };
  }, [currItem]);

  return (
    <div id="legend">
      <p>{currItem}</p>
    </div>
  );
}

export default Legend;

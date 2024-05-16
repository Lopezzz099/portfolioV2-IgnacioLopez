import React from "react";

const ButtonLatestProyects = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => {
        const section = document.getElementById("Proyectos");
        if (section) {
          const offset = section.offsetTop - 180;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }}
    >
      {text}
    </button>
  );
};

export default ButtonLatestProyects;

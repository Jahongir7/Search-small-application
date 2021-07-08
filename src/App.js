import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const imgDiv = useRef();
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div className="App">
      <div
        className="img-container"
        onMouseMove={handleMouseMove}
        ref={imgDiv}
        onMouseLeave={() =>
          (imgDiv.current.style.backgroundPosition = `center`)
        }
      />
    </div>
  );
};

export default App;

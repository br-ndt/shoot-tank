import { useEffect, useRef, useState } from "react";
import View from "../threeJS/View.js";

const RenderScene = (props) => {
  const canvasRef = useRef();
  const [exampleState, setExampleState] = useState({
    speed: 50,
  });
  const view = new View(canvasRef.current);

  useEffect(() => {
    // register event listeners
    return () => {
      // remove event listeners
    };
  }, []);

  view.speed = exampleState.speed;

  return (
    <section className="RenderScene">
      <canvas ref={canvasRef} />
      <input
        onChange={(e) => {
          setExampleState({
            ...exampleState,
            speed: e.currentTarget.value
          })
        }}
        type="range"
        name="speed"
        min="1"
        max="100"
        value={exampleState.speed}
      />
      <p>Current speed: {exampleState.speed}</p>
    </section>
  );
};

export default RenderScene;

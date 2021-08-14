import "./App.css";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let x = new Values(color).all(10);
      setList(x);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <h3>Mohamad Color Generator</h3>
          <input
            type="text"
            className={error ? "red" : ""}
            placeholder="enter your color..."
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors container">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

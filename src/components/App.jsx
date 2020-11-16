import React, { useState } from "react";

function App() {
  const [bSub, setHead] = useState("Submit");
  var [isMouseOver, setMouseOver] = useState(false);
  var [pname, psetName] = useState("");
  var [name, setName] = useState("");

  function submitted(event) {
    setName(pname);

    event.preventDefault();
  }

  function onChangesetname(event) {
    psetName(event.target.value);
  }

  function mouseOver() {
    setMouseOver((isMouseOver = true));
  }
  function mouseOut() {
    setMouseOver((isMouseOver = false));
  }

  return (
    <form onSubmit={submitted}>
      <div className="container">
        <h1>Hello {name}</h1>
        <input
          onChange={onChangesetname}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          type="submit"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          {bSub}
        </button>
      </div>
    </form>
  );
}

export default App;

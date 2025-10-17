import React from "react";
import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <Card>
        <h2>Welcome!</h2>
        <p>This is inside a reusable Card component.</p>
      </Card>

      <Card>
        <button>Click Me</button>
      </Card>

      <Card>
        <img src="https://via.placeholder.com/100" alt="example" />
        <p>Image inside the Card!</p>
      </Card>
    </div>
  );
}

export default App;

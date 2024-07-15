import "./App.css";
import { useState } from "react";
import Home from "./page/Home";

function App() {
  const [data, setData] = useState();

  return <Home />;
}

export default App;

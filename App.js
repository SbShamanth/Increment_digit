import React, { useState } from "react";
import Increment from "./Increment";
function App() {

  const [counta,setcounta]=useState(0)
  const [countb,setcountb]=useState(0)

  return (
    <div className="App">
  <Increment counta={counta} countb={countb} setcounta={setcounta} setcountb={setcountb} />
    </div>
  );
}

export default App;

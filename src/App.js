import { useState } from "react";
import "./App.css";
import UserLayOut from "./layout/UserLayOut";
import AdminLayOut from "./layout/AdminLayOut";

function App() {
  return (
    <div className="container-fluid">
      <UserLayOut></UserLayOut>
    </div>
  );
}

export default App;

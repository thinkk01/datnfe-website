import { useState } from "react";
import "./App.css";
import UserLayOut from "./layout/UserLayOut";
import AdminLayOut from "./layout/AdminLayOut";

function App() {
  const [admin, setAdmin] = useState(true);

  return (
    <div className="container-fluid">
      {admin && <AdminLayOut></AdminLayOut>}
      {!admin && <UserLayOut></UserLayOut>}
    </div>
  );
}

export default App;

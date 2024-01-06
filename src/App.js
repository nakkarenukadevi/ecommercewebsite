import { Outlet } from "react-router-dom";
import "./App.css";

import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

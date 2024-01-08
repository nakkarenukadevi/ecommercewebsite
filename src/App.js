import { Outlet } from "react-router-dom";
import "./App.css";

import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import Store from "./components/Store/Store";
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Announcement />
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;

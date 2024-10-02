import { Nav } from "./components/Nav/Nav";
import "./App.css";
import "./reset.css";
import { FixedOrder } from "./components/FixedOrder/FixedOrder";
import { Home } from "./components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <FixedOrder />
    </>
  );
}

export default App;

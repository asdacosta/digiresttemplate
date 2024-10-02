import { Nav } from "./components/Nav/Nav";
import "./App.css";
import "./reset.css";
import { FixedOrder } from "./components/FixedOrder/FixedOrder";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <FixedOrder />
    </>
  );
}

export default App;

import { Nav } from "./components/Nav/Nav";
import "./App.css";
import "./reset.css";
import { FixedOrder } from "./components/FixedOrder/FixedOrder";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <FixedOrder />
    </>
  );
}

export default App;

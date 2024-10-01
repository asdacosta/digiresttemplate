import { Nav } from "./components/Nav/Nav";
import "./App.css";
import "./reset.css";
import { Swipes } from "./components/Swipes/Swipes";
import { FixedOrder } from "./components/FixedOrder/FixedOrder";

function App() {
  return (
    <>
      <Nav />
      <Swipes />
      <FixedOrder />
    </>
  );
}

export default App;

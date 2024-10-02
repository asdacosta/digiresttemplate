import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import "@dotlottie/player-component";

function Nav() {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    const menu = menuRef.current;
    if (!menu) return;

    setMenuOpened((prev) => !prev);
    menu.setDirection(menuOpened ? -1 : 1);
    menu.setSpeed(1.5);
    menu.play();
  };

  return (
    <section className={styles.nav}>
      <section className={styles.logoBox}>
        <h2>
          <Link to="/">•Pizza•</Link>
        </h2>
      </section>
      <section className={`${styles.right} ${menuOpened ? styles.open : "open"}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
          <button>Home</button>
        </NavLink>
        {/* <button>About Us</button> */}
        <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.active : "")}>
          <button>Menu</button>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <button>Contact</button>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <button>Events</button>
        </NavLink>
      </section>
      <button className={styles.menu}>
        <dotlottie-player
          ref={menuRef}
          onClick={handleMenuClick}
          src="https://raw.githubusercontent.com/asdacosta/digiresttemplate/main/src/assets/menu.lottie"
          style={{ width: "4rem", height: "4rem" }}
        ></dotlottie-player>
      </button>
    </section>
  );
}

export { Nav };

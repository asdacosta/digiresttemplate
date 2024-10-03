import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import "@dotlottie/player-component";
import { navVariants as variants } from "./navVariants";
import { motion } from "framer-motion";

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
      <motion.section
        className={styles.logoBox}
        initial="hidden"
        animate="visible"
        variants={variants.navBlurVariant}
      >
        <h2>
          <Link to="/">•Pizza•</Link>
        </h2>
      </motion.section>
      <motion.section
        className={`${styles.right} ${menuOpened ? styles.open : "open"}`}
        variants={variants.containerVariant}
        initial="hidden"
        animate="visible"
      >
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
          <motion.button variants={variants.buttonVariant}>Home</motion.button>
        </NavLink>
        {/* <button>About Us</button> */}
        <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.active : "")}>
          <motion.button variants={variants.buttonVariant}>Menu</motion.button>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <motion.button variants={variants.buttonVariant}>Contact</motion.button>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <motion.button variants={variants.buttonVariant}>Events</motion.button>
        </NavLink>
      </motion.section>
      <motion.button
        className={styles.menu}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants.navBlurVariant}
      >
        <dotlottie-player
          ref={menuRef}
          onClick={handleMenuClick}
          src="https://raw.githubusercontent.com/asdacosta/digiresttemplate/main/src/assets/menu.lottie"
          style={{ width: "4rem", height: "4rem" }}
        ></dotlottie-player>
      </motion.button>
    </section>
  );
}

export { Nav };

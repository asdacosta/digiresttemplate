import styles from "./Nav.module.css";

function Nav() {
  return (
    <section className={styles.nav}>
      <section className={styles.logoBox}>
        <h2>•Pizza•</h2>
      </section>
      <section className={styles.right}>
        <button>Home</button>
        <button>About Us</button>
        <button>Menu</button>
        <button>Contact</button>
        <button>Events</button>
      </section>
      {/* <button onClick={playMenu} className={styles.menu}>
              <Player
                ref={menuRef}
                keepLastFrame={true}
                src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/menu.json"
                style={{ width: "50px", height: "50px" }}
              ></Player>
            </button> */}
    </section>
  );
}

export { Nav };

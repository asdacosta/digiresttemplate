import styles from "./Menu.module.css";

function Menu() {
  return (
    <section className={styles.menu}>
      <h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>{" "}
        Explore Our Menu
      </h2>
      <section className={styles.menuList}>
        <section>
          <h3>Starters</h3>
          <section className={styles.items}>
            <div>
              <span>Caprese Salad</span>
              <span>#START01</span>
            </div>
            <div>
              <span>Mozzarella Sticks</span>
              <span>#START02</span>
            </div>
            <div>
              <span>Cheesy Breadsticks</span>
              <span>#START03</span>
            </div>
          </section>
        </section>
        <section>
          <h3>Vegan</h3>
          <section className={styles.items}>
            <div>
              <span>BBQ Veggie</span>
              <span>#VEG01</span>
            </div>
            <div>
              <span>Margherita </span>
              <span>#VEG02</span>
            </div>
          </section>
        </section>
        <section>
          <h3>Meat Lovers</h3>
          <section className={styles.items}>
            <div>
              <span>Pepperoni</span>
              <span>#ME01</span>
            </div>
            <div>
              <span>BBQ Chicken</span>
              <span>#ME02</span>
            </div>
            <div>
              <span>Italian Sausage </span>
              <span>#ME03</span>
            </div>
          </section>
        </section>
      </section>
      <section className={styles.pdf}>
        <button>Download PDF</button>
      </section>
    </section>
  );
}

export { Menu };

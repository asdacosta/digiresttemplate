import styles from "./Contact.module.css";

function Order({ className }) {
  return (
    <section
      className={styles.form}
      style={className ? { display: "block" } : { display: "none" }}
    >
      <form autoComplete="off">
        <section className={styles.fields}>
          <div className={styles.nameBox}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete="new-name" required />
          </div>
          <div className={styles.telBox}>
            <label htmlFor="tel">Phone Number</label>
            <input type="tel" name="tel" id="tel" autoComplete="new-tel" />
          </div>
          <section className={styles.menuOptions}>
            <div>
              <input type="checkbox" name="salad" id="salad" />
              <label htmlFor="salad">Caprese Salad</label>
            </div>
            <div>
              <input type="checkbox" name="sticks" id="sticks" />
              <label htmlFor="sticks">Mozzarella Sticks</label>
            </div>
            <div>
              <input type="checkbox" name="cheesy" id="cheesy" />
              <label htmlFor="cheesy">Cheesy Breadsticks</label>
            </div>
            <div>
              <input type="checkbox" name="bbq" id="bbq" />
              <label htmlFor="bbq">BBQ Veggie</label>
            </div>
            <div>
              <input type="checkbox" name="marg" id="marg" />
              <label htmlFor="marg">Margherita</label>
            </div>
            <div>
              <input type="checkbox" name="pep" id="pep" />
              <label htmlFor="pep">Pepperoni</label>
            </div>
            <div>
              <input type="checkbox" name="chi" id="chi" />
              <label htmlFor="chi">BBQ Chicken</label>
            </div>
            <div>
              <input type="checkbox" name="ital" id="ital" />
              <label htmlFor="ital">Italian Sausage</label>
            </div>
          </section>
          <div className={styles.nameBox}>
            <label htmlFor="location">Location (Ignore if pickup)</label>
            <input
              type="text"
              name="location"
              id="location"
              autoComplete="new-location"
              required
            />
          </div>
          <button className={styles.submit} type="button">
            Order
          </button>
        </section>
      </form>
    </section>
  );
}

export { Order };

import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

function Reserve({ className }) {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const currentISO = now.toISOString().slice(0, 16);

    const currentYear = now.getFullYear();
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);
    const maxISO = endOfYear.toISOString().slice(0, 16);

    setMinDate(currentISO);
    setMaxDate(maxISO);
  }, []);

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
          <div className={styles.telBox}>
            <label htmlFor="date">Date • Time</label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              min={minDate}
              max={maxDate}
              required
            />
          </div>

          <button className={styles.submit} type="button">
            Reserve
          </button>
        </section>
      </form>
    </section>
  );
}

export { Reserve };

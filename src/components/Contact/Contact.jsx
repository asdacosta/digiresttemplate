import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Reach out to us!</h2>
      <form autoComplete="off">
        <section className={styles.fields}>
          <div className={styles.nameBox}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete="new-name" required />
          </div>
          <div className={styles.emailBox}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="new-email"
              required
            />
          </div>
          <div className={styles.telBox}>
            <label htmlFor="tel">Phone Number</label>
            <input type="tel" name="tel" id="tel" autoComplete="new-tel" />
          </div>
          <div className={styles.serveBox}>
            <label htmlFor="serve">How can we serve you?</label>
            <select name="serve" id="serve" defaultValue="" autoComplete="new-serve">
              <option value="" disabled></option>
              <option value="order">Place an order</option>
              <option value="book">Book a table</option>
              <option value="general inquiry">General Inquiry</option>
              <option value="feedback">Feedback on Your Experience</option>
              <option value="catering">Catering Information</option>
              <option value="menu questions">Menu Questions</option>
              <option value="event booking">Event Booking</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="job inquiry">Job Inquiries</option>
              <option value="complaint">Complaints or Issues</option>
              <option value="location inquiry">Location Information</option>
              <option value="sponsorship">Sponsorship Requests</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.messageBox}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="10"
              autoComplete="new-message"
              maxLength="3000"
              required
            />
          </div>
          <button className={styles.submit} type="button">
            Send
          </button>
        </section>
      </form>

      <section className={styles.oddMedium}>
        <div>
          <span>Call/WhatsApp To Place Order</span>
          <span>+233 123 456 7891</span>
        </div>
      </section>
    </section>
  );
}

export { Contact };

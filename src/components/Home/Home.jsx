import midMobile1 from "../../assets/swipes/mid-mobile7.jpg";
import midMobile2 from "../../assets/swipes/mid_mobile2.jpg";
import menu1 from "../../assets/swipes/starters.jpg";
import menu2 from "../../assets/swipes/veganPizza.jpg";
import menu3 from "../../assets/swipes/slice.jpg";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { Swipes } from "../Swipes/Swipes";
import { useEffect, useRef, useState } from "react";

function Home() {
  const headerRef = useRef(null);
  const revealBgRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);

  useEffect(() => {
    if (!headerRef.current) return;
    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsTyping(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });
    observer.observe(headerRef.current);

    return () => {
      if (observer && headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  const typeHeader = () => {
    if (!isTyping) return;
    const typed = new Typed(headerRef.current, {
      strings: [`<span class='${styles.alterFont}' >The best in town!</span>`],
      typeSpeed: 30,
      showCursor: false,
    });
    return () => typed.destroy();
  };
  useEffect(typeHeader, [isTyping]);

  const handleWheel = (event) => {
    const delta = event.deltaY;
    let newScaleValue = scaleValue + delta * 0.0003;

    if (newScaleValue < 1) newScaleValue = 1; // Prevent scaling below normal
    if (newScaleValue > 1.5) newScaleValue = 1.5; // Prevent scaling too high
    setScaleValue(newScaleValue);
  };

  return (
    <section className={styles.home}>
      <Swipes />
      <section className={styles.cards}>
        <section>
          <div className={styles.imgBox}>
            <img src={midMobile1} alt="first pizza info" />
          </div>
          <div className={styles.infos}>
            <h3>Take a slice!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, magni
              recusandae id et eaque, nostrum totam nobis, aliquam iusto dolorem nulla
              iure ad! Quas natus cum eaque quia nulla deleniti dolor magni, voluptatum
              nihil consequatur eos deserunt beatae, harum distinctio.
            </p>
            <div>
              <button className={styles.menuButton}>Check our Menu</button>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.infos}>
            <h3>Happiness is a slice away!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, magni
              recusandae id et eaque, nostrum totam nobis, aliquam iusto dolorem nulla
              iure ad! Quas natus cum eaque quia nulla deleniti dolor magni, voluptatum
              nihil consequatur eos deserunt beatae, harum distinctio.
            </p>
            <div>
              <button className={styles.menuButton}>Check our Menu</button>
            </div>
          </div>
          <div className={styles.imgBox}>
            <img src={midMobile2} alt="first pizza info" />
          </div>
        </section>
      </section>
      <section
        className={styles.revealBg}
        ref={revealBgRef}
        style={{ transform: `scale(${scaleValue})` }}
        onWheel={handleWheel}
      >
        <h3 ref={headerRef}></h3>
      </section>
      <section className={styles.homeMenu}>
        <section>
          <div className={styles.expandAll}>
            Explore all Menu{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
            </svg>
          </div>
          <section className={styles.someMenu}>
            <section>
              <img src={menu1} alt="Starters" />
            </section>
            <section>
              <img src={menu2} alt="Vegan Pizza" />
            </section>
            <section>
              <img src={menu3} alt="All Pizza flavors" />
            </section>
          </section>
        </section>
      </section>
      <section className={styles.location}>
        <section className={styles.locationDetails}>
          <div>
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              Location
            </h3>
            <div className={styles.locationPrecise}>
              <p>Pizza </p>
              <p>84 Oak Street </p>
              <p>Maplewood, Illinois 60050</p>
            </div>
          </div>
          <div className={styles.hours}>
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              Hours
            </h3>
            <div>
              <table className={styles.hoursTable}>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Open</th>
                    <th>Close</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sun</td>
                    <td>12:00 PM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Mon</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Tue</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Wed</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Thu</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Fri</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>
                  <tr>
                    <td>Sat</td>
                    <td>12:00 PM</td>
                    <td>12:00 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section></section>
      </section>
    </section>
  );
}

export { Home };

import midMobile1 from "../../assets/swipes/mid-mobile7.jpg";
import midMobile2 from "../../assets/swipes/mid_mobile2.jpg";
import menu1 from "../../assets/swipes/starters.jpg";
import menu2 from "../../assets/swipes/veganPizza.jpg";
import menu3 from "../../assets/swipes/slice.jpg";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { Swipes } from "../Swipes/Swipes";
import { useEffect, useRef } from "react";

function Home() {
  const headerRef = useRef(null);
  const typeHeader = () => {
    const typed = new Typed(headerRef.current, {
      strings: [`<span class='${styles.alterFont}' >The best in town!</span>`],
      typeSpeed: 30,
      showCursor: false,
    });
    return () => typed.destroy();
  };
  useEffect(typeHeader, []);

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
          </div>
          <div className={styles.imgBox}>
            <img src={midMobile2} alt="first pizza info" />
          </div>
        </section>
      </section>
      <section className={styles.revealBg}>
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
    </section>
  );
}

export { Home };

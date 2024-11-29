import midMobile1 from "../../assets/swipes/mid-mobile7.jpg";
import midMobile2 from "../../assets/swipes/mid_mobile2.jpg";
import menu1 from "../../assets/swipes/starters.jpg";
import menu2 from "../../assets/swipes/veganPizza.jpg";
import menu3 from "../../assets/swipes/slice.jpg";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { Swipes } from "./Swipes/Swipes";
import { useEffect, useRef, useState } from "react";
import { Location } from "./Location/Location";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

function Home() {
  const headerRef = useRef(null);
  const revealBgRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);

  const topCardRef = useRef(null);
  const bottomCardRef = useRef(null);
  const menuCardRef = useRef(null);
  const topCardInView = useInView(topCardRef);
  const bottomCardInView = useInView(bottomCardRef);
  const menuCardInView = useInView(menuCardRef);
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const menuCardControls = useAnimation();

  const displayTopOnView = () => {
    if (topCardInView) topControls.start("visible");
  };
  useEffect(displayTopOnView, [topControls, topCardInView]);

  const displayBottomOnView = () => {
    if (bottomCardInView) bottomControls.start("visible");
  };
  useEffect(displayBottomOnView, [bottomControls, bottomCardInView]);

  const displayMenuOnView = () => {
    if (menuCardInView) menuCardControls.start("visible");
  };
  useEffect(displayMenuOnView, [menuCardControls, menuCardInView]);

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
      strings: [
        `<span class='text-5xl text-[#ff8800] font-bold font-dance' >The best in town!</span>`,
      ],
      typeSpeed: 40,
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
    <section className={`${styles.home} flex flex-col relative z-3`}>
      <Swipes />
      <section className="flex flex-col gap-12 z-2 bg-white p py-[3rem] px-[0.4rem]">
        <section className="flex justify-evenly w-full">
          <motion.div
            className={`${styles.imgBox} group`}
            initial="hidden"
            animate={topControls}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
          >
            <img
              src={midMobile1}
              alt="first pizza info"
              loading="lazy"
              draggable="false"
              className="w-full h-full group-hover:scale-110  "
            />
          </motion.div>
          <motion.div
            className="flex self-center flex-col gap-4 py-8 px-4 w-[25rem] max650:gap-[1rem] max650:py-[2rem] max650:px-[0.5rem] max650:w-[20rem]"
            ref={topCardRef}
            initial="hidden"
            animate={topControls}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
          >
            <h3 className="text-2xl">Take a slice!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, magni
              recusandae id et eaque, nostrum totam nobis, aliquam iusto dolorem nulla
              iure ad! Quas natus cum.
            </p>
            <motion.div
              className="self-center h-[2rem]"
              initial="hidden"
              animate={topControls}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
              }}
            >
              <Link to="/menu">
                <button className="bg-[#ff8800] text-black text-[1.2rem] p-2.5 px-4 rounded-[2rem]  border-[0.12rem] border-solid border-[#ff8800] hover:bg-transparent hover:text-[#ff8800]">
                  Check our Menu
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
        <section className="flex justify-evenly w-full">
          <motion.div
            className="flex self-center flex-col gap-4 py-8 px-4 w-[25rem] max650:gap-[1rem] max650:py-[2rem] max650:px-[0.5rem] max650:w-[20rem]"
            ref={bottomCardRef}
            initial="hidden"
            animate={bottomControls}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
          >
            <h3 className="text-2xl">Happiness is a slice away!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, magni
              recusandae id et eaque, nostrum totam nobis, aliquam iusto dolorem nulla
              iure ad! Quas natus cum.
            </p>
            <motion.div
              className="self-center h-[2rem]"
              initial="hidden"
              animate={bottomControls}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
              }}
            >
              <Link to="/menu">
                <button className="bg-[#ff8800] text-black text-[1.2rem] p-2.5 px-4 rounded-[2rem] border-[0.12rem] border-solid border-[#ff8800] hover:bg-transparent hover:text-[#ff8800] ">
                  Check our Menu
                </button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className={`${styles.imgBox} group`}
            initial="hidden"
            animate={bottomControls}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
          >
            <img
              src={midMobile2}
              alt="first pizza info"
              loading="lazy"
              draggable="false"
              className="w-full h-full group-hover:scale-110  "
            />
          </motion.div>
        </section>
      </section>
      <section
        className={`flex justify-center items-center w-screen h-screen bg-bgImage bg-cover bg-center sticky bg-no-repeat top-0 left-0 z-1 transition-transform duration-200 ease-out origin-center will-change-transform after:content-[''] after:w-full after:h-full after:top-0 after:absolute after:bg-black/42 after:z-1`}
        ref={revealBgRef}
        style={{ transform: `scale(${scaleValue})` }}
        onWheel={handleWheel}
      >
        <h3
          className="text-[2.5rem] text-white bg-black/60 w-full text-center z-2"
          ref={headerRef}
        ></h3>
      </section>
      <section className="flex justify-center self-center h-[90vh] w-screen bg-white z-2 max650:border-b-[0.1rem] max650:border-b-[rgb(156, 156, 156)]">
        <section className="flex flex-col items-center justify-center gap-6">
          <motion.div
            className="group self-start flex items-center gap-[0.5rem] text-[1.1rem] cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#ff8800]"
            initial="hidden"
            animate={menuCardControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            <Link to="/menu">
              Explore all Menu{" "}
              <svg
                className="w-[1rem] transition-all duration-300 ease-in-out group-hover:fill-[#ff8800]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
            </Link>
          </motion.div>
          <section className="self-center flex items-center gap-[1rem] max1050:flex-col">
            <motion.section
              className="group h-[15rem] w-[20rem] overflow-hidden rounded-[1.5rem] relative cursor-pointe before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 hover:after:text-[#ff8800] after:absolute after:top-1/2 after:left-1/2 after:bg-black/60 after:-translate-x-1/2 after:-translate-y-1/2 after:p-[0.2rem_0.5rem] after:rounded-[1rem] text-[1.2rem] whitespace-nowrap after:text-white transition-colors duration-200 ease-in-out after:content-['Starters'] max1050:h-[10rem] max1050:w-[15rem] max1050:rounded-[1rem]"
              ref={menuCardRef}
              initial="hidden"
              animate={menuCardControls}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  },
                },
              }}
            >
              <Link to="/menu">
                <img
                  className="group-hover:scale-110 w-full h-full  "
                  src={menu1}
                  alt="Starters"
                  loading="lazy"
                  draggable="false"
                />
              </Link>
            </motion.section>
            <motion.section
              className="group h-[15rem] w-[20rem] overflow-hidden rounded-[1.5rem] relative cursor-pointe before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 hover:after:text-[#ff8800] after:absolute after:top-1/2 after:left-1/2 after:bg-black/60 after:-translate-x-1/2 after:-translate-y-1/2 after:p-[0.2rem_0.5rem] after:rounded-[1rem] text-[1.2rem] whitespace-nowrap after:text-white transition-colors duration-200 ease-in-out after:content-['Vegan'] max1050:h-[10rem] max1050:w-[15rem] max1050:rounded-[1rem]"
              initial="hidden"
              animate={menuCardControls}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  },
                },
              }}
            >
              <Link to="/menu">
                <img
                  className="group-hover:scale-110  w-full h-full"
                  src={menu2}
                  alt="Vegan Pizza"
                  loading="lazy"
                  draggable="false"
                />
              </Link>
            </motion.section>
            <motion.section
              className="group h-[15rem] w-[20rem] overflow-hidden rounded-[1.5rem] relative cursor-pointe before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/25 hover:after:text-[#ff8800] after:absolute after:top-1/2 after:left-1/2 after:bg-black/60 after:-translate-x-1/2 after:-translate-y-1/2 after:p-[0.2rem_0.5rem] after:rounded-[1rem] text-[1.2rem] whitespace-nowrap after:text-white transition-colors duration-200 ease-in-out after:content-['Meat lovers'] max1050:h-[10rem] max1050:w-[15rem] max1050:rounded-[1rem]"
              initial="hidden"
              animate={menuCardControls}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  },
                },
              }}
            >
              <Link to="/menu">
                <img
                  className="group-hover:scale-110  w-full h-full"
                  src={menu3}
                  alt="All Pizza flavors"
                  loading="lazy"
                  draggable="false"
                />
              </Link>
            </motion.section>
          </section>
        </section>
      </section>
      <Location />
    </section>
  );
}

export { Home };

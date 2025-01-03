import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../Home.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Location() {
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef);
  const mapControls = useAnimation();

  const displayMapOnView = () => {
    if (mapInView) mapControls.start("visible");
  };
  useEffect(displayMapOnView, [mapInView, mapControls]);

  return (
    <section className="w-full min-h-screen flex justify-evenly items-center bg-white z-1 max650:flex-col max650:gap-[2rem] max650:p-[3rem]">
      <section className="flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="flex items-center gap-[0.6rem] text-[2rem]">
            <svg
              className="fill-[#ff8800] w-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            Location
          </h3>
          <div className="flex flex-col gap-[0.2rem]">
            <p>Pizza </p>
            <p>Airport Residential Area</p>
            <p>Accra, Greater Accra</p>
            <p>Ghana</p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="flex items-center gap-[0.6rem] text-[2rem]">
            <svg
              className="fill-[#ff8800] w-[1.3rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            Hours
          </h3>
          <div>
            <table className={`${styles.hoursTable} w-full border-collapse text-left`}>
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
      <motion.section
        className="z-5 w-1/2 border-solid border-[0.15rem] border-[#ff8800] rounded-[1rem] overflow-hidden max650:w-[90%] max650:border-[0.15rem] max650:border-[#ff8800] max650:overflow-hidden max650:rounded-2xl"
        ref={mapRef}
        initial="hidden"
        animate={mapControls}
        variants={{
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: { opacity: 1, filter: "blur(0)", transition: { duration: 1.5 } },
        }}
      >
        <MapContainer
          center={[5.6037, -0.187]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "20rem", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[5.6037, -0.187]}>
            <Popup>
              This is Accra, Ghana. <br /> Welcome!
            </Popup>
          </Marker>
        </MapContainer>
      </motion.section>
    </section>
  );
}

export { Location };

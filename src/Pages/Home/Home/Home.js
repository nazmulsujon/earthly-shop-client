import React from "react";
import "./Home.css";
import { Fade } from "react-reveal";
import bannerVideo from "../../../assets/videos/banner.mp4";
import Shop from "../../Shop/Shop";
import About from "../About/About";
import Map from "../../../components/Map/Map";

const Home = () => {
  return (
    <section>
      <div className="video-banner h-[220px] md:h-[520px]">
        <video autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "transparent",
            color: "white",
            padding: "10px",
          }}
        >
          <h1 className="text-xl md:text-6xl font-bold font-serif">Join the Revolution.</h1>
          <h4 className=" text-4xl font-bold font-serif hidden md:block">Make it possible.</h4>
        </div>
      </div>
      <div>
        <Fade left>
          <h2 className="text-2xl font-bold text-center text-black mt-20">Products</h2>
        </Fade>
        <Shop></Shop>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Map></Map>
      </div>
    </section>
  );
};

export default Home;

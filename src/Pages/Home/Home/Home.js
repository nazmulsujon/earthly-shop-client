import React from "react";
import "./Home.css";
import bannerVideo from "../../../assets/videos/banner.mp4";

const Home = () => {
  return (
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
  );
};

export default Home;

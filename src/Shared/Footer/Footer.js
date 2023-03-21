import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Earthly-Logo.webp";

const Footer = () => {
  return (
    <div className="bg-[#000] sticky top-[100vh] text-white">
      <div className="py-3 md:flex justify-center items-center">
        <h6 className="p-1 text-2xl  text-center font-bold ">Follow us on :</h6>
        <div className="flex justify-center my-5">
          <a className="mx-3" href="https://www.facebook.com/profile.php?id=100017560637039">
            <FaFacebook className=" text-3xl mx-2 "></FaFacebook>
          </a>
          <a className="mx-2" href="https://www.linkedin.com/in/nazmul-sujon-39647b244/">
            <FaLinkedinIn className="  text-3xl mx-2"></FaLinkedinIn>
          </a>
          <a className="mx-2" href="https://github.com/nazmul68">
            <FaGithub className="  text-3xl mx-2"></FaGithub>
          </a>
          <a className="mx-2" href="https://api.whatsapp.com/send/?phone=01776097768">
            <FaWhatsapp className="  text-3xl mx-2"></FaWhatsapp>
          </a>
          <a className="mx-2" href="https://www.instagram.com/nazmul_sujon/">
            <FaInstagram className="  text-3xl mx-2"></FaInstagram>
          </a>
        </div>
      </div>
      <footer className="footer p-10">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="w-20" />
          <p className="text-2xl font-bold italic">earthly</p>
        </div>
        <div>
          <span className="font-bold">Categories</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/shop" className="link link-hover ">
            Shop
          </Link>
          <Link to="/" className="link link-hover ">
            All
          </Link>
        </div>
        <div className="">
          <span className="font-bold">More about</span>
          <Link to="/" className="link link-hover ">
            About us
          </Link>
          <Link to="/" className="link link-hover ">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Privacy
          </Link>
        </div>
      </footer>
      <p className="text-center">All Right Reserved By @earthly || 2023</p>
    </div>
  );
};

export default Footer;

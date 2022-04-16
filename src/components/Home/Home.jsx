// import "./Home.css";
// import facebook from "../Home/sources/facebook.svg";
// import google from "../Home/sources/google.svg";
// import instagram from "../Home/sources/instagram.svg";
// import bg from "../Home/sources/bg.jpeg";
// import bg2 from "../Home/sources/bg2.jpeg";
// import burana from "../Home/sources/burana.jpeg";
// import tashrabat from "../Home/sources/tashrabat.jpeg";
// import ik from "../Home/sources/ik.jpeg";
// import sulaimantoo from "../Home/sources/sulaimantoo.jpeg";
// import sarychelek from "../Home/sources/sarychelek.jpeg";
// import jetioguz from "../Home/sources/jetioguz.jpeg";
// import Header from "../Header/Header";
// import Navbar2 from "../Navbar/Navbar";
// import CarouselHome from "../Carousel/Carousel";
// import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer"
import React from "react";
import Navbar from "../Navbar/Navbar";
import video from "./sources2/video.mp4";
import "./Home2.css";
import bigimg from "./sources2/bigimg.jpeg";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="new-main-page">
        {/* <video className="main-video" autoPlay muted loop src={video}></video> */}
        {/* <p className="main2-title">Because You're an Adventurer, Not a Tourist</p> */}
      </div>
      <div>
        <img id="bigimg" src={bigimg} alt="" />
      </div>
    </>
  );
};

export default Home;

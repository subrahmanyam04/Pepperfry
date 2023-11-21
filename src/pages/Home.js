import React from "react";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Banner from "../components/Banner";
import Homecard1 from "../components/Homecard1";
import Homecard2 from '../components/Homecard2'
import Homebanner from "../components/Homebanner";
import Homecard3 from "../components/Homecard3";
import Homecardslider from "../components/Homecardslider";
import Homecard4 from "../components/Homecard4";
import Homecard5 from "../components/Homecard5";
import Homecard6 from "../components/Homecard6";
import Homeinfordata from "../components/Homeinfordata";
import Homeinformation from "../components/Homeinformation";
import Footer from "../components/Footer";
import Mobilefooter from "../components/Mobilefooter";
import Mobilefooter1 from "../components/Mobilefooter1";
import Timer from "../components/Timer";


const Home = () => {
  return (
    <div>
      <Timer />
      <Header />
      <Header1 />
      <Header2 />
      <Banner />
      <Homecard1 />
      <Homecard2 />
      <Homebanner />
      <Homecard3 />
      <Homecardslider />
      <Homecard4 />
      <Homecard5 />
      <Homecard6 />
      <Homeinfordata />
      <Homeinformation />
      <Footer />
      <Mobilefooter />
      <Mobilefooter1 />
    </div>
  )
}

export default Home;
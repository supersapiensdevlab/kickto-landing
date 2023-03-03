import logo from "./logo.svg";
import "./App.css";
import "@splidejs/react-splide/css";
import React from "react";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import anim from "./assets/videos/anim.m4v";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Router>
        <div className="h-full w-full">
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

// Component for Splash Screen
class SplashScreen extends React.Component {
  render() {
    const style = { top: 0, bottom: 0, right: 0, left: 0, position: "fixed" };

    return (
      <div className="w-full h-full  ">
        <video
          width="320"
          height="240"
          autoPlay
          src={anim}
          style={style}
          className="w-screen bg-white h-full z-50"
        ></video>
      </div>
    );
  }
}
export default App;

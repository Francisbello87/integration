import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Featured from "./components/Featured/Featured";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Logo from "../src/assets/logo.svg";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useLocoScroll(!isLoading);
  const [timer, setTimer] = useState(5);
  const id = useRef(null);

  const clearIsLoading = () => {
    window.clearInterval(id.current);
    setIsLoading(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 1) {
      clearIsLoading();
    }
  }, [timer]);

  return (
    <>
      {isLoading ? (
        <div className=" loader-wrapper absolute flex items-center justify-center h-full w-full ">
          <img className="pulsate" src={Logo} alt="Logo" />
        </div>
      ) : (
        <div
          data-scroll-container
          id="main-container"
          className="main-container bg-bgColor w-full h-screen px-36 "
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

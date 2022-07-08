import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "../stateProvider";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Members from "../components/Members";
import ScrollButton from "../components/ScrollButton";
import Loader from "../components/Loader";

export default function Home() {
  const [{ darkmode, loading }, dispatch] = useStateValue();

  const aboutRef = useRef();
  const skillsRef = useRef();
  const [mobileMenu, setMobileMenu] = useState(false);
  const refScroll = (e) => {
    e.current.scrollIntoView();
    closeMobileMenu();
  };
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  async function AlertDismissible(words, error) {
    if (!error) {
      toast.success(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }, 2000);
  }, []);
  return (
    <div
      data-theme={"aqua"}
      className={" overflow-hidden bg-base-100 z-auto relative"}
    >
      <Head>
        <title>CleverDevs</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div className=" bg-slate-300 z-auto ">
          <Navbar
            refScroll={refScroll}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            toggleMobileMenu={toggleMobileMenu}
            mobileMenu={mobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
          <Hero
            refScroll={refScroll}
            aboutRef={aboutRef}
            closeMobileMenu={closeMobileMenu}
          />
          <ScrollButton />
          <div className="bg-base-100 overflow-y-visible z-auto relative">
            <About aboutRef={aboutRef} closeMobileMenu={closeMobileMenu} />
          </div>
          <Skills skillsRef={skillsRef} closeMobileMenu={closeMobileMenu} />
          <Members closeMobileMenu={closeMobileMenu} />
          <Footer
            refScroll={refScroll}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
          />
        </div>
      )}
    </div>
  );
}

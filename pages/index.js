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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="This is the official website for the Cleverdevs. The Cleverdevs are a group of talented freelance developers."
        />

        <meta property="og:url" content="https://clever-base.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CleverBase" />
        <meta
          property="og:description"
          content="This is the official website for the Cleverdevs. The Cleverdevs are a group of talented freelance developers."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1657322192/Screenshot_2022-07-09_000251_jkdj3h.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="clever-base.vercel.app" />
        <meta
          property="twitter:url"
          content="https://clever-base.vercel.app/"
        />
        <meta name="twitter:title" content="CleverBase" />
        <meta
          name="twitter:description"
          content="This is the official website for the Cleverdevs. The Cleverdevs are a group of talented freelance developers."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1657322192/Screenshot_2022-07-09_000251_jkdj3h.jpg"
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

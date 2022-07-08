import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
function Navbar({
  refScroll,
  aboutRef,
  skillsRef,
  projectId,
  mobileMenu,
  toggleMobileMenu,
}) {
  const [notTrans, setNotTrans] = useState(false);
  const router = useRouter();

  const changeNavBg = () => {
    window.scrollY >= 120 ? setNotTrans(true) : setNotTrans(false);
  };
  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div
      className={`navbar fixed z-30  opacity-90 
      ${notTrans || projectId ? " bg-base-100" : "bg-transparent"}`}
    >
      <div
        className={` md:hidden absolute h-screen w-[200px] bg-base-200 bottom-0 top-0 left-0 opacity-100 transition-all duration-700 ${
          !mobileMenu && "-left-96"
        }`}
      >
        <ul className="flex flex-col justify-evenly">
          <li
            className="mx-5 my-7 text-lg cursor-pointer link link-hover"
            onClick={() => refScroll(aboutRef)}
          >
            About Us
          </li>
          <li
            className="mx-5 my-7 text-lg cursor-pointer link link-hover"
            onClick={() => refScroll(skillsRef)}
          >
            Services
          </li>
          <li className="mx-5 my-7 text-lg cursor-pointer link link-hover">
            <Link href={"/members"}>Members</Link>
          </li>
          <li className="mx-5 my-7 text-lg cursor-pointer link link-hover">
            <Link href={`/projects/${0}`}>Projects</Link>
          </li>
          <li className="mx-5 my-7 text-lg cursor-pointer link link-hover">
            <div className="btn btn-primary ">contact us</div>
          </li>
        </ul>
      </div>
      <div className="navbar-start">
        <h3
          className="font-summer text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Cleverdevs
        </h3>
      </div>
      {refScroll && (
        <div className="navbar-center ">
          <ul className="md:flex hidden">
            <li
              className="mx-2 cursor-pointer link link-hover"
              onClick={() => refScroll(aboutRef)}
            >
              About Us
            </li>
            <li
              className="mx-2 cursor-pointer link link-hover"
              onClick={() => refScroll(skillsRef)}
            >
              Services
            </li>
            <li className="mx-2 cursor-pointer link link-hover">
              <Link href={"/members"}>Members</Link>
            </li>
            <li className="mx-2 cursor-pointer link link-hover">
              <Link href={`/projects/${0}`}>Projects</Link>
            </li>
          </ul>
        </div>
      )}

      <div className="navbar-end">
        {projectId ? (
          <div className="btn btn-primary">{projectId + 1}</div>
        ) : (
          <div className="btn btn-primary md:flex hidden">contact us</div>
        )}
        {!projectId && (
          <div className="btn btn-circle btn-ghost flex md:hidden">
            <MenuIcon className="w-7 text-white " onClick={toggleMobileMenu} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

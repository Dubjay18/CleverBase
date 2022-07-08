import React from "react";
import { useRef } from "react";
import ProfilePlaceholder from "../images/pp.jpg";
function Members() {
  const slide1 = useRef();
  const slide2 = useRef();
  const slide3 = useRef();
  const carousel = useRef();
  const refScroll = (e) => {
    e.current.scrollIntoView();
    setTimeout(() => {
      carousel.current.scrollIntoView();
    }, 1000);
  };
  return (
    <div className="py-20" ref={carousel}>
      <h1 className="flex items-center  justify-center md:text-5xl text-2xl text-slate-800 mb-5">
        Members
      </h1>
      <div className="carousel w-full">
        <div ref={slide1} className="carousel-item relative  w-full">
          <div className="flex items-center justify-center md:w-1/2 w-[84%] mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={ProfilePlaceholder.src}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Xpan</h2>
                <p>
                  Victor also known as Xpan is a full-stack web developer with
                  more than 3 years experience in coding.
                </p>
                <div
                  className="card-actions tooltip tooltip-info"
                  data-tip="not available yet"
                >
                  <button className="btn btn-primary">More Info</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => refScroll(slide3)} className="btn btn-circle">
              ❮
            </a>
            <a className="btn btn-circle" onClick={() => refScroll(slide2)}>
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" ref={slide2} className="carousel-item relative w-full">
          <div className="flex items-center justify-center md:w-1/2 w-[84%] mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={ProfilePlaceholder.src}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Manaboy</h2>
                <p>
                  Manasseh also known as Manaboy,He is a frontend developer, We
                  call him the star boy of the squad because of his incredible
                  coding speed and sharp eye for color combos.
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">More Info</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => refScroll(slide1)} className="btn btn-circle">
              ❮
            </a>
            <a onClick={() => refScroll(slide3)} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div ref={slide3} className="carousel-item relative w-full">
          <div className="flex items-center justify-center md:w-1/2 w-[84%] mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={ProfilePlaceholder.src}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Dev-jay</h2>
                <p>
                  Yanfunmi also known as Dev-jay or Dubjay, He is a fullstack
                  developer with more than one year experience building dope
                  webapps.
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">More Info</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={() => refScroll(slide2)} className="btn btn-circle">
              ❮
            </a>
            <a onClick={() => refScroll(slide1)} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;

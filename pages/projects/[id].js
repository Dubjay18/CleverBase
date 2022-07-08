import { useRouter } from "next/router";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../../components/Navbar";
import { projectsData } from "../../utils/projectsData";

function id() {
  const router = useRouter();
  let { id } = router.query;
  const nextPage = () => {
    router.push(`/projects/${id + 1}`);
  };
  const prevPage = () => {
    router.push(`/projects/${id - 1}`);
  };
  const disableNext = () => {
    if (Number(id) + 1 > projectsData.length) {
      return true;
    }
    return false;
  };
  const disablePrev = () => {
    if (Number(id) - 1 < 0) {
      return true;
    }
    return false;
  };
  return (
    <div
      className="min-h-screen bg-base-100 overflow-hidden text-base-content"
      data-theme={"aqua"}
    >
      {" "}
      <Navbar projectId={id} />
      <div className="relative h-[60vh] mb-10">
        <Carousel
          showArrows={true}
          className=" h-[60vh]"
          autoPlay
          dynamicHeight={true}
        >
          {projectsData[id]?.pics?.map((image, i) => {
            return (
              <div key={i}>
                <img src={image.src} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex items-center flex-wrap mx-4 min-h-[40vh]">
        <div className="md:w-2/3">
          <h2>
            Title :{" "}
            <span className="text-primary text-lg my-4">
              {projectsData[id]?.name}
            </span>
          </h2>
          <p>Details: {projectsData[id]?.description}</p>
          <p className="my-5">
            Status:{" "}
            <span className="rounded-md bg-orange-400 text-white p-2 animate-pulse">
              {projectsData[id]?.status}
            </span>
          </p>
        </div>
        <div className="rounded-lg bg-accent p-4 shadow-md shadow-slate-300 mx-5 text-accent-content w-fit">
          <h2 className="font-bold text-lg">Tech</h2>
          <ul className="md:block flex justify-evenly">
            {projectsData[id]?.tech?.map((e, i) => {
              return (
                <li className="ml-1" key={i}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify=center w-full my-10">
        <div className="btn-group mx-auto">
          <button className="btn" onClick={prevPage} disabled={disablePrev}>
            «
          </button>
          <button className="btn">
            Page {Number(id) + 1}/{projectsData?.length}
          </button>
          <button className="btn" onClick={nextPage} disabled={disableNext}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default id;

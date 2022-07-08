import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
function Card({ title, placeholderPic, bio, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  console.log(visible);
  return (
    <div className="flex items-center justify-center w-full mx-60">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={placeholderPic.src} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{bio}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

const ImagesList = (props) => {
  return (
    <section className="images-list">
      <div
        className={`images-list__image images-list__image-${props.name}`}
      ></div>
      <div
        className={`images-list__image images-list__image-${props.name}`}
      ></div>
      <div
        className={`images-list__image images-list__image-${props.name}`}
      ></div>
      <div
        className={`images-list__image images-list__image-${props.name}`}
      ></div>
    </section>
  );
};

export default ImagesList;

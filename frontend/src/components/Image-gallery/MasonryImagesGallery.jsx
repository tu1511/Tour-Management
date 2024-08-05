import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className="masonry_img"
            key={index}
            src={item}
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          ></img>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;

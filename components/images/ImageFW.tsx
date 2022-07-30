import Image, { ImageProps } from "next/image";
import React from "react";

const ImageFW = ({ src, alt, height, width }: ImageProps) => {
  return (
    <>
      <figure className="image-fw__container">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </figure>
    </>
  );
};

export default ImageFW;

import Link from "next/link";
import React from "react";

const GoToTop = () => {
  return (
    <>
      <button className="button-go-to-top">
        <Link href={"#top"}>
          <small>TOP</small>
        </Link>
      </button>
    </>
  );
};

export default GoToTop;

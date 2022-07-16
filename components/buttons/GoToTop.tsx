import Link from "next/link";
import React from "react";

const GoToTop = () => {
  return (
    <>
      <div className="fixed z-50 right-2 bottom-4 text-sm bg-blue-300 rounded-full px-2">
        <Link href={"#top"}>TOP</Link>
      </div>
    </>
  );
};

export default GoToTop;

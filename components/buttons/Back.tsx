import { useRouter } from "next/router";
import React from "react";

const Back = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <button onClick={handleBack} className="button-back">
        Back
      </button>
    </>
  );
};

export default Back;

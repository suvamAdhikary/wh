import React from "react";
import { useApp } from "../../context/AppContext";

const MagicBack = () => {
  const { magicBackCta } = useApp();

  const handleBack = () => {
    magicBackCta();
  };

  return (
    <>
      <button onClick={handleBack} className="button-back">
        Back
      </button>
    </>
  );
};

export default MagicBack;

import React, { useEffect } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";

const WebServicesandXML = ({ backToParent }: magicBackProps) => {
  const { showMagicBackBtn, hideMagicBackBtn, handleMagicBackCta } = useApp();

  useEffect(() => {
    showMagicBackBtn();
    handleMagicBackCta(backToParent);

    return () => {
      hideMagicBackBtn();
      handleMagicBackCta(() => {});
    };
  }, []);

  return (
    <>
      <HeadingL2 title="Web Services and XML" />
    </>
  );
};

export default WebServicesandXML;

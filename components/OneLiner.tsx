import React from "react";

export interface oneLinerProps {
  children: any;
}

const OneLiner = ({ children }: oneLinerProps) => {
  return (
    <>
      <h4 className="py-2 px-2 border border-solid border-sky-400">
        {" "}
        {children}{" "}
      </h4>
    </>
  );
};

export default OneLiner;

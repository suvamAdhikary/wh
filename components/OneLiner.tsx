import React from "react";

export interface oneLinerProps {
  children: any;
  id?: string;
}

const OneLiner = ({ id, children }: oneLinerProps) => {
  return (
    <>
      <h4 id={id} className="py-2 px-2 border border-solid border-sky-400">
        {" "}
        {children}{" "}
      </h4>
    </>
  );
};

export default OneLiner;

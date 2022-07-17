import React from "react";

export interface oneLinerProps {
  children: any;
  id?: string;
}

const OneLiner = ({ id, children }: oneLinerProps) => {
  return (
    <>
      <div id={id} className="py-2 px-2 border border-solid border-sky-400">
        {" "}
        {children}{" "}
      </div>
    </>
  );
};

export default OneLiner;

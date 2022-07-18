import React from "react";

export interface oneLinerProps {
  children: any;
  id?: string;
}

const OneLiner = ({ id, children }: oneLinerProps) => {
  return (
    <>
      <article id={id} className="dynamic-children">
        {" "}
        {children}{" "}
      </article>
    </>
  );
};

export default OneLiner;

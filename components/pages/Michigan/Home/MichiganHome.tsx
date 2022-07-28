import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const MichiganHome = () => {
  return (
    <>
      <section className="big-link-btn__container">
        <Link href="/university-of-michigan/python">
          <button className="big-link-btn">
            <FontAwesomeIcon icon={faPython as any} size="10x" fixedWidth />
            <span className="big-link-btn__text">Python for Everybody</span>
          </button>
        </Link>
      </section>
    </>
  );
};

export default MichiganHome;

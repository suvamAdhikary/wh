import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faCloud } from "@fortawesome/free-solid-svg-icons";

const IBMHome = () => {
  return (
    <>
      <section className="big-link-btn__container">
        <Link href="/ibm/cloud">
          <button className="big-link-btn">
            <FontAwesomeIcon icon={faCloud} size="10x" fixedWidth />
            <span className="big-link-btn__text">Cloud Computing</span>
          </button>
        </Link>

        <Link href="/ibm/ai">
          <button className="big-link-btn">
            <FontAwesomeIcon icon={faBrain} size="10x" fixedWidth />
            <span className="big-link-btn__text">AI</span>
          </button>
        </Link>
      </section>
    </>
  );
};

export default IBMHome;

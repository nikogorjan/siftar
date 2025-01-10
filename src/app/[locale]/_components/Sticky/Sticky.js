"use client";

import React, { useRef } from "react";
import "../../../globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger);

const Sticky = () => {
  return (
    <section>
      <div className="sticky-main">
        <div className="sticky-wrapper">
          <section className="panel red">
            <img alt="food1" className="hill-img" src="/Images/vivat2.png" />
          </section>
          <section className="panel orange">
            <img alt="food1" className="hill-img" src="/Images/rotunda.webp" />
          </section>
          <section className="panel purple">
            <img alt="food1" className="hill-img" src="/Images/webp2.webp" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Sticky;

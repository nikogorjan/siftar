"use client";

import React, { useRef } from "react";
import "../../../globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const WrapperRef = useRef();
  const Message1Ref = useRef();
  const Message2Ref = useRef();
  const Message3Ref = useRef();

  const TableRef = useRef();

  const whiteLine1Ref = useRef(null);
  const whiteArrow1Ref = useRef(null);
  const whiteService1Ref = useRef(null);

  const whiteLine2Ref = useRef(null);
  const whiteArrow2Ref = useRef(null);
  const whiteService2Ref = useRef(null);

  const whiteLine3Ref = useRef(null);
  const whiteArrow3Ref = useRef(null);
  const whiteService3Ref = useRef(null);

  const whiteLine4Ref = useRef(null);
  const whiteArrow4Ref = useRef(null);
  const whiteService4Ref = useRef(null);

  const whiteLine5Ref = useRef(null);
  const whiteArrow5Ref = useRef(null);
  const whiteService5Ref = useRef(null);

  const whiteLine6Ref = useRef(null);
  const whiteArrow6Ref = useRef(null);
  const whiteService6Ref = useRef(null);

  const whiteLine7Ref = useRef(null);

  useGSAP(() => {
    const messages = [
      Message1Ref.current,
      Message2Ref.current,
      Message3Ref.current,
    ];

    gsap.fromTo(
      messages,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: WrapperRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: false,
          once: true,
          markers: false,
        },
      }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: TableRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: false,
        once: true,
        toggleActions: "play none none none",
        markers: false,
      },
    });

    tl2
      .fromTo(
        whiteLine1Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 }
      )
      .fromTo(
        whiteArrow1Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteService1Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteLine2Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 },
        0.3
      )
      .fromTo(
        whiteArrow2Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0.3 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteService2Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0.3 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteLine3Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 },
        0.6
      )
      .fromTo(
        whiteArrow3Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0.6 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteService3Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0.6 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteLine4Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 },
        0.9
      )
      .fromTo(
        whiteArrow4Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0.9 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteService4Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        0.9 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteLine5Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 },
        1.2
      )
      .fromTo(
        whiteArrow5Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        1.2 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteService5Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        1.2 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteLine6Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 },
        1.5
      )
      .fromTo(
        whiteArrow6Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        1.5 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteService6Ref.current,
        { y: 100 },
        { y: 0, duration: 0.3 },
        1.5 // This means the animation starts at the same time as the previous one
      )
      .fromTo(
        whiteLine7Ref.current,
        { width: "0%", transformOrigin: "left" },
        { width: "100%", duration: 1 },
        1.8
      );
  }, []);

  const t = useTranslations("HomePage");

  return (
    <section>
      <div className="stats-main">
        <div className="stats-wrapper" ref={WrapperRef}>
          <div className="stats-left">
            <div className="message-wrapper">
              <p className="message mt op0" ref={Message1Ref}>
                {t.rich("message1", {
                  orange: (chunks) => <span className="orange">{chunks}</span>,
                })}
              </p>
            </div>
          </div>

          <div className="stats-right">
            <div className="info-wrapper">
              <h2 className="info-header mtb op0" ref={Message2Ref}>
                {t("infoHeader")}
              </h2>
              <p className="message op0" ref={Message3Ref}>
                {t("nastanitve")}
              </p>

              <div className="stats-table" ref={TableRef}>
                <div className="line" ref={whiteLine1Ref}></div>
                <div className="stat-row">
                  <div className="hiddenw">
                    <div className="stat-left" ref={whiteArrow1Ref}>
                      {t("lokacija")}
                    </div>
                  </div>
                  <div className="hiddenw">
                    <div className="stat-right" ref={whiteService1Ref}>
                      {t("slovenija")}
                    </div>
                  </div>
                </div>
                <div className="line" ref={whiteLine2Ref}></div>
                <div className="stat-row">
                  <div className="hiddenw">
                    <div className="stat-left" ref={whiteArrow2Ref}>
                      {t("stzgradb")}
                    </div>
                  </div>
                  <div className="hiddenw">
                    <div className="stat-right" ref={whiteService2Ref}>
                      2
                    </div>
                  </div>
                </div>
                <div className="line" ref={whiteLine3Ref}></div>
                <div className="stat-row">
                  <div className="hiddenw">
                    <div className="stat-left" ref={whiteArrow3Ref}>
                      {t("stsob")}
                    </div>
                  </div>
                  <div className="hiddenw">
                    <div className="stat-right" ref={whiteService3Ref}>
                      5
                    </div>
                  </div>
                </div>
                <div className="line" ref={whiteLine4Ref}></div>
                <div className="stat-row">
                  <div className="hiddenw">
                    <div className="stat-left" ref={whiteArrow4Ref}>
                      {t("bivalni")}
                    </div>
                  </div>
                  <div className="hiddenw">
                    <div className="stat-right" ref={whiteService4Ref}>
                      216 m²
                    </div>
                  </div>
                </div>
                <div className="line" ref={whiteLine5Ref}></div>
                <div className="stat-row">
                  <div className="hiddenw">
                    <div className="stat-left" ref={whiteArrow5Ref}>
                      {t("restavracije")}
                    </div>
                  </div>
                  <div className="hiddenw">
                    <div className="stat-right" ref={whiteService5Ref}>
                      1
                    </div>
                  </div>
                </div>
                <div className="line" ref={whiteLine6Ref}></div>
                <div className="stat-row">
                  <div className="hiddenw">
                    <div className="stat-left" ref={whiteArrow6Ref}>
                      {t("okrepcevalnice")}
                    </div>
                  </div>
                  <div className="hiddenw">
                    <div className="stat-right" ref={whiteService6Ref}>
                      1
                    </div>
                  </div>
                </div>
                <div className="line" ref={whiteLine7Ref}></div>
              </div>

              <div className="res-now-row">
                <p className="res-p">{t("rezerviraj")}</p>
                <img
                  alt="logo"
                  className="arrow-r"
                  src="/Images/right-arrow-alt.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

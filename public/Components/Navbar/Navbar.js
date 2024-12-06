"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef();
  const menuRef = useRef();
  const [menuVisible, setMenuVisible] = useState(false);
  const pathname = usePathname(); // Hook to get the current route

  useEffect(() => {
    const navbar = navbarRef.current;

    // Check if we are on the main navigation page ("/")
    if (pathname === "/") {
      // Add a delay for the main page
      const timeoutId = setTimeout(() => {
        navbar.classList.add("visible");
      }, 4000);

      // Cleanup the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    } else {
      // For other pages, make the navbar visible instantly
      navbar.classList.add("visible");
    }
  }, [pathname]);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuVisible
      ) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div className="navbar-main">
      <div
        className="trigger-button"
        ref={navbarRef}
        onClick={handleMenuToggle}
      >
        <div className="menu-trigger-inner">
          <div className="button-text">Menu</div>
        </div>
      </div>

      <div
        className={`hidden-menu ${menuVisible ? "visible" : ""}`}
        ref={menuRef}
      >
        <div className="first-hidden-row">
          <div className="close-button" onClick={handleMenuToggle}>
            Zapri
          </div>
        </div>

        <div className="navigations-column">
          <div className="navigation-wrapper">
            <p className="navigation">Rezervacija</p>
          </div>
          <div className="navigation-wrapper">
            <p className="navigation">Vila Šiftar</p>
          </div>
          <a href="/gostisce-siftar" className="navigation-wrapper">
            <p className="navigation">Gostišče Šiftar</p>
          </a>
          <div className="navigation-wrapper">
            <p className="navigation">O nas</p>
          </div>
          <div className="navigation-wrapper">
            <p className="navigation">Kontakt</p>
          </div>
          <div className="navigation-wrapper">
            <p className="navigation">Domov</p>
          </div>
        </div>
      </div>

      <div className={`shadows-div ${menuVisible ? "visible" : ""}`}></div>
    </div>
  );
};

export default Navbar;

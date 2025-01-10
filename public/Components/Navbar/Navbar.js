"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

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

  const t = useTranslations("Navigation");
  const locale = useLocale();

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
            {t("zapri")}
          </div>
        </div>

        <div className="navigations-column">
          <a href={`/${locale}/rezervacija`} className="navigation-wrapper">
            <p className="navigation">{t("Rezervacija")}</p>
          </a>
          <div className="navigation-wrapper">
            <p className="navigation">{t("Vila")}</p>
          </div>
          <a href={`/${locale}/gostisce-siftar`} className="navigation-link">
            <p className="navigation">{t("Gostišče")}</p>
          </a>
          <a href={`/${locale}/prekmurje`} className="navigation-link">
            <p className="navigation">{t("lp")}</p>
          </a>
          <div className="navigation-wrapper">
            <p className="navigation">{t("about")}</p>
          </div>
          <a href={`/${locale}/kontakt`} className="navigation-wrapper">
            <p className="navigation">{t("Kontakt")}</p>
          </a>
          <a href={`/${locale}/`} className="navigation-link">
            <p className="navigation">{t("Začetna")}</p>
          </a>
        </div>
      </div>

      <div className={`shadows-div ${menuVisible ? "visible" : ""}`}></div>
    </div>
  );
};

export default Navbar;

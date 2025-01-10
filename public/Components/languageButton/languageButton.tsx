"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../src/app/globals.css";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  getCurrentLocale,
  changeLocalePath,
} from "../../../src/utils/localeUtils";

type ImageProps = {
  src: string;
  alt?: string;
};

type Language = {
  url: string;
  title: string;
  short: string;
  icon?: ImageProps;
};

type Props = {
  languages: Language[];
};

export type LanguagesButtonProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LanguagesButton = (props: LanguagesButtonProps) => {
  const { languages } = {
    ...LanguagesButtonDefaults,
    ...props,
  } as Props;

  const router = useRouter();
  const pathname = usePathname();

  // Define your supported locales and default locale
  const supportedLocales = ["en", "sl", "de"];
  const defaultLocale = "en";

  // Determine the current locale from the pathname
  const currentLocale = getCurrentLocale(
    pathname,
    supportedLocales,
    defaultLocale
  );

  const defaultLanguage =
    languages.find((lang) => lang.short === currentLocale) || languages[0];
  const [selectedLanguage, setSelectedLanguage] = useState<
    Language | undefined
  >(defaultLanguage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reference to the dropdown for detecting outside clicks
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    // Construct the new path with the selected locale
    const newPath = changeLocalePath(
      pathname,
      language.short,
      supportedLocales,
      defaultLocale
    );

    // Navigate to the new path
    router.push(newPath);
  };

  // Detect clicks outside the dropdown to close it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup on unmount or when isDropdownOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Update selectedLanguage if locale changes externally
  useEffect(() => {
    const newLanguage = languages.find((lang) => lang.short === currentLocale);
    if (newLanguage && newLanguage.short !== selectedLanguage?.short) {
      setSelectedLanguage(newLanguage);
    }
  }, [currentLocale, languages, selectedLanguage]);

  return (
    // Fiksna pozicija na spodnjem desnem delu s pridihom animacije
    <motion.div
      initial={{ x: 100, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ type: "ease", stiffness: 50, duration: 0.3, delay: 0.5 }}
      className="language-button"
    >
      <div className="relative-flex" ref={dropdownRef}>
        {/* Prikaz izbranega jezika */}
        <div
          className="flag-wrapper neue-bold"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {selectedLanguage?.icon && (
            <img
              src={selectedLanguage.icon.src}
              alt={selectedLanguage.icon.alt}
              className="w-[24px] h-[24px] margin-left-animation flag"
            />
          )}
          <p className="ml-1 neue-bold uppercase">{selectedLanguage?.short}</p>
        </div>

        {/* Dropdown meni z animacijo */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.nav
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu"
            >
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="mobilemenu-flex"
                  onClick={() => handleLanguageChange(language)}
                >
                  {language.icon && (
                    <img
                      src={language.icon.src}
                      alt={language.icon.alt}
                      className="flag"
                    />
                  )}
                  <span className="text-black neue-bold uppercase">
                    {language.short}
                  </span>
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const LanguagesButtonDefaults: LanguagesButtonProps = {
  languages: [
    {
      url: "#",
      title: "Slovenian",
      short: "sl",
      icon: {
        src: "/Images/Slovenia.svg",
        alt: "Slovenian flag",
      },
    },
    {
      url: "#",
      title: "English",
      short: "en",
      icon: {
        src: "/Images/GB.svg",
        alt: "British flag",
      },
    },
    {
      url: "#",
      title: "German",
      short: "de",
      icon: {
        src: "/Images/German.svg",
        alt: "German flag",
      },
    },
  ],
};

export default LanguagesButton;

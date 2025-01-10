"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const LocationLink = ({ destination }) => {
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const origin = `${latitude},${longitude}`;
        const dest = encodeURIComponent(destination);

        // Construct Google Maps URL
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;

        // Open in a new tab
        window.open(googleMapsUrl, "_blank");
      },
      (err) => {
        setError("Unable to retrieve your location.");
        console.error(err);
      }
    );
  };
  const t = useTranslations("contacts");

  return (
    <div>
      <button onClick={handleClick}>
        <div className="res-now-contact">
          <p className="res-p">{t("pn")}</p>
          <img
            alt="logo"
            className="arrow-r"
            src="/Images/right-arrow-alt.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default LocationLink;

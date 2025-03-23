'use client'

import Navbar from "../../../public/Components/Navbar/Navbar";
import Food from "./_components/Food/Food";
import Footer from "./_components/Footer/Footer";
import Grid from "./_components/Grid/Grid";
import Hero from "./_components/Hero/Hero";
import Reservation from "./_components/Reservation/Reservation";
import Stats from "./_components/Stats/Stats";
import Sticky from "./_components/Sticky/Sticky";
import Vision from "./_components/Vision/Vision";
import "../globals.css";
import LanguagesButton from "../../../public/Components/languageButton/languageButton";
import FooterBanner from "./_components/Footer/FooterBanner";
import GoogleAnalytics from "../../../src/google-analytics/google-analytics";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vila Šiftar | Prenočišča in gostinske storitve</title>
        <meta
          name="description"
          content="Vila Šiftar ponuja prenočišča in gostinske storitve. Uživajte v prijetnem ambientu in okusni kulinariki."
        />
        <meta name="keywords" content="Vila Šiftar, prenočišča, gostinske storitve, Slovenija" />
        <meta name="author" content="Vila Šiftar" />
        <meta property="og:title" content="Vila Šiftar | Prenočišča in gostinske storitve" />
        <meta
          property="og:description"
          content="Vila Šiftar ponuja prenočišča in gostinske storitve. Uživajte v prijetnem ambientu in okusni kulinariki."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vila-siftar.si/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vila Šiftar | Prenočišča in gostinske storitve" />
        <meta
          name="twitter:description"
          content="Vila Šiftar ponuja prenočišča in gostinske storitve. Uživajte v prijetnem ambientu in okusni kulinariki."
        />
        {/* Optionally, specify the content language */}
        <meta httpEquiv="Content-Language" content="sl" />
      </Head>
      <main>
        <div className="thisstupis">
          <GoogleAnalytics />
          <Navbar />
          <Hero />
          <Stats />
          <Grid />
          <Food />
          <Vision />
          <Sticky />
          <Reservation />
          <LanguagesButton />
        </div>
        <footer>
          <Footer />
        </footer>
        <FooterBanner />
      </main>
    </>
  );
}

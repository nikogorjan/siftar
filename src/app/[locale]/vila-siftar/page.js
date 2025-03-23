"use client"
import Navbar from "../../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import "../../globals.css";
import LanguagesButton from "../../../../public/Components/languageButton/languageButton";
import { Header37 } from "./_components/Header37/Header37";
import { Testimonial18 } from "./_components/Testimonial18/Testimonial18";
import { Header102 } from "./_components/Header102/Header102";
import { Layout419 } from "./_components/Layout419/Layout419";
import { Testimonial11 } from "./_components/Testimonial11/Testimonial11";
import { Faq3 } from "../o-nas/_components/Faq3/Faq3";
import { Layout94 } from "./_components/Layout94/Layout94";
import Contact14 from "./_components/Contact14/Contact14";
import FooterBanner from "../_components/Footer/FooterBanner";
import GoogleAnalytics from "../../../../src/google-analytics/google-analytics";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <GoogleAnalytics/>
        <Navbar />
        <Header37 />
        <Testimonial18 />
        <Testimonial11 />
        <Faq3 />
        <Layout94 />
        <Contact14 />
        {/*<Layout419 />*/}
        <LanguagesButton />
      </div>
      <footer>
        <Footer />
      </footer>
      <FooterBanner />
    </main>
  );
}

import Navbar from "../../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import "../../globals.css";
import LanguagesButton from "../../../../public/Components/languageButton/languageButton";
import { Header15 } from "./_components/Header15/Header15";
import { Layout498 } from "./_components/Layout498/Layout498";
import { Testimonial18 } from "./_components/Testimonial18/Testimonial18";
import { Faq3 } from "./_components/Faq3/Faq3";
import { Header123 } from "./_components/Header123/Header123";
import FooterBanner from "../_components/Footer/FooterBanner";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Header15 />
        <Testimonial18 />
        <Layout498 />
        <Faq3 />
        <Header123 />
        <LanguagesButton />
      </div>
      <footer>
        <Footer />
      </footer>
      <FooterBanner />
    </main>
  );
}

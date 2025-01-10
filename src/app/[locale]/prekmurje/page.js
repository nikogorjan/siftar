import Navbar from "../../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import "../../globals.css";
import LanguagesButton from "../../../../public/Components/languageButton/languageButton";
import { Header123 } from "./_components/Header123/Header123";
import { Layout90 } from "./_components/Layout90/Layout90";
import { Layout42 } from "./_components/Layout42/Layout42";
import { Layout132 } from "./_components/Layout132/Layout132";
import { Cta19 } from "./_components/Cta19/Cta19";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Header123 />
        <Layout90 />
        <Layout42 />
        <Layout132 />
        <Cta19 />
        <LanguagesButton />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

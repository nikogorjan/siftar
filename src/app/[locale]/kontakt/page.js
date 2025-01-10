import Navbar from "../../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import "../../globals.css";
import LanguagesButton from "../../../../public/Components/languageButton/languageButton";
import { Contact6 } from "./_components/Contact6/Contact6";
import { Layout363 } from "./_components/Layout363/Layout363";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Contact6 />
        <Layout363 />
        <LanguagesButton />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
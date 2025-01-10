import Navbar from "../../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import "../../globals.css";
import LanguagesButton from "../../../../public/Components/languageButton/languageButton";
import { Header47 } from "./_components/Header47/Header47";
import { Layout42 } from "./_components/Header42/Layout42";
import { Layout3 } from "./_components/Layout3/Layout3";
import { Layout32 } from "./_components/Layout32/Layout32";
import { Layout194 } from "./_components/Layout194/Layout194";
import { Layout1941 } from "./_components/Layout1941/Layout1941";
import { Layout322 } from "./_components/Layout322/Layout322";
import Contact144 from "./_components/Contact144/Contact144";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Header47 />
        <Layout42 />
        <Layout3 />
        <Layout194 />
        <Layout32 />
        <Layout1941 />
        <Layout322 />
        <Contact144 />
        <LanguagesButton />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

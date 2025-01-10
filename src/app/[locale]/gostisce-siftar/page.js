import Navbar from "../../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import { Header36 } from "./_components/Header/Header";
import "../../globals.css";
import { Testimonial35 } from "./_components/Testimonials/Testimonial35";
import { Testimonial15 } from "./_components/Testimonials/Testimonial15";
import { RestaurantMenu } from "./_components/Menu/Layout351";
import LanguagesButton from "../../../../public/Components/languageButton/languageButton";
import { Layout94 } from "./_components/Layout94/Layout94";
import { Contact14 } from "./_components/Contact14/Contact14";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Header36 />
        <RestaurantMenu />
        <Testimonial15 />
        <Layout94 />
        <Contact14 />
        <LanguagesButton />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

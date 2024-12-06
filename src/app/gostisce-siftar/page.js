import Navbar from "../../../public/Components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import { Header36 } from "./_components/Header/Header";
import "../globals.css";
import { Testimonial35 } from "./_components/Testimonials/Testimonial35";
import { Testimonial15 } from "./_components/Testimonials/Testimonial15";
import { RestaurantMenu } from "./_components/Menu/Layout351";
export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Header36 />
        <Testimonial15 />
        <RestaurantMenu />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

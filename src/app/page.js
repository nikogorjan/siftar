import Navbar from "../../public/Components/Navbar/Navbar";
import Food from "./_components/Food/Food";
import Footer from "./_components/Footer/Footer";
import Grid from "./_components/Grid/Grid";
import Hero from "./_components/Hero/Hero";
import Reservation from "./_components/Reservation/Reservation";
import Stats from "./_components/Stats/Stats";
import Sticky from "./_components/Sticky/Sticky";
import Vision from "./_components/Vision/Vision";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="thisstupis">
        <Navbar />
        <Hero />
        <Stats />
        <Grid />
        <Food />
        <Vision />
        <Sticky />
        <Reservation />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

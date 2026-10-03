import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LocationMap from "./components/LocationMap";
import AmenitiesGrid from "./components/AmenitiesGrid";
import DeveloperProfile from "./components/DeveloperProfile";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <LocationMap />
        <AmenitiesGrid />
        <DeveloperProfile />
        <ContactForm />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import Logo from "./assets/img/logo.png";
import { links } from "./data/navData";
import Slider from "./components/Slider/Slider";
import { sliderData } from "./data/sliderData";
import { featuredServicesData } from "./data/featuredServicesData";
import NeedHelp from "./components/NeedHelp/NeedHelp";
import AboutUs from "./components/AboutUs/AboutUs";
import Stats from "./components/Stats/Stats";
import { statsData } from "./data/statsData";
import Features from "./components/Features/Features";
import FeaturedServices from "./components/FeaturedServices/FeaturedServices";
import Services from "./components/Services/Services";
import { servicesData } from "./data/servicesData";
import Appointment from "./components/Appointment/Appointment";
import Departments from "./components/Departments/Departments";
import { departmentsLinksData } from "./data/departmentsData";
import { departmentsContentData } from "./data/departmentsData";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/Faqs/Faqs";
import Pricing from "./components/Pricing/Pricing";
import Doctors from "./components/Doctors/Doctors";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <header className="sticky-top">
        <TopBar
          date=" Monday - Saturday, 8AM to 10PM"
          number="+1 5589 55488 55"
        />
        <NavBar logo={Logo} links={links} />
      </header>
      <main>
        <Slider data={sliderData} />
        <FeaturedServices data={featuredServicesData} />
        <NeedHelp title="In an emergency? Need help now?" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <AboutUs />
        <Stats data={statsData} />
        <Features />
        <Services data={servicesData} />
        <Appointment />
        <Departments links={departmentsLinksData} content={departmentsContentData} />
        <Testimonials />
        <Doctors /> 
        <Gallery />
        <Pricing />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

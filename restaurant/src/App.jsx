import "./App.css";
import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ServiceArea from "./components/ServiceArea";
import WorkArea from "./components/WorkArea";

function App() {
  return (
    <>
      <Header />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="80"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        <Carousel />
        <AboutUs />
        <WorkArea />
        <ServiceArea />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}


export default App;

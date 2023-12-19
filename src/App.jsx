import "./tailwind.output.css";
import Hero from "./components/Hero";
import MouseHover from "./components/MouseHover";
import Header from "./components/Header";
import CardsPage from "./components/CardsPage";
import FooterHai from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Hero />
        <CardsPage/>
        <FooterHai/>
        <MouseHover />
      </div>
    </>
  );
};

export default App;


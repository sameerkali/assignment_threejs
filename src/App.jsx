import "./tailwind.output.css";
import Hero from "./components/Hero";
import Villain from "./components/Villain";
import MouseHover from "./components/MouseHover";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Hero />
        <Villain />
        <MouseHover />
      </div>
    </>
  );
};

export default App;

// https://github.com/robin-dela/hover-effect

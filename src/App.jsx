import "./tailwind.output.css";
import Hero from "./components/Hero";
// import MouseHover from "./components/MouseHover";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Hero />
        {/* <MouseHover /> */}
      </div>
    </>
  );
};

export default App;


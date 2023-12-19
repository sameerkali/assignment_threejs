import "./tailwind.output.css";
import Hero from "./components/Hero";
// import MouseHover from "./components/MouseHover";
import Header from "./components/Header";
import {Card1 , Card2} from "./components/Cards";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Hero />
        <Card1/>
        <Card2/>
        <Card1/>
        {/* <MouseHover /> */}
      </div>
    </>
  );
};

export default App;


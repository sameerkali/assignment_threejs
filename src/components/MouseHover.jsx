import { useEffect } from "react";
import { gsap } from "gsap";
import "../tailwind.output.css";

const MouseHover = () => {
    useEffect(() => {
      gsap.set(".ball", { xPercent: -50, yPercent: -50 });
      let targets = gsap.utils.toArray(".ball");
      window.addEventListener("mousemove", (e) => {
        gsap.to(targets, {
          duration: 0.3,
          x: e.clientX,
          y: e.clientY,
          ease: "power1.out",
          overwrite: "auto",
          stagger: 0.02
        });
      });
    }, []);
  
    return (
      <>
        <div className=" bg-gray-100">
          <div className="ball bg-red-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
          <div className="ball bg-green-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
          <div className="ball bg-blue-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
          <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
          <div className="ball bg-purple-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
          <div className="text-center text-4xl font-bold text-blue-900"></div>
        </div>
      </>
    );
  };
  
  export default MouseHover;
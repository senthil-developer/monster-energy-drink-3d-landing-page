import { Scene } from "./components/Scene";
import ViewModel from "./components/view-model";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Footer } from "./components/footer";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    gsap.to(".text", {
      y: "-80",
      x: "+80",
      scrollTrigger: {
        trigger: ".content",
        start: "top 90%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
  return (
    <div className="h-full text-white  relative">
      <div className="font-bold font-[Orbitron] inset-0 absolute select-none flex justify-center items-center h-full">
        {/* text behind blur */}
        <div className="text blur z-0">
          monster
          <br />
          energy
        </div>

        {/* text behind */}
        <div className="text z-[1]">
          monster
          <br />
          energy
        </div>
        {/* text front */}
        <div className="text text-transparent [-webkit-text-stroke:2px_white] z-[3]">
          monster
          <br />
          energy
        </div>
      </div>
      <div className="w-full h-full fixed inset-0 z-[2]">
        <Scene />
      </div>

      {/* divider */}
      <div className="h-full"></div>

      {/* content */}
      <div className="content flex flex-col items-center gap-20 justify-center bg-[#ff0000]">
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="w-1/2 p-8 ">
            <h2 className="text-2xl font-bold mb-4">About Monster Drink</h2>
            <p>
              Monster Energy is a popular energy drink known for its high
              caffeine content and bold flavors. It is marketed towards
              individuals seeking a boost of energy during work or recreational
              activities.
            </p>
            <p>Key features:</p>
            <ul className="list-disc pl-8">
              <li>High caffeine content</li>
              <li>Variety of flavors</li>
              <li>Popular among athletes and gamers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* button */}
      <ViewModel />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;

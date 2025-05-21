import { hero_vid1, hero_vid2 } from "../assets";

const HeroSection = () => {
  return (
    <div id="Home" className="flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide text-white">
        Presenting <span className="text-gradient">STABL</span>
      </h1>
      {/* <p className="mt-10 text-xl text-center text-white max-w-4xl">
        World's first "solely" engineered Trainers, for lifters who don't Compromise.
      </p> */}
      <span className="text-gradient text-center mt-10 text-2xl">"Grounded for Greatness"</span>{" "}

      <div className="flex mt-10 justify-center flex-col lg:flex-row">
        {/* First video container */}
        <div className="w-full lg:w-1/2 mx-2 my-4 lg:my-0">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full h-[300px] object-cover"
            src={hero_vid1}
          ></video>
        </div>
        <div className="w-full lg:w-1/2 mx-2 my-4 lg:my-0">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full h-[300px] object-cover"
            src={hero_vid2}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

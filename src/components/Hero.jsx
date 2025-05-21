import styles from "../style";
import { hero_img } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Presenting STABL<br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} text-gradient text-2xl max-w-[470px] mt-5`}>
          Unshakeable Ground, Unstoppable Form, Presenting world's first "solely" engineered trainers for lifters who don't compromise.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero_img} alt="billing" className="w-[70%] h-[100%] relative z-[5]" />


        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;

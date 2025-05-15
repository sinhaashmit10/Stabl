import { founder_img } from "../assets";
import styles, { layout } from "../style";

const Founder = () => (
  <section id="founder" className={`grid grid-cols-1 place-items-center sm:grid-cols-1 lg:grid-cols-2 w-full ${layout.sectionReverse}`}>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About the founder
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ahmad Hamood, a 24-year-old entrepreneur, is the driving force behind Stabl. Currently pursuing a PGDM at DY Patil, Pune, Ahmad brings over three years of experience from working in three startups, including Oneistox (now Novatr), a Y Combinator-backed venture. A dedicated weightlifter and sports enthusiast, Ahmad’s deep connection to gym culture inspired him to create footwear that meets the unique needs of strength athletes. Beyond entrepreneurship, he enjoys writing articles and cares for his two pet goldfish. Based in Pune, India, Ahmad is leveraging his startup experience and passion to build Stabl into a global brand, with Y Combinator as the next step to scale his vision.
      </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={founder_img} alt="billing" className="w-[100%] h-[100%] relative z-[5] filter grayscale" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Founder;

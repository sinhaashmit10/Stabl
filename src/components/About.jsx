import { shoe1, shoe2 } from "../assets";
import styles, { layout } from "../style";

const About = () => (
  <section id="product" className={`grid grid-cols-1 place-items-center sm:grid-cols-1 lg:grid-cols-2 w-full ${layout.sectionReverse}`}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Hero Shoe <br className="sm:block hidden" /> by Stabl
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Hero Shoe caters to everyday gym-goers, offering a perfect blend of stability and versatility for dynamic workouts.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        *Original designs revealing soon.
      </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={shoe1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Weightlifting Shoe <br className="sm:block hidden" /> by Stabl
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Projekt X is tailored for powerlifting and weightlifting, ensuring maximum stability for heavy lifts.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        *Original designs revealing soon.
      </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={shoe2} alt="Shoe2" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default About;

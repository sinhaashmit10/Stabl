import { gym } from "../assets";
import styles, { layout } from "../style";

const Mission = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Mission
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Stabl, our mission is to empower every athlete to achieve peak 
        physical strength by delivering footwear engineered for true stability 
        and performance. We’re redefining gym shoes by fusing advanced design 
        with the relentless spirit of strength training—creating a solid 
        foundation for lifters who demand more from their gear. Our goal 
        is to build a community where everyone feels grounded, supported, 
        and ready to push their limits—because when your base is strong, 
        greatness follows. We aim to foster a community where everyone 
        feels "Grounded for Greatness."
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={gym} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Mission;

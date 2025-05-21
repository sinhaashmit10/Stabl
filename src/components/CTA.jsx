import styles from "../style";
import { footer_img, footer_img2 } from "../assets";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Try STABL</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Engineered stability and comfort—everything you need to lift stronger, move better, and perform at your peak.
      </p>
    </div>
    <img src={footer_img2} alt="billing" className="w-60" />
    <img src={footer_img} alt="billing" className="w-60" />
  </section>
);

export default CTA;

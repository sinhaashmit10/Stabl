import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About the Product
      </h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 lg:grid-cols-3 w-full gap-10">
        <div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Ever visited your favourite shoe stores like Nike, Adidas, 
            Puma, or Skechers to buy training shoes for the gym? 
            Ask for gym shoes, and you’ll likely get padded jogging 
            or running shoes—far from practical for actual training. 
            That’s where Stabl steps in.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Rooted in Ancient Wisdom: Stabl’s design philosophy draws 
            inspiration from ancient Hindu and Vedic traditions, where 
            being close to the ground during exercise was key to strength
            and stability. Traditional practices like yoga asanas, 
            dands (Hindu push-ups), and baithaks (deep squats) emphasize 
            grounded postures that build balance, power, and control—principles 
            we’ve engineered into every pair of Stabl shoes.
          </p>
        </div>
        <div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Stabl creates premium gym shoes engineered for weightlifting 
            and versatile gym workouts. Designed with a focus on stability, 
            durability, and performance, our shoes feature a low-profile sole, 
            reinforced heel, and grippy outsole to keep athletes grounded during 
            heavy lifts and dynamic movements. Unlike generic athletic shoes, 
            Stabl addresses the unmet needs of strength trainers and gym enthusiasts 
            who demand footwear that supports their pursuit of personal records 
            without compromising style.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Stabl fuses ancient wisdom with modern performance to support every 
            lift and movement. Built for serious training—no compromises, just control.
          </p>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
        
      </div>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div> */}
  </section>
);

export default Business;

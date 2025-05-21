import styles from "./style";
import {
  About,
  Business,
  Mission,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  HeroSection,
  Purpose,
  Founder,
  FadeInSection,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>  
          <HeroSection />
        </FadeInSection>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="mt-10">
          <FadeInSection>
            <Stats />
          </FadeInSection>
        </div>

        <FadeInSection delay={0.1}>
          <Business />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <About />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <Mission />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <Purpose />
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <Founder />
        </FadeInSection>

        <FadeInSection delay={0.6}>
          <CTA />
        </FadeInSection>

        <Footer /> {/* Footer usually stays static, not animated */}
      </div>
    </div>
  </div>
);

export default App;

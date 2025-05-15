import styles, { layout } from "../style";
const Purpose = () => (
  <section className={`w-full grid grid-cols-1 place-items-center ${layout.section}`}>
    <div className={`w-full grid grid-cols-1 place-items-center ${layout.sectionInfo}`}>
      <h2 className={`w-full grid grid-cols-1 place-items-center ${styles.heading2}`}>
        The Purpose
      </h2>
      <p className={`w-full grid grid-cols-1 place-items-center text-justify ${styles.paragraph}`}>
        As an experienced lifter, I know first-hand why so many advanced athletes gravitate toward Converse—they’re flat, stable, and get us close to the ground, which is crucial for heavy lifts. But while Converse are the closest thing we’ve had to a true lifting shoe, they weren’t designed specifically for the gym, and their flaws become clear over time: the outsole wears down, grip fades, and the fit isn’t optimized for serious training. Sure, you can lift in Converse, just like you could technically play football in hiking boots—but why settle for less? With Stabl, you get footwear crafted for one purpose: maximizing your performance in the gym. It’s time the lifting community stopped compromising and experienced shoes built for the demands of serious training.
      </p>
      <br/>
      <p className={`w-full grid grid-cols-1 place-items-center font-bold text-yellow-600 ${styles.paragraph}`}>
        Some Relevant Links:
      </p>
      <div>
        <ul className="text-white flex flex-col justify-center list-disc list-inside">
            <li>
            <a 
                href="https://thatfitfriend.com/vans-vs-converse-review/" 
                className="hover:text-yellow-400 transition-colors duration-200"
            >
                Vans vs Converse: Which is Better for Working Out?
            </a>
            </li>
            <li>
            <a 
                href="https://thatfitfriend.com/are-converse-good-lifting/" 
                className="hover:text-yellow-400 transition-colors duration-200"
            >
                Converse as Lifting Shoes
            </a>
            </li>
            <li>
            <a 
                href="https://thatfitfriend.com/nike-blazer-vs-converse-chuck-taylor-vs-vans/" 
                className="hover:text-yellow-400 transition-colors duration-200"
            >
                Nike vs Converse vs Vans
            </a>
            </li>
        </ul>
        </div>

    </div>
  </section>
);

export default Purpose;

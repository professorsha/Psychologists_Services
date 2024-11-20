import css from './HomePage.module.css';
import Image from 'react';
export default function HomePage() {
  return (
    <>
      <h1 className={css.title}>
        The road to the <span className={css.actent}>depths</span> of the human
        soul
      </h1>
      <p>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <button>Get started</button>
      <img src='/public/home.jpg'/>
    </>
  );
}

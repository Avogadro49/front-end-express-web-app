/* eslint-disable no-unused-vars */
import React from "react";
import style from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      {/* Hero Section */}
      <section className={style.hero}>
        <h1>Welcome to Our Platform</h1>
        <p>My name is Jeff</p>
        <img src="/public/images/homePage-images/oswald-of-carim-large.svg" />
        <button className={style.cta_button}>Get Started</button>
      </section>

      {/* <section className={style.features}>
        <div className={style.features}>
          <h2>Top Bootcamps</h2>
          <p>Find the best-rated bootcamps to kickstart your career.</p>
        </div>
        <div className={style.features}>
          <h2>Expert Instructors</h2>
          <p>
            Learn from industry-leading professionals with real-world
            experience.
          </p>
        </div>
        <div className={style.features}>
          <h2>Flexible Courses</h2>
          <p>Choose courses that fit your schedule and learning style.</p>
        </div>
      </section> */}
      {/* <footer className={style.footer}>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;

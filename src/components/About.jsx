import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function About() {
  return (
    <div>
      <section class="section about">
        <div class="section-center about-center">
          <article class="about-img">
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              width={250}
              height={400}
              src="../assets/about.jpg"
              alt="no"
            />{" "}
          </article>
          <article class="about-info">
            <div class="section-title about-title">
              <h2>about</h2>
              <div class="underline"></div>
            </div>
            <p>
              I'm highly motivated Junior Front-End Developer with hands on
              practice. Always in beta version,experiencing, learning,
              evolving.
            </p>
            <p>
              After finishing my high school education in Azerbaijan in June
              2017, I received a privileged high school diploma from the
              Ministry of Education, and to be admitted by the universities in
              Azerbaijan I took a state exam. As a result of my industrious
              efforts, I aced on the exam and got a respectable score (627 out
              of 700). Besides getting a chance of choosing the best university
              programs in the country, I also received a Presidential
              scholarship and chose a Business Administration program at UNEC.
            </p>
            <a href="about.html" class="btn about-btn">
              about me
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;

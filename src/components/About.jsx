import React from "react";
import style from "../style/About.module.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.header}>
        <NavLink className={style.navlink} to="/home">
          <h1>About Vichar Sarovar</h1>
        </NavLink>
        <p>
          At Vichar Sarovar, we believe in the transformative power of books to
          not only enrich minds but also to inspire positive change in our
          communities and the world at large. Rooted in our ethos of social
          responsibility, we are dedicated to fostering a culture of compassion,
          empowerment, and sustainability.
        </p>
      </div>
      <div className={style.ethosContainer}>
        <div className={style.ethosHeadingContainer}>
          <h3>Our Ethos</h3>
        </div>

        <div className={style.girlEductaionEthoContainer}>
          <p className={style.ethoHeading}>Supporting Girl Education</p>
          <p className={style.aboutEtho}>
            We are committed to empowering future generations by supporting girl
            education initiatives. Through partnerships with local schools and
            educational organizations, we provide resources, scholarships, and
            mentorship programs to encourage young girls to pursue their
            academic aspirations and achieve their full potential.
          </p>
        </div>
        <div className={style.environmentEthoContainer}>
          <p className={style.ethoHeading}>Environmental Stewardship</p>
          <p className={style.aboutEtho}>
            We are passionate advocates for environmental conservation and
            sustainability. In alignment with our commitment to protecting the
            planet, we actively promote tree plantation drives and eco-friendly
            practices within our community. By fostering a culture of
            environmental stewardship, we strive to create a greener, more
            sustainable future for generations to come.
          </p>
        </div>
        <div className={style.hungerReliefEthoContainer}>
          <p className={style.ethoHeading}>Hunger Relief and Elderly Support</p>
          <p className={style.aboutEtho}>
            We believe in the importance of addressing food insecurity and
            supporting vulnerable populations in our society. Through organized
            food drives and community outreach programs, we extend a helping
            hand to the hungry and elderly, providing nutritious meals and
            essential support to those in need. By coming together as a
            community, we aim to alleviate hunger and foster a sense of care and
            solidarity.
          </p>
        </div>
        <div className={style.disasterReliefEthoContainer}>
          <p className={style.ethoHeading}>Disaster Relief Support</p>
          <p className={style.aboutEtho}>
            In times of crisis, we stand united in providing relief and support
            to those affected by natural disasters such as floods and
            earthquakes. Through voluntary donations, fundraising initiatives,
            and collaborative efforts with relief organizations, we offer aid
            and assistance to communities grappling with adversity. Together, we
            lend a helping hand and rebuild hope in the wake of devastation.
          </p>
        </div>
      </div>
      <div className={style.footerContainer}>
        <p>
          At Vichar Sarovar, our commitment goes beyond the realm of literature.
          We strive to be a catalyst for positive change, a source of
          inspiration, and a force for good in the world. Join us on our journey
          as we harness the power of literature and collective action to create
          a brighter, more compassionate future for all.
        </p>
        <p>
          Welcome to Vichar Sarovar, where books ignite minds and hearts, and
          where every page turns the page towards a better world.
        </p>
      </div>
    </div>
  );
}

export default About;

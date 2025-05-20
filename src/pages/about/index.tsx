import Head from "next/head";
import React from "react";

const AboutPage: React.FC = () => (
  <>
    <Head>
      <title>About Us | SkillEdge Coaching</title>
      <meta
        name="description"
        content="Learn more about SkillEdge Coaching, our mission, and our commitment to empowering your career."
      />
    </Head>
    <div style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best service
        possible.
      </p>
    </div>
  </>
);

export default AboutPage;

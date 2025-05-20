import Head from "next/head";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Services | SkillEdge Coaching</title>
        <meta
          name="description"
          content="Discover the range of professional coaching services offered by SkillEdge to empower your career and personal growth."
        />
      </Head>
      <div style={{ padding: "2rem" }}>
        <h1>Our Services</h1>
        <p>
          Welcome to the Services page. Here you can find information about what
          we offer.
        </p>
      </div>
    </>
  );
};

export default ServicesPage;

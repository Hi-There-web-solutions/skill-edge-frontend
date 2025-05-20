import Section1 from "@/components/Home/Hero";
import Section2 from "@/components/Home/WhatWeOffer";
import Section3 from "@/components/Home/PopularCourses";
import Section4 from "@/components/Home/WhyChoose";
import Section5 from "@/components/Home/GetInTouch";
import Head from "next/head";
import Testimonials from "@/components/Home/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>SkillEdge Coaching | Empower Your Career</title>
        <meta
          name="description"
          content="Professional coaching services and courses to boost your skills and career."
        />
      </Head>

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Testimonials />

      <Section5 />
    </>
  );
};

export default Home;

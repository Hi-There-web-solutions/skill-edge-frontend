import { useRouter } from "next/router";
import React from "react";

const Section1: React.FC = () => {
  const router = useRouter();
  return (
    <section
      className="relative overflow-hidden text-center py-20 px-4"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay for 50% dark background effect */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10" data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-5xl md:text-6xl font-bold ">
          Empower Your Future with SkillEdge
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-white font-bold mx-auto">
          Expert coaching designed to help you succeed in your career and
          personal growth.
        </p>
        <button
          onClick={() => router.push("/courses")}
          className="mt-8 font-semibold button py-3 px-6 rounded-xl transition-all transform  text-primary shadow-md">
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default Section1;

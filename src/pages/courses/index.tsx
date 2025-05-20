import Head from "next/head";
import React from "react";

const CoursesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Courses | SkillEdge Coaching</title>
        <meta
          name="description"
          content="Explore our wide range of professional courses to enhance your skills and advance your career with SkillEdge Coaching."
        />
      </Head>
      <div>
        <h1>Courses</h1>
        <p>Welcome to the Courses page!</p>
      </div>
    </>
  );
};

export default CoursesPage;

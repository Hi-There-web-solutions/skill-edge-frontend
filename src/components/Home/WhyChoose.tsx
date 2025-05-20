import React from "react";

const Section4: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-secondary mb-10">
        Why Choose SkillEdge?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        <div className="p-6 border rounded-xl shadow hover:shadow-md">
          <div className="text-4xl mb-4">👨‍🏫</div>
          <h4 className="text-xl font-semibold text-primary">Expert Mentors</h4>
          <p className="text-gray-600 mt-2">
            Learn from industry professionals with real-world experience.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-md">
          <div className="text-4xl mb-4">🚀</div>
          <h4 className="text-xl font-semibold text-primary">Career-Focused</h4>
          <p className="text-gray-600 mt-2">
            Our training is aligned with job-ready outcomes and growth paths.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-md">
          <div className="text-4xl mb-4">💬</div>
          <h4 className="text-xl font-semibold text-primary">
            Personalized Guidance
          </h4>
          <p className="text-gray-600 mt-2">
            One-on-one sessions to help you overcome career hurdles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;

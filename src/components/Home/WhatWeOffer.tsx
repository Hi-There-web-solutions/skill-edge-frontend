import React from "react";

const Section2: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Career Coaching", icon: "🧭" },
          { title: "Interview Prep", icon: "🎤" },
          { title: "Resume Building", icon: "📄" },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-background rounded-xl p-6 shadow hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">
              Tailored strategies to help you stand out and succeed.
            </p>
          </div>
        ))}
      </div>
      <button className="mt-10 button py-2 px-6 rounded-lg ">
        View All Services
      </button>
    </section>
  );
};

export default Section2;

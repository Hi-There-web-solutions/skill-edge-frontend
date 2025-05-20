import { useRouter } from "next/router";
import React from "react";

const Section5: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-secondary text-white py-12 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Ready to Transform Your Career?
      </h3>
      <p className="mt-2">Get personalized coaching that fits your goals.</p>
      <button
        onClick={() => router.push("/contact")}
        className="mt-4 button font-bold py-2 px-6 rounded-xl hover:bg-gray-200">
        Contact Us
      </button>
    </section>
  );
};

export default Section5;

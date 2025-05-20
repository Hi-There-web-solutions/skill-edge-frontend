import ContactForm from "@/components/common/ContactForm";
import Head from "next/head";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | SkillEdge Coaching</title>
        <meta
          name="description"
          content="Get in touch with SkillEdge Coaching for any questions or inquiries about our professional coaching services and courses."
        />
      </Head>
      <div style={{ padding: "2rem" }}>
        <h1 className="text-3xl font-extrabold text-center mb-4 text-gray-900">
          Get in Touch with Us
        </h1>
        
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;

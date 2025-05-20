import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  mobile: string; // Added mobile
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "", // Added mobile
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-full grid grid-cols-1 gap-3 md:grid-cols-2 p-4">
      <div className="flex flex-row  md:flex-col gap-8 bg-white rounded-xl shadow-lg p-6 md:p-10">
        {/* Left: Map */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
          <iframe
            title="Pulivalam Location"
            src="https://www.google.com/maps?q=Pulivalam,Thiruvarur,TN,610109,IN&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* Right: Form */}
      <div className="px-6 w-full">
        <form onSubmit={handleSubmit} className="font-sans">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="mobile"
              className="block mb-2 font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              value={form.mobile} // Bind value
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-vertical"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition">
            Send
          </button>
          {submitted && (
            <p className="text-green-600 mt-5 text-center font-medium">
              Thank you for contacting us!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

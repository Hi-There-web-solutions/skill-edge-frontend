import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ravi Kumar",
      quote:
        "SkillEdge changed my life! The coaching was personal and impactful.",
      image: "/placeholder-user.jpg", // Replace with your actual image path
    },
    {
      name: "Anjali Sharma",
      quote:
        "Thanks to SkillEdge, I cracked my dream job interview with confidence.",
      image: "/placeholder-user.jpg", // Replace with your actual image path
    },
    {
      name: "Deepak Verma",
      quote:
        "Highly professional trainers. Practical and career-oriented guidance.",
      image: "/placeholder-user.jpg", // Replace with your actual image path
    },
    {
      name: "Priya Patel",
      quote: "The best investment I made in my career development.",
      image: "/placeholder-user.jpg", // Replace with your actual image path
    },
    {
      name: "Suresh Nair",
      quote: "Exceptional faculty and well-structured courses.",
      image: "/placeholder-user.jpg", // Replace with your actual image path
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // You can set this to true if you want navigation arrows
  };

  return (
    <section className="bg-white py-16 px-4 text-center" id="testimonials">
      <h2
        className="text-3xl md:text-4xl font-bold text-primary mb-12"
        data-aos="fade-up">
        What Our Students Say
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="px-2"
              data-aos="zoom-in"
              data-aos-delay={i * 100}>
              <div className="bg-gray-50 shadow-md rounded-xl p-6 h-full mx-2">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-6">
                  &quot;{t.quote}&quot;
                </p>
                <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

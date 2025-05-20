import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Section3: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Create dots
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      color: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`,
      connections: [] as number[],
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update dot positions
      dots.forEach((dot) => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Boundary bounce
        if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1;
      });

      // Draw connections
      dots.forEach((dot, i) => {
        dots.slice(i + 1).forEach((otherDot) => {
          const distance = Math.hypot(dot.x - otherDot.x, dot.y - otherDot.y);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / 500})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        });
      });

      // Draw dots with pulsing effect
      const time = Date.now() * 0.001;
      dots.forEach((dot) => {
        const pulse = Math.sin(time * 2 + dot.x * 0.1) * 0.3 + 1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Handle resize
    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-background">
      {/* Animated Dot Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-200 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Full-Stack Web Development",
              desc: "Learn HTML, CSS, JavaScript, React, and Node.js with real projects.",
              image: "/web-dev.jpg",
            },
            {
              title: "Data Analytics & Excel",
              desc: "Master Excel, Power BI, and data visualization techniques.",
              image: "/data-analytics.jpg",
            },
            {
              title: "Soft Skills for Success",
              desc: "Communication, time management, leadership & confidence building.",
              image: "/soft-skills.jpg",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
                {course.image && (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-block py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all button">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;

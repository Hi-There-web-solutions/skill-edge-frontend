import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Logo & Tagline */}
        <div className="col-span-1">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="SkillEdge Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-primary">SkillEdge</span>
          </div>
          <p className="mt-4 text-sm">
            Empowering your career journey with expert coaching and real-world
            skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-primary">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-xl hover:text-primary">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-xl hover:text-primary">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        {/* Contact Info (Optional) */}
        <div>
          <h4 className="font-semibold text-primary mb-4">Get in Touch</h4>
          <p className="text-sm flex items-center">
            <i className="fas fa-envelope mr-2 text-primary"></i>
            <a
              href="mailto:skilledgecoaching@gmail.com"
              className="hover:text-primary underline">
              skilledgecoaching@gmail.com
            </a>
          </p>
          <p className="text-sm flex items-center mt-2">
            <i className="fas fa-phone mr-2 text-primary"></i>
            <a
              href="tel:+918610815391"
              className="hover:text-primary underline">
              +918610815391
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} SkillEdge Coaching. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

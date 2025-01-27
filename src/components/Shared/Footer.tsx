import { Link } from "react-router-dom";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <div className="mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <ul>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-400">Email: info@example.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
              <p className="text-gray-400 mb-4">
                Sign up to get the latest updates
              </p>
              <form action="#" method="POST">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4 text-center text-gray-400">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

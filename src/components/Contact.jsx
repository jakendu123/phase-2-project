import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <div className="about container text-center py-5">
        <h5 className="mb-4">Contact Us</h5>

        <p>
          <strong>Phone:</strong> <a href="tel:0706941673">0706941673</a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:okothfredrick@gmail.com">okothfredrick@gmail.com</a>
        </p>

        <p>
          <strong>Location:</strong> Nairobi, Kenya
        </p>

        <p>
          <strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
        </p>

        <div className="mt-4">
          <p>
            <strong>Follow us on:</strong>
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Instagram
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

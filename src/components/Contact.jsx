import Footer from "./Footer";
import NavBar from "./NavBar";
import contactImage from "../assets/contact.jpg"
export default function Contact() {
  return (
    <div>
      <NavBar />
      <div
        className="about img-fluid container text-center py-5  align-items-center justify-content-center  text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h5 className="mb-4">Contact Us</h5>

        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:0706941673" className="mx-2 text-black">
            0706941673
          </a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:okothfredrick@gmail.com" className="mx-2 text-black">
            okothfredrick@gmail.com
          </a>
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
            className="mx-2 text-black"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-black"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-black "
          >
            Instagram
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

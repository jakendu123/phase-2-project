import Footer from "./Footer";
import NavBar from "./NavBar";
import aboutImg from "../assets/bg1.jpg";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="about container py-5">
        <div className="text-center mb-4">
          <h5 className="mb-3">About Us</h5>

          <p className="fw-bold">
            We make global fundraising simpler, faster, and secure.
          </p>

          <p className="fw-bold">
            Globen Aid is a global fundraising platform with the least interest
            rates.
          </p>

          <p className="fw-bold">
            Globen Aid is a trusted, global fundraising platform designed to
            make giving and receiving support easier, faster, and more secure.
          </p>

          <p className="fw-bold">
            Whether it's responding to humanitarian crises, supporting community
            projects, or helping individuals in urgent need, Globen Aid connects
            people around the world through a simple and transparent donation
            system.
          </p>

          <p className="fw-bold mb-2">Key Features:</p>
          <ul className="list-unstyled">
            <li>
              <strong>Low-interest rates:</strong> We believe in maximum impact
              — most of what you raise goes directly to your cause.
            </li>
            <li>
              <strong>Fast and easy setup:</strong> Create and launch a campaign
              within minutes.
            </li>
            <li>
              <strong>Secure transactions:</strong> We use top-level encryption
              and trusted payment gateways to protect your funds.
            </li>
            <li>
              <strong>Global reach:</strong> Raise funds from anywhere in the
              world and help people across borders.
            </li>
            <li>
              <strong>Verified causes:</strong> Donors can give with confidence,
              knowing every campaign goes through a quality check.
            </li>
          </ul>

          <p className="fw-bold mt-4">
            Our mission is to empower individuals, communities, and
            organizations by providing a platform where help is always within
            reach — no matter where you are in the world.
          </p>
        </div>

        <div>
          <img
            src={aboutImg}
            alt="About"
            className="img-fluid d-block mx-auto rounded shadow"
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

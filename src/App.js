import "./App.css";
import { useState, useRef } from "react";
import Card from "./components/Card";
import heroImage from "./assets/global.jpg"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CauseModal from "./components/CauseModal";

export default function App() {
  const [donors, setDonors] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedCause, setSelectedCause] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDonate = (donation) => {
    setDonors([...donors, donation]);
    setTotal((prev) => prev + donation.amount);
    alert(
      `${donation.name}, you donated KES ${donation.amount.toFixed(2)} for "${
        donation.cause
      }"`
    );
  };

  const handleReset = () => {
    setDonors([]);
    setTotal(0);
    alert("Fundraiser has been reset.");
  };

  const openModal = (cause) => {
    setSelectedCause(cause);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCause(null);
  };

  const causesRef = useRef(null);

  const scrollToCauses = () => {
    if (causesRef.current) {
      causesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          // filter: "grayscale(100%)",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">We Need Your Support</h1>
          <button
            onClick={scrollToCauses}
            className="btn btn-outline-light mt-3 px-5 rounded-pill"
          >
            Donate Now
          </button>
        </div>
      </div>
      <div id="causes" ref={causesRef}>
        <Card onSelectCause={openModal} />
        <CauseModal
          show={showModal}
          onClose={closeModal}
          cause={selectedCause}
          onDonate={handleDonate}
          onReset={handleReset}
          donors={donors}
          total={total}
        />
      </div>
      <Footer />
    </>
  );
}

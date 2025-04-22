import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
// import DonationForm from "./components/DonationForm";
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

  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
}

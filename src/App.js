import "./App.css"
import { useState, useRef, useEffect } from "react"
import Card from "./components/Card"
import heroImage from "./assets/global.jpg"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import CauseModal from "./components/CauseModal"

export default function App() {
  const [donors, setDonors] = useState([])
  const [total, setTotal] = useState(0)
  const [selectedCause, setSelectedCause] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [donationsByCategory, setDonationsByCategory] = useState({})

  // Fetch existing donations when component mounts
  useEffect(() => {
    fetchDonations()
  }, [])

  const fetchDonations = async () => {
    try {
      const response = await fetch("http://localhost:4000/donations")
      const data = await response.json()

  // Group donations by category
  const donationGroups = {}
  let totalAmount = 0

  data.forEach((donation) => {
    if (!donationGroups[donation.category]) {
      donationGroups[donation.category] = 0
    }
    donationGroups[donation.category] += donation.amount
    totalAmount += donation.amount
  })

  setDonors(data)
  setDonationsByCategory(donationGroups)
  setTotal(totalAmount)
} catch (error) {
  console.error("Failed to fetch donations:", error)
}
  }

  const handleDonate = (donation) => {
    setDonors([...donors, donation])
    setTotal((prev) => prev + donation.amount)

// Update category totals
setDonationsByCategory((prev) => ({
  ...prev,
  [donation.category]: (prev[donation.category] || 0) + donation.amount,
}))

alert(`${donation.name}, you donated KES ${donation.amount.toFixed(2)} for "${donation.category}"`)
  }

  const handleReset = async () => {
    try {
      // This would typically be a more complex operation on the server
      // For now, we'll just update our local state
      setDonors([])
      setTotal(0)
      setDonationsByCategory({})
      alert("Fundraiser has been reset.")
    } catch (error) {
      console.error("Failed to reset fundraiser:", error)
    }
  }

  const openModal = (cause) => {
    setSelectedCause(cause)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCause(null)
  }

  const causesRef = useRef(null)

  const scrollToCauses = () => {
    if (causesRef.current) {
      causesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

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
          <button onClick={scrollToCauses} className="btn btn-outline-light mt-3 px-5 rounded-pill">
            Donate Now
          </button>
        </div>
      </div>
      <div id="causes" ref={causesRef}>
        <Card onSelectCause={openModal} donationsByCategory={donationsByCategory} />
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
  )
}


import { useState } from "react";

export default function DonationForm({
  selectedCause,
  onDonate,
  onReset,
  total,
  donors,
}) {
  const [formData, setFormData] = useState({
    name: "",
    amount: 1,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, amount } = formData;

    if (!selectedCause || !selectedCause.title)
      return alert("Please select a cause first.");
    if (!name || isNaN(amount) || amount <= 0) return alert("Invalid input.");

    try {
      // Update to use the correct endpoint and data structure
      const response = await fetch("http://localhost:4000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          amount: Number(amount),
          category: selectedCause.category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      const donation = await response.json();

      // Pass the donation to the parent component
      onDonate({
        name,
        amount: Number(amount),
        category: selectedCause.category,
      });

      // Reset form
      setFormData({ name: "", amount: 1 });
    } catch (error) {
      console.error("Failed to post donation:", error);
      alert("Failed to submit donation. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount (KES):
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="d-flex gap-3 mb-4">
          <button type="submit" className="btn btn-primary">
            Send Donation
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onReset}
          >
            Start A New Fundraiser
          </button>
        </div>
      </form>

      <div className="card mb-4">
        <div className="card-header bg-light">
          <h5 className="mb-0">Recent Donations</h5>
        </div>
        <div className="card-body">
          {donors.length > 0 ? (
            <ul className="list-group list-group-flush">
              {donors.map((donation, index) => (
                <li key={index} className="list-group-item">
                  <strong>{donation.name}</strong> donated{" "}
                  {formatCurrency(donation.amount)} for "
                  {donation.category || donation.cause}"
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">
              No donations yet. Be the first to contribute!
            </p>
          )}
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">Total Amount Contributed:</span>
            <span className="fs-5">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

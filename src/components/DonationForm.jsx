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
      await fetch("http://localhost:4000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          amount: Number(amount),
          cause: selectedCause.title,
        }),
      });

      onDonate({ name, amount: Number(amount), cause: selectedCause.title,});

      
      setFormData({ name: "", amount: 1 });
    } catch (error) {
      console.error("Failed to post donation:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Amount:</label>
        <br />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <div>
          <button type="submit" className="mx-5 my-3 btn btn-primary">
            Send
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success mb-3"
            onClick={onReset}
          >
            Start A New Fundraiser
          </button>
        </div>
        <ul>
          {donors.map((donation, index) => (
            <li key={index}>
              {donation.name} donated KES {donation.amount.toFixed(2)} for "
              {donation.cause}"
            </li>
          ))}
        </ul>
        <div className="total">
          <label className="fw-bold">Total Amount Contributed:</label>
          <p>KES: {total.toFixed(2)}</p>
        </div>
      </form>
    </div>
  );
}

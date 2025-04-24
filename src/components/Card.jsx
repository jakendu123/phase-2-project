import hungerImage from "../assets/hunger.jpg";
import floodsImage from "../assets/floods.jpg";
import redcrossImage from "../assets/red-cross-kenya.jpg";
import orphanagesImage from "../assets/orphanage-kenya.jpg";

export default function Card({ onSelectCause, donationsByCategory = {} }) {
  const causes = [
    {
      title: "Hunger in N.E Kenya",
      img: hungerImage,
      desc: "Donations for food supplies",
      target: 10000000,
      about:
        "Northeastern Kenya is one of the regions most affected by hunger and food insecurity. This is largely due to a combination of climatic, economic, and social factors. Funds also support feeding programs, especially in schools and refugee settlements, helping children stay in school despite hardship.",
      category: "Hunger in N.E Kenya",
    },
    {
      title: "Floods in Kisumu",
      img: floodsImage,
      desc: "Donations for food supplies",
      target: 15000000,
      about:
        "Floods in Kisumu have displaced thousands, especially in low-lying areas. Flooding destroys homes, crops, and infrastructure, leading to loss of livelihoods. Affected families face acute food shortages and waterborne diseases. Together, we can help communities recover and build resilience.",
      category: "floods",
    },
    {
      title: "Red Cross",
      img: redcrossImage,
      desc: "Donations for emergency services",
      target: 5000000,
      about:
        "The Red Cross provides emergency relief during disasters like floods, droughts, and conflict. Donations support rapid response teams, supplies, and long-term recovery efforts. The organization plays a vital role in saving lives and restoring dignity in crisis situations. Your support helps reach more people in urgent need.",
      category: "Red Cross",
    },
    {
      title: "Orphanages",
      img: orphanagesImage,
      desc: "Donations for supplies",
      target: 4000000,
      about:
        "Many orphanages lack basic supplies like food, clothing, bedding, and school materials. Children need emotional care, education, and a safe environment. Donations help provide daily necessities and improve living conditions. Support also aids in healthcare, education, and recreational activities.",
      category: "orphanages",
    },
  ];

  // Calculate progress percentage for each cause
  const getProgressPercentage = (category) => {
    const donated = donationsByCategory[category] || 0;
    const cause = causes.find((c) => c.category === category);
    if (!cause) return 0;

    const percentage = (donated / cause.target) * 100;
    return Math.min(percentage, 100); // Cap at 100%
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Choose a Cause</h2>
      <div className="row">
        {causes.map((cause) => (
          <div key={cause.title} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={cause.img || "/placeholder.svg"}
                alt={cause.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-capitalize">{cause.title}</h5>
                <p className="card-text">{cause.desc}</p>

                {/* Progress bar */}
                <div className="mt-auto fw-bold">
                  <div className="d-flex justify-content-between mb-1">
                    <small>
                      {formatCurrency(donationsByCategory[cause.category] || 0)}{" "}
                      raised
                    </small>
                    <small>Target: {formatCurrency(cause.target)}</small>
                  </div>
                  <div className="progress mb-3" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{
                        width: `${getProgressPercentage(cause.category)}%`,
                      }}
                      aria-valuenow={getProgressPercentage(cause.category)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => onSelectCause(cause)}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import hungerImage from "../assets/hunger.jpg";
import floodsImage from "../assets/floods.jpg";
import redcrossImage from "../assets/red-cross- kenya.jpg";
import orphanagesImage from "../assets/orphanage-kenya.jpg";
// const data = [
//   {
//     title: "Hunger in N.E Kenya",
//     img: hungerImage,
//     desc: "Donations for food supplies",
//   },
//   {
//     title: "Floods in Kisumu",
//     img: floodsImage,
//     desc: "Donations for food supplies",
//   },
//   {
//     title: "Red Cross",
//     img: redcrossImage,
//     desc: "Donations for emergency services",
//   },
//   {
//     title: "Orphanages",
//     img: orphanagesImage,
//     desc: "Donations for supplies",
//   },
// ];
export default function Card({ onSelectCause }) {
  const causes = [
    {
      title: "Hunger in N.E Kenya",
      img: hungerImage,
      desc: "Donations for food supplies",
      about:
        "Northeastern Kenya is one of the regions most affected by hunger and food insecurity. This is largely due to a combination of climatic, economic, and social factorsFunds also support feeding programs, especially in schools and refugee settlements, helping children stay in school despite hardship.",
    },
    {
      title: "Floods in Kisumu",
      img: floodsImage,
      desc: "Donations for food supplies",
      about:
        " floods in Kisumu have displaced thousands, especially in low-lying areas,Flooding destroys homes, crops, and infrastructure, leading to loss of livelihoods,Affected families face acute food shortages and waterborne diseases,Together, we can help communities recover and build resilience.",
    },
    {
      title: "Red Cross",
      img: redcrossImage,
      desc: "Donations for emergency services",
      about:
        "The Red Cross provides emergency relief during disasters like floods, droughts, and conflictDonations support rapid response teams, supplies, and long-term recovery efforts,The organization plays a vital role in saving lives and restoring dignity in crisis situations,Your support helps reach more people in urgent need",
    },
    {
      title: "Orphanages",
      img: orphanagesImage,
      desc: "Donations for supplies",
      about:
        "Many orphanages lack basic supplies like food, clothing, bedding, and school materials,Children need emotional care, education, and a safe environment,Donations help provide daily necessities and improve living conditions,Support also aids in healthcare, education, and recreational activities",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Choose a Cause</h2>
      <div className="row">
        {causes.map((cause) => (
          <div key={cause.title} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{cause.title}</h5>
                <img
                  src={cause.img}
                  alt={cause.title}
                  className="card-img-top"
                />

                <p className="card-text">{cause.desc}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onSelectCause(cause)}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

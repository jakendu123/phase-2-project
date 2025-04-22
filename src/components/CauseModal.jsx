import React from "react";
import DonationForm from "./DonationForm";

export default function CauseModal({
  show,
  onClose,
  cause,
  onDonate,
  onReset,
  donors,
  total,
}) {
  if (!show || !cause) return null;

  return (
    <div className="modal d-block bg-dark bg-opacity-75" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-capitalize">{cause.title} Cause</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
                      <p>{cause.desc}</p>
                      <p>{cause.about}</p>
            <DonationForm
              selectedCause={cause}
              onDonate={onDonate}
              onReset={onReset}
              donors={donors}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

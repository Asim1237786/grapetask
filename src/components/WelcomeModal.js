import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const WelcomeModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the message has been displayed before
    const hasDisplayedMessage = localStorage.getItem("hasDisplayedMessage");
    setShowModal(true);
    // If not, show the modal and mark the message as displayed
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Welcome to GrapeTask! Website Under Development 🚀
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          We’re working hard behind the scenes to bring you an amazing
          experience! Our team is diligently developing and refining the website
          to ensure everything runs smoothly. You may encounter some incomplete
          features or occasional glitches, but rest assured, we’re on it! Stay
          tuned for updates, and don’t forget to subscribe to our newsletter to
          be the first to know when we launch. Thank you for your patience and
          support! 🙌
          <br />
          <a onClick={() => handleClose()} href="#subscribe">
            Subscribe Now
          </a>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default WelcomeModal;

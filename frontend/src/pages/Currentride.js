import React, { useState, useEffect,useContext } from 'react';
import '../styles/Currentride.css';
import { useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { RideContext } from '../RideContext';

// Editride Component
const Editride = ({ currentrightdata, onSave, onClose, userRole }) => {
  const [formData, setFormData] = useState(currentrightdata);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="currentride-popup">
      <div className="currentride-popup-Inner">
        <div className="currentride-popup-header">
          <button className="currentride-close-btn" onClick={onClose}>X</button>
        </div>
        <h3>Edit Ride Details</h3>
        <div className='currentride-form'>
          {userRole === 'driver' && (
            <>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </label>
              <br /><br />
              <label>
                Number of seats:
                <input
                  type="text"
                  name="requestedSeats"
                  value={formData.requestedSeats}
                  onChange={handleChange}
                />
              </label>
              <br /><br />
              <label>
                Time:
                <input
                  type="text"
                  name="timePeriod"
                  value={formData.timePeriod}
                  onChange={handleChange}
                />
              </label>
              <br /><br />
              <label>
                Preference:
                <input
                  type="text"
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                />
              </label>
              <br /><br />
            </>
          )}
          {userRole === 'passenger' && (
            <>
              <label>
                Number of seats:
                <input
                  type="text"
                  name="requestedSeats"
                  value={formData.requestedSeats}
                  onChange={handleChange}
                />
              </label>
              <br /><br />
            </>
          )}
        </div>
        <button className="currentride-action-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

// Rating Component
const Rating = ({ onClose }) => {
  const [driverRating, setDriverRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setDriverRating(newRating);
  };

  const handleSubmitRating = () => {
    // Handle rating submission logic here
    alert(`Rating submitted: ${driverRating} stars`);
    onClose();
  };

  return (
    <div className="currentride-popup">
      <div className="currentride-popup-Inner">
        <div className="currentride-popup-header">
          <button className="currentride-close-btn" onClick={onClose}>X</button>
        </div>
        <h3>Rate Your Ride</h3>
        <div className='currentride-rating'>
          <label>
            <ReactStars
              count={5}
              size={50}
              activeColor="#ffd700"
              value={driverRating}
              onChange={handleRatingChange}
            />
          </label>
          <br />
        </div>
        <button className="currentride-action-button" onClick={handleSubmitRating}>
          Submit Rating
        </button>
      </div>
    </div>
  );
};

// DriverView Component
// DriverView Component
const DriverView = ({ currentrightdata, onConfirmRide, isConfirming, toggleEditRide, handleCancel, showDeleteDialog, handleFinishRide, isFinishDialogVisible, hideFinishDialog }) => (
  <div className='currentride-card-box'>
    <h3>Ride Details</h3>
    <div className='currentride-box-container'>
      <div className='currentride-box'>
        <p><strong>Date:</strong> {currentrightdata.date}</p>
        <p><strong>Pickup Location:</strong> {currentrightdata.from}</p>
        <p><strong>Drop-off Location:</strong> {currentrightdata.to}</p>
        <p><strong>Route: </strong>{currentrightdata.route.join(' ➜ ')}</p>
        <p><strong>Time Period:</strong> {currentrightdata.timePeriod}</p>
        <p><strong>Number of seats:</strong> {currentrightdata.requestedSeats}</p>
        <p><strong>Preference:</strong> {currentrightdata.preferences}</p>
        {currentrightdata.passengers && currentrightdata.passengers.length > 0 && (
          <div>
            <h4>Passengers:</h4>
            <ul>
              {currentrightdata.passengers.map((passengers, index) => (
                <li key={index}>
                  <p><strong>Name:</strong> {passengers.name}</p>
                  <p><strong>Seats:</strong> {passengers.seats}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isConfirming && (
          <div className="currentride-button-container">
            <button className='currentride-action-button' onClick={onConfirmRide}>Confirm Ride</button>
          </div>
        )}
      </div>
    </div>
    <div className="currentride-button-container">
      <button className='currentride-action-button' onClick={toggleEditRide}>Edit Ride</button>
      <button className='currentride-action-button' onClick={handleCancel}>Cancel Ride</button>
      <button className='currentride-action-button' onClick={handleFinishRide}>Finish Ride</button>
      {isFinishDialogVisible && (
        <div className="currentride-popup">
          <div className="currentride-popup-delete-inner">
            <h2>Ride Finished!</h2>
            <p>Your ride is finished!</p>
            <button className="currentride-action-button" onClick={hideFinishDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  </div>
);


// PassengerView Component
const PassengerView = ({ currentrightdata, toggleEditRide, handleCancel, showDeleteDialog, handleFinishRide, isFinishDialogVisible, hideFinishDialog, isRatingDialogVisible, hideRatingDialog }) => (
  <div className='currentride-card-box'>
    <h3>Ride Details</h3>
    <div className='currentride-box-container'>
      <div className='currentride-box'>
        <p><strong>Driver Name:</strong> {currentrightdata.driverName}</p>
        <p><strong>Vehicle Number:</strong> {currentrightdata.vehicleNumber}</p>
        <p><strong>Date:</strong> {currentrightdata.date}</p>
        <p><strong>Time:</strong> {currentrightdata.timePeriod}</p>
        <p><strong>Pickup Location:</strong> {currentrightdata.from}</p>
        <p><strong>Drop-off Location:</strong> {currentrightdata.to}</p>
        <p><strong>Route: </strong>{currentrightdata.route.join(' ➜ ')}</p>
        <p><strong>Number of seats:</strong> {currentrightdata.requestedSeats}</p>
        <p><strong>Preference:</strong> {currentrightdata.preferences}</p>
      </div>
    </div>
    <div className="currentride-button-container">
      <button className='currentride-action-button' onClick={toggleEditRide}>Edit Ride</button>
      <button className='currentride-action-button' onClick={handleCancel}>Cancel Ride</button>
      <button className='currentride-action-button' onClick={handleFinishRide}>Finish Ride</button>
      {isFinishDialogVisible && (
        <div className="currentride-popup">
          <div className="currentride-popup-delete-inner">
            <h2>Ride Finished!</h2>
            <p>Your ride is finished!</p>
            <button className="currentride-action-button" onClick={hideFinishDialog}>Close</button>
          </div>
        </div>
      )}
      {isRatingDialogVisible && (
        <Rating onClose={hideRatingDialog} />
      )}
    </div>
  </div>
);

// Currentride Component

const Currentride = ({ userRole }) => {
  const location = useLocation();
  const { card, requestedSeats, passengers } = location.state || {};
  const { currentRide, setCurrentRide } = useContext(RideContext);

  const [isConfirming, setIsConfirming] = useState(false);
  const [openpopup, setOpenpopup] = useState(false);
  const [cancelride, setCancelride] = useState(null);
  const [isDeleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [isFinishDialogVisible, setFinishDialogVisible] = useState(false);
  const [isRatingDialogVisible, setRatingDialogVisible] = useState(false);

  useEffect(() => {
    if (card) {
      setCurrentRide({ ...card, requestedSeats, passengers });
      setIsConfirming(true);
    }
  }, [card, requestedSeats, passengers, setCurrentRide]);

  if (!currentRide) {
    return <div>No current ride available</div>;
  }

  const handleConfirmRide = () => {
    // Simulate confirming the ride request
    // Replace this with an actual API call
    setTimeout(() => {
      alert('Ride confirmed');
      setIsConfirming(false);
    }, 1000);
  };

  const handleSaveCurrentRide = (formData) => {
    setCurrentRide(formData);
  };

  const toggleEditRide = () => {
    setOpenpopup(!openpopup);
  };

  const handleCancel = () => {
    setCancelride(true);
  };

  const closeModel = () => {
    setCancelride(null);
  };

  const showDeleteDialog = () => {
    setDeleteDialogVisible(true);
  };

  const hideDeleteDialog = () => {
    setDeleteDialogVisible(false);
  };

  const handleFinishRide = () => {
    setFinishDialogVisible(true);
    if (userRole === 'passenger') {
      setRatingDialogVisible(true);
    }
  };

  const hideFinishDialog = () => {
    setFinishDialogVisible(false);
  };

  const hideRatingDialog = () => {
    setRatingDialogVisible(false);
  };

  return (
    <div className='currentride'>
      <div className='currentride-header-title'>
        <h1>Current Ride</h1>
      </div>
      {userRole === 'driver' ? (
        <DriverView
          currentrightdata={currentRide}
          onConfirmRide={handleConfirmRide}
          isConfirming={isConfirming}
          toggleEditRide={toggleEditRide}
          handleCancel={handleCancel}
          showDeleteDialog={showDeleteDialog}
          handleFinishRide={handleFinishRide}
          isFinishDialogVisible={isFinishDialogVisible}
          hideFinishDialog={hideFinishDialog}
        />
      ) : (
        <PassengerView
          currentrightdata={currentRide}
          toggleEditRide={toggleEditRide}
          handleCancel={handleCancel}
          showDeleteDialog={showDeleteDialog}
          handleFinishRide={handleFinishRide}
          isFinishDialogVisible={isFinishDialogVisible}
          hideFinishDialog={hideFinishDialog}
          isRatingDialogVisible={isRatingDialogVisible}
          hideRatingDialog={hideRatingDialog}
        />
      )}
      {openpopup && (
        <Editride
          currentrightdata={currentRide}
          onSave={handleSaveCurrentRide}
          onClose={toggleEditRide}
          userRole={userRole}
        />
      )}
      {cancelride && (
        <div className="currentride-popup">
          <div className="currentride-popup-Inner">
            <button className="currentride-close-btn" onClick={closeModel}>&times;</button>
            <h2>Ride Details</h2>
            <p><strong>Date:</strong> {currentRide.date}</p>
            <p><strong>Pickup Location:</strong> {currentRide.from}</p>
            <p><strong>Drop-off Location:</strong> {currentRide.to}</p>
            <p><strong>Route: </strong>{currentRide.route.join(' ➜ ')}</p>
            <p><strong>Time Period:</strong> {currentRide.timePeriod}</p>
            <p><strong>Number of seats:</strong> {currentRide.requestedSeats}</p>
            <p><strong>Preference:</strong> {currentRide.preferences}</p>
            <button className="currentride-delete-button" onClick={showDeleteDialog}>Delete Ride</button>
          </div>
        </div>
      )}
      {isDeleteDialogVisible && (
        <div className="currentride-popup">
          <div className="currentride-popup-delete-inner">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this Ride?</p>
            <div className='currentride-button-container'>
              <button className='currentride-yes-button'>Yes</button>
              <button className="currentride-No-button" onClick={hideDeleteDialog}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Currentride;
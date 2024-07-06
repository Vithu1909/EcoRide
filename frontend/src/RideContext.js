
import React, { createContext, useState } from 'react';

export const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [currentRide, setCurrentRide] = useState(null);
  const [rideRequests, setRideRequests] = useState([]);

  return (
    <RideContext.Provider value={{ currentRide, setCurrentRide, rideRequests, setRideRequests }}>
      {children}
    </RideContext.Provider>
  );
};

// import React from 'react';
// import DiabetesPredictionPortal from './components/DiabetesPredictionPortal.jsx';

// function App() {
//   return (
//     <div className="App">
//       <DiabetesPredictionPortal />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import UserDetailsForm from "./components/UserDetailsForm";
import DiabetesPredictionPortal from "./components/DiabetesPredictionPortal";

const App = () => {
  const [currentStep, setCurrentStep] = useState("userDetails"); // Track current step
  const [userDetails, setUserDetails] = useState({}); // Store user details

  // Handle user details submission
  const handleUserDetailsSubmit = (data) => {
    console.log("User Details Submitted:", data); // Debugging
    setUserDetails(data); // Save user details
    setCurrentStep("prediction"); // Move to the prediction step
  };

  console.log("Current Step:", currentStep); // Debugging

  return (
    <div>
      {currentStep === "userDetails" && (
        <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
      )}
      {currentStep === "prediction" && (
        <DiabetesPredictionPortal userDetails={userDetails} />
      )}
    </div>
  );
};

export default App;
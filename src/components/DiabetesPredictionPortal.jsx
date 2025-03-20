// import React, { useState } from "react";
// import { FaUser, FaWeight, FaRulerVertical, FaTint, FaToilet, FaTired, FaCheckCircle, FaTimesCircle, FaVial } from "react-icons/fa";
// import { BsArrowRight } from "react-icons/bs";
// import { FaUserMd, FaHeartbeat, FaProcedures } from "react-icons/fa";


// const DiabetesPredictionPortal = () => {
//   const [formData, setFormData] = useState({
//     age: "",
//     weight: "",
//     height: "",
//     glucoseFasting: "",
//     glucosePostFasting: "",
//     HbA1c: "",
//     familyHistory: "",
//     hypertension: "",
//     heartDisease: "",
//     increasedThirst: "",
//     frequentUrination: "",
//     unexplainedFatigue: "",
//     weightLoss: "",
//   });


//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const calculateRisk = () => {

//     let riskScore = 0;

//     const age = parseInt(formData.age, 10);
//     const weight = parseFloat(formData.weight);
//     const height = parseFloat(formData.height);
//     const bmi = weight / ((height / 100) ** 2);
//     const glucoseFasting = parseFloat(formData.glucoseFasting);
//     const glucosePostFasting = parseFloat(formData.glucosePostFasting);
//     const HbA1c = parseFloat(formData.HbA1c);


//     if (age > 45) {
//       riskScore += 1;
//     }
//     if (age > 120) {
//       alert("age must be under 120")
//     }

//     if (bmi > 25) riskScore += 1;

//     if (glucoseFasting < 70) {
//       riskScore += 3;
//     } else if (glucoseFasting >= 70 && glucoseFasting <= 100) {
//       riskScore += 1;
//     } else if (glucoseFasting >= 100 && glucoseFasting < 125) {
//       riskScore += 2;
//     } else if (glucoseFasting > 125) {
//       riskScore += 3;
//     }

//     if (glucosePostFasting < 140) {
//       riskScore += 1;
//     } else if (glucosePostFasting >= 140 && glucosePostFasting < 199) {
//       riskScore += 2;
//     } else if (glucosePostFasting >= 199) {
//       riskScore += 3;
//     }

//     if (HbA1c < 5.7) {
//       riskScore += 2;
//     } else if (HbA1c >= 5.7 && HbA1c <= 6.4) {
//       riskScore += 1;
//     } else {
//       riskScore += 2;
//     }

//     if (formData.familyHistory === "yes") riskScore += 1;
//     if (formData.hypertension === "yes") riskScore += 1;
//     if (formData.heartDisease === "yes") riskScore += 1;

//     if (formData.increasedThirst === "yes") riskScore += 1;
//     if (formData.frequentUrination === "yes") riskScore += 1;
//     if (formData.unexplainedFatigue === "yes") riskScore += 1;
//     if (formData.weightLoss === "yes") riskScore += 1;

//     return riskScore;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.values(formData).some((value) => value === "")) {
//       // setError("Please fill in all fields.");
//       alert("Please fill in all fields.")
//       return;
//     }

//     const riskScore = calculateRisk();
//     let risk;
//     if (riskScore <= 3) {
//       risk = "Low";
//     } else if (riskScore <= 5) {
//       risk = "Moderate";
//     } else {
//       risk = "High";
//     }
//     setPrediction(risk);
//     setError("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-violet-600 mb-12">Diabetes Risk Prediction Portal</h1>
//         <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//           <div className="md:flex">
//             <div className="md:w-1/2 p-8">
//               <h2 className="text-2xl font-semibold mb-6">Enter Your Information</h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {[
//                   { id: "age", label: "Age", icon: <FaUser /> },
//                   { id: "weight", label: "Weight (kg)", icon: <FaWeight /> },
//                   { id: "height", label: "Height (cm)", icon: <FaRulerVertical /> },
//                   { id: "glucoseFasting", label: "Glucose Fasting (mg/dL)", icon: <FaTint /> },
//                   { id: "glucosePostFasting", label: "Glucose 2hrs PostLoad (mg/dL)", icon: <FaTint /> },
//                   { id: "HbA1c", label: "HbA1c (%)", icon: <FaVial /> },
//                 ].map(({ id, label, icon }) => (
//                   <div key={id}>
//                     <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
//                     <div className="mt-1 relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         {icon}
//                       </div>
//                       <input
//                         type="number"
//                         name={id}
//                         id={id}
//                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//                         placeholder={`Your ${label.toLowerCase()}`}
//                         value={formData[id]}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 ))}
//                 {[
//                   { id: "familyHistory", label: "Family History of Diabetes", icon: <FaUserMd /> },
//                   { id: "hypertension", label: "Hypertension", icon: <FaHeartbeat /> },
//                   { id: "heartDisease", label: "Heart Disease", icon: <FaProcedures /> },
//                 ].map(({ id, label, icon }) => (
//                   <div key={id}>
//                     <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
//                     <div className="mt-1 relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         {icon}
//                       </div>
//                       <select
//                         name={id}
//                         id={id}
//                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//                         value={formData[id]}
//                         onChange={handleInputChange}
//                       >
//                         <option value="">Select an option</option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                       </select>
//                     </div>
//                   </div>
//                 ))}
//                 {[
//                   { id: "increasedThirst", label: "Increased Thirst", icon: <FaTint /> },
//                   { id: "frequentUrination", label: "Frequent Urination", icon: <FaToilet /> },
//                   { id: "unexplainedFatigue", label: "Unexplained Fatigue", icon: <FaTired /> },
//                   { id: "weightLoss", label: "Unexplained Weight Loss", icon: <FaWeight /> },
//                 ].map(({ id, label, icon }) => (
//                   <div key={id}>
//                     <label htmlFor={id} className="block text-sm font-medium text-gray-700 ">{label}</label>
//                     <div className="mt-1 relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         {icon}
//                       </div>
//                       <select
//                         name={id}
//                         id={id}
//                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//                         value={formData[id]}
//                         onChange={handleInputChange}>
//                         <option value="">Select an option</option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                       </select>
//                     </div>
//                   </div>
//                 ))}
//                 {error && <p className="text-red-500 text-sm">{error}</p>}

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                     Predict Diabetes Risk
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div className="md:w-1/2 bg-indigo-50 p-8 m-4">
//               <h2 className="text-2xl font-semibold mb-6">Risk Prediction Result</h2>
//               {prediction ? (
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold mb-4">Your Diabetes Risk:</h3>
//                   <p className={`text-3xl font-bold ${prediction === "Low"
//                     ? "text-green-600"
//                     : prediction === "Moderate"
//                       ? "text-yellow-500"
//                       : "text-red-600"
//                     }`}>
//                     {prediction}
//                     {prediction === "Low" ? (
//                       <FaCheckCircle className="inline ml-2 text-green-600" />
//                     ) : prediction === "Moderate" ? (
//                       <FaCheckCircle className="inline ml-2 text-yellow-500" />
//                     ) : (
//                       <FaTimesCircle className="inline ml-2 text-red-600" />
//                     )}
//                   </p>

//                   <p className="mt-4 text-gray-600 rounded-xl">
//                     This prediction is based on the information you provided. Please consult with a healthcare professional for a more accurate assessment.
//                   </p>
//                 </div>
//               ) : (
//                 <p className="text-gray-600">Enter your information and click the predict button to see your diabetes risk assessment.</p>
//               )}

//               <div className="mt-5">
//                 <h3 className="text-xl font-semibold mb-2">Diabetes Information</h3>
//                 <ul className="list-disc list-inside space-y-1 text-gray-600">
//                   <li>Diabetes is a chronic condition that affects how your body processes glucose (sugar).</li>
//                   <li>Common symptoms include increased thirst, frequent urination, and unexplained weight loss.</li>
//                   <li>Regular exercise and a balanced diet can help prevent or manage diabetes.</li>
//                   <li>Early detection and treatment can significantly improve outcomes for people with diabetes.</li>
//                 </ul>
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-4">Note</h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                   <li>The diagnosis of Diabetes requires a fasting plasma glucose of greater or = 126 mg/dL or a random / 2 hr post
//                     glucose value of greater or = 200 mg/dL on at least 2 occasions.</li>
//                 </ul>
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-4">Glucose Fasting</h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                   <li>This test is done by drawing blood after you have not eaten for at least 8 hours. A normal fasting glucose level is generally considered to be between <strong>70-99 mg/dL.</strong> </li>
//                 </ul>
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-4">Glucose Fasting 2hrs post</h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                   <li>This test involves drinking a sugary solution and then having your blood sugar level checked two hours later. A normal 2-hour post-load glucose level is typically <strong>below 140 mg/dL.</strong> </li>
//                 </ul>
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-4">HbA1c (Hemoglobin A1c)</h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                   <li><strong>Below- 5.7%: </strong><br /><li><strong>Normal:</strong> This indicates normal blood sugar levels. People with HbA1c below 5.7% are considered to have a low risk of diabetes.
//                   </li></li>
//                   <li><strong>5.7% to 6.4%: </strong><br /><li><strong>Prediabetes:</strong> This range indicates an increased risk of developing type 2 diabetes. It suggests impaired glucose tolerance and insulin resistance.</li></li>
//                   <li><strong>6.5% and above: </strong><br /><li><strong>Diabetes:</strong> An HbA1c level of 6.5% or higher, confirmed by multiple tests, indicates diabetes. This means blood sugar levels have been consistently high over the past few months.</li></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const WelcomePage = ({ setCurrentPage }) => (
//   <div className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 flex flex-col justify-center items-center p-4">
//     <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
//       <div className="md:flex">
//         <div className="md:flex-shrink-0">
//           <img
//             className="h-49 w-full object-cover md:w-50"
//             src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
//             alt="Diabetes Awareness"
//           />
//         </div>

//         <div className="p-8">
//           <h2 className="text-2xl font-bold mb-4 text-indigo-600">
//             Welcome to the Diabetes Awareness Portal
//           </h2>

//           <p className="text-gray-700">
//             This portal helps you assess your risk of diabetes based on various factors like age, weight, blood sugar level,HbA1c and family history. Enter your information to predict your risk level and learn more about diabetes prevention and management.
//           </p>

//           <button
//             className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-800"
//             onClick={() => setCurrentPage("form")}>
//             Get Started <BsArrowRight className="inline-block ml-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("welcome");

//   return currentPage === "welcome" ? (
//     <WelcomePage setCurrentPage={setCurrentPage} />
//   ) : (
//     <DiabetesPredictionPortal />
//   );
// };

// export default App;


// import React, { useState, useEffect } from "react";
// import { FaUser, FaWeight, FaRulerVertical, FaTint, FaToilet, FaTired, FaCheckCircle, FaTimesCircle, FaVial, FaMoon, FaSun } from "react-icons/fa";
// import { BsArrowRight } from "react-icons/bs";
// import { FaUserMd, FaHeartbeat, FaProcedures } from "react-icons/fa";

// const DiabetesPredictionPortal = ({ toggleDarkMode, isDarkMode }) => {
//   const [formData, setFormData] = useState({
//     age: "",
//     weight: "",
//     height: "",
//     glucoseFasting: "",
//     glucosePostFasting: "",
//     HbA1c: "",
//     familyHistory: "",
//     hypertension: "",
//     heartDisease: "",
//     increasedThirst: "",
//     frequentUrination: "",
//     unexplainedFatigue: "",
//     weightLoss: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState("");
//   const [history, setHistory] = useState([]); // New state for tracking history
//   const [recommendations, setRecommendations] = useState([]); // New state for recommendations

//   // Load history from localStorage on mount
//   useEffect(() => {
//     const savedHistory = JSON.parse(localStorage.getItem("diabetesHistory")) || [];
//     setHistory(savedHistory);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const calculateRisk = () => {
//     let riskScore = 0;

//     const age = parseInt(formData.age, 10);
//     const weight = parseFloat(formData.weight);
//     const height = parseFloat(formData.height);
//     const bmi = weight / ((height / 100) ** 2);
//     const glucoseFasting = parseFloat(formData.glucoseFasting);
//     const glucosePostFasting = parseFloat(formData.glucosePostFasting);
//     const HbA1c = parseFloat(formData.HbA1c);

//     if (age > 45) riskScore += 1;
//     if (age > 120) alert("Age must be under 120");

//     if (bmi > 25) riskScore += 1;

//     if (glucoseFasting < 70) riskScore += 3;
//     else if (glucoseFasting >= 70 && glucoseFasting <= 100) riskScore += 1;
//     else if (glucoseFasting >= 100 && glucoseFasting < 125) riskScore += 2;
//     else if (glucoseFasting > 125) riskScore += 3;

//     if (glucosePostFasting < 140) riskScore += 1;
//     else if (glucosePostFasting >= 140 && glucosePostFasting < 199) riskScore += 2;
//     else if (glucosePostFasting >= 199) riskScore += 3;

//     if (HbA1c < 5.7) riskScore += 2;
//     else if (HbA1c >= 5.7 && HbA1c <= 6.4) riskScore += 1;
//     else riskScore += 2;

//     if (formData.familyHistory === "yes") riskScore += 1;
//     if (formData.hypertension === "yes") riskScore += 1;
//     if (formData.heartDisease === "yes") riskScore += 1;
//     if (formData.increasedThirst === "yes") riskScore += 1;
//     if (formData.frequentUrination === "yes") riskScore += 1;
//     if (formData.unexplainedFatigue === "yes") riskScore += 1;
//     if (formData.weightLoss === "yes") riskScore += 1;

//     return riskScore;
//   };

//   const generateRecommendations = (risk) => {
//     if (risk === "Low") {
//       return ["Maintain a balanced diet.", "Exercise 3-5 times a week."];
//     } else if (risk === "Moderate") {
//       return ["Reduce sugar intake.", "Increase physical activity to 30 mins daily."];
//     } else {
//       return ["Consult a doctor ASAP.", "Limit carbs and monitor glucose daily."];
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.values(formData).some((value) => value === "")) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const riskScore = calculateRisk();
//     let risk = riskScore <= 3 ? "Low" : riskScore <= 5 ? "Moderate" : "High";

//     setPrediction(risk);
//     setRecommendations(generateRecommendations(risk));

//     // Save to history
//     const newEntry = { date: new Date().toLocaleString(), risk, formData };
//     const updatedHistory = [newEntry, ...history].slice(0, 5); // Keep last 5 entries
//     setHistory(updatedHistory);
//     localStorage.setItem("diabetesHistory", JSON.stringify(updatedHistory));

//     setError("");
//   };

//   return (
//     <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-bold text-center text-violet-600">Diabetes Risk Prediction Portal</h1>
//           <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
//             {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//           </button>
//         </div>
//         <div className={`bg-white shadow-xl rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
//           <div className="md:flex">
//             <div className="md:w-1/2 p-8">
//               <h2 className="text-2xl font-semibold mb-6">Enter Your Information</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Existing Form Inputs */}
//                 {[
//                   { id: "age", label: "Age", icon: <FaUser /> },
//                   { id: "weight", label: "Weight (kg)", icon: <FaWeight /> },
//                   { id: "height", label: "Height (cm)", icon: <FaRulerVertical /> },
//                   { id: "glucoseFasting", label: "Glucose Fasting (mg/dL)", icon: <FaTint /> },
//                   { id: "glucosePostFasting", label: "Glucose 2hrs PostLoad (mg/dL)", icon: <FaTint /> },
//                   { id: "HbA1c", label: "HbA1c (%)", icon: <FaVial /> },
//                 ].map(({ id, label, icon }) => (
//                   <div key={id}>
//                     <label htmlFor={id} className="block text-sm font-medium">{label}</label>
//                     <div className="mt-1 relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
//                       <input
//                         type="number"
//                         name={id}
//                         id={id}
//                         className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}
//                         placeholder={`Your ${label.toLowerCase()}`}
//                         value={formData[id]}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 ))}
//                 {[
//                   { id: "familyHistory", label: "Family History of Diabetes", icon: <FaUserMd /> },
//                   { id: "hypertension", label: "Hypertension", icon: <FaHeartbeat /> },
//                   { id: "heartDisease", label: "Heart Disease", icon: <FaProcedures /> },
//                   { id: "increasedThirst", label: "Increased Thirst", icon: <FaTint /> },
//                   { id: "frequentUrination", label: "Frequent Urination", icon: <FaToilet /> },
//                   { id: "unexplainedFatigue", label: "Unexplained Fatigue", icon: <FaTired /> },
//                   { id: "weightLoss", label: "Unexplained Weight Loss", icon: <FaWeight /> },
//                 ].map(({ id, label, icon }) => (
//                   <div key={id}>
//                     <label htmlFor={id} className="block text-sm font-medium">{label}</label>
//                     <div className="mt-1 relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
//                       <select
//                         name={id}
//                         id={id}
//                         className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}
//                         value={formData[id]}
//                         onChange={handleInputChange}
//                       >
//                         <option value="">Select an option</option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                       </select>
//                     </div>
//                   </div>
//                 ))}
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Predict Diabetes Risk
//                 </button>
//               </form>
//             </div>

//             <div className={`md:w-1/2 p-8 ${isDarkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
//               <h2 className="text-2xl font-semibold mb-6">Risk Prediction Result</h2>
//               {prediction ? (
//                 <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
//                   <h3 className="text-xl font-semibold mb-4">Your Diabetes Risk:</h3>
//                   <p
//                     className={`text-3xl font-bold ${prediction === "Low" ? "text-green-600" : prediction === "Moderate" ? "text-yellow-500" : "text-red-600"}`}
//                   >
//                     {prediction}
//                     {prediction === "Low" ? <FaCheckCircle className="inline ml-2" /> : prediction === "Moderate" ? <FaCheckCircle className="inline ml-2" /> : <FaTimesCircle className="inline ml-2" />}
//                   </p>
//                   <p className="mt-4 rounded-xl">
//                     This prediction is based on your input. Consult a healthcare professional for accuracy.
//                   </p>
//                   {/* Recommendations */}
//                   <h3 className="text-xl font-semibold mt-6 mb-2">Recommendations:</h3>
//                   <ul className="list-disc list-inside space-y-1">
//                     {recommendations.map((rec, index) => (
//                       <li key={index}>{rec}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <p>Enter your information and click predict to see your risk assessment.</p>
//               )}

//               {/* History Section */}
//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-4">Prediction History</h3>
//                 {history.length > 0 ? (
//                   <div className="overflow-x-auto">
//                     <table className={`w-full text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
//                       <thead>
//                         <tr>
//                           <th className="px-4 py-2">Date</th>
//                           <th className="px-4 py-2">Risk</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {history.map((entry, index) => (
//                           <tr key={index} className="border-t">
//                             <td className="px-4 py-2">{entry.date}</td>
//                             <td className={`px-4 py-2 ${entry.risk === "Low" ? "text-green-600" : entry.risk === "Moderate" ? "text-yellow-500" : "text-red-600"}`}>{entry.risk}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ) : (
//                   <p>No history available yet.</p>
//                 )}
//               </div>

//               {/* Existing Information Sections */}
//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-2">Diabetes Information</h3>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>Diabetes affects how your body processes glucose.</li>
//                   <li>Symptoms include thirst, urination, and weight loss.</li>
//                   <li>Exercise and diet can help manage it.</li>
//                   <li>Early detection improves outcomes.</li>
//                 </ul>
//               </div>
//               {/* Add other info sections as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const WelcomePage = ({ setCurrentPage }) => (
//   <div className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 flex flex-col justify-center items-center p-4">
//     <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
//       <div className="md:flex">
//         <div className="md:flex-shrink-0">
//           <img
//             className="h-48 w-full object-cover md:w-56"
//             src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
//             alt="Diabetes Awareness"
//           />
//         </div>
//         <div className="p-8">
//           <h2 className="text-2xl font-bold mb-4 text-indigo-600">Welcome to the Diabetes Awareness Portal</h2>
//           <p className="text-gray-700">
//             Assess your diabetes risk based on factors like age, weight, and blood sugar levels. Get started to predict your risk and learn more.
//           </p>
//           <button
//             className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-800"
//             onClick={() => setCurrentPage("form")}
//           >
//             Get Started <BsArrowRight className="inline-block ml-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("welcome");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return currentPage === "welcome" ? (
//     <WelcomePage setCurrentPage={setCurrentPage} />
//   ) : (
//     <DiabetesPredictionPortal toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { FaUser, FaWeight, FaRulerVertical, FaTint, FaToilet, FaTired, FaCheckCircle, FaTimesCircle, FaVial, FaMicrophone } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaUserMd, FaHeartbeat, FaProcedures } from "react-icons/fa";
import { Pie } from "react-chartjs-2"; // For pie chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Chart.js setup

ChartJS.register(ArcElement, Tooltip, Legend);

const DiabetesPredictionPortal = () => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    glucoseFasting: "",
    glucosePostFasting: "",
    HbA1c: "",
    familyHistory: "",
    hypertension: "",
    heartDisease: "",
    increasedThirst: "",
    frequentUrination: "",
    unexplainedFatigue: "",
    weightLoss: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");
  const [riskBreakdown, setRiskBreakdown] = useState(null); // For pie chart data
  const [listening, setListening] = useState(false); // For voice input

  const calculateRisk = () => {
    let riskScore = 0;
    const breakdown = { age: 0, bmi: 0, glucoseFasting: 0, glucosePostFasting: 0, HbA1c: 0, other: 0 };

    const age = parseInt(formData.age, 10);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const bmi = weight / ((height / 100) ** 2);
    const glucoseFasting = parseFloat(formData.glucoseFasting);
    const glucosePostFasting = parseFloat(formData.glucosePostFasting);
    const HbA1c = parseFloat(formData.HbA1c);

    if (age > 45) { riskScore += 1; breakdown.age = 1; }
    if (age > 120) alert("Age must be under 120");

    if (bmi > 25) { riskScore += 1; breakdown.bmi = 1; }

    if (glucoseFasting < 70) { riskScore += 3; breakdown.glucoseFasting = 3; }
    else if (glucoseFasting >= 70 && glucoseFasting <= 100) { riskScore += 1; breakdown.glucoseFasting = 1; }
    else if (glucoseFasting >= 100 && glucoseFasting < 125) { riskScore += 2; breakdown.glucoseFasting = 2; }
    else if (glucoseFasting > 125) { riskScore += 3; breakdown.glucoseFasting = 3; }

    if (glucosePostFasting < 140) { riskScore += 1; breakdown.glucosePostFasting = 1; }
    else if (glucosePostFasting >= 140 && glucosePostFasting < 199) { riskScore += 2; breakdown.glucosePostFasting = 2; }
    else if (glucosePostFasting >= 199) { riskScore += 3; breakdown.glucosePostFasting = 3; }

    if (HbA1c < 5.7) { riskScore += 2; breakdown.HbA1c = 2; }
    else if (HbA1c >= 5.7 && HbA1c <= 6.4) { riskScore += 1; breakdown.HbA1c = 1; }
    else { riskScore += 2; breakdown.HbA1c = 2; }

    if (formData.familyHistory === "yes") { riskScore += 1; breakdown.other += 1; }
    if (formData.hypertension === "yes") { riskScore += 1; breakdown.other += 1; }
    if (formData.heartDisease === "yes") { riskScore += 1; breakdown.other += 1; }
    if (formData.increasedThirst === "yes") { riskScore += 1; breakdown.other += 1; }
    if (formData.frequentUrination === "yes") { riskScore += 1; breakdown.other += 1; }
    if (formData.unexplainedFatigue === "yes") { riskScore += 1; breakdown.other += 1; }
    if (formData.weightLoss === "yes") { riskScore += 1; breakdown.other += 1; }

    setRiskBreakdown(breakdown);
    return riskScore;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      if (transcript.includes("age")) setFormData((prev) => ({ ...prev, age: parseInt(transcript.match(/\d+/)[0]) || "" }));
      if (transcript.includes("weight")) setFormData((prev) => ({ ...prev, weight: parseInt(transcript.match(/\d+/)[0]) || "" }));
      if (transcript.includes("height")) setFormData((prev) => ({ ...prev, height: parseInt(transcript.match(/\d+/)[0]) || "" }));
      if (transcript.includes("glucose fasting")) setFormData((prev) => ({ ...prev, glucoseFasting: parseInt(transcript.match(/\d+/)[0]) || "" }));
      if (transcript.includes("glucose post")) setFormData((prev) => ({ ...prev, glucosePostFasting: parseInt(transcript.match(/\d+/)[0]) || "" }));
      if (transcript.includes("hba1c")) setFormData((prev) => ({ ...prev, HbA1c: parseFloat(transcript.match(/\d+\.?\d*/)[0]) || "" }));
      if (transcript.includes("yes")) {
        const field = transcript.split("yes")[0].trim();
        if (field.includes("family")) setFormData((prev) => ({ ...prev, familyHistory: "yes" }));
        if (field.includes("hypertension")) setFormData((prev) => ({ ...prev, hypertension: "yes" }));
        if (field.includes("heart")) setFormData((prev) => ({ ...prev, heartDisease: "yes" }));
        if (field.includes("thirst")) setFormData((prev) => ({ ...prev, increasedThirst: "yes" }));
        if (field.includes("urination")) setFormData((prev) => ({ ...prev, frequentUrination: "yes" }));
        if (field.includes("fatigue")) setFormData((prev) => ({ ...prev, unexplainedFatigue: "yes" }));
        if (field.includes("weight loss")) setFormData((prev) => ({ ...prev, weightLoss: "yes" }));
      }
      if (transcript.includes("no")) {
        const field = transcript.split("no")[0].trim();
        if (field.includes("family")) setFormData((prev) => ({ ...prev, familyHistory: "no" }));
        if (field.includes("hypertension")) setFormData((prev) => ({ ...prev, hypertension: "no" }));
        if (field.includes("heart")) setFormData((prev) => ({ ...prev, heartDisease: "no" }));
        if (field.includes("thirst")) setFormData((prev) => ({ ...prev, increasedThirst: "no" }));
        if (field.includes("urination")) setFormData((prev) => ({ ...prev, frequentUrination: "no" }));
        if (field.includes("fatigue")) setFormData((prev) => ({ ...prev, unexplainedFatigue: "no" }));
        if (field.includes("weight loss")) setFormData((prev) => ({ ...prev, weightLoss: "no" }));
      }
    };

    recognition.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill in all fields.");
      return;
    }

    const riskScore = calculateRisk();
    const risk = riskScore <= 3 ? "Low" : riskScore <= 5 ? "Moderate" : "High";
    setPrediction(risk);
    setError("");
  };

  const pieData = riskBreakdown && {
    labels: ["Age", "BMI", "Glucose Fasting", "Glucose Post", "HbA1c", "Other Factors"],
    datasets: [{
      data: [riskBreakdown.age, riskBreakdown.bmi, riskBreakdown.glucoseFasting, riskBreakdown.glucosePostFasting, riskBreakdown.HbA1c, riskBreakdown.other],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
    }],
  };

  const heatmapData = formData.weight && formData.glucoseFasting && (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Risk Heatmap (BMI vs Glucose Fasting)</h3>
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-yellow-200 to-red-200"></div>
        <div
          className="absolute w-4 h-4 bg-black rounded-full"
          style={{
            left: `${(parseFloat(formData.glucoseFasting) / 200) * 100}%`,
            top: `${(parseFloat(formData.weight) / ((parseFloat(formData.height) / 100) ** 2) / 40) * 100}%`,
          }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">Green (Low Risk) → Red (High Risk)</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-violet-600 mb-12">Diabetes Risk Prediction Portal</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold mb-6">Enter Your Information</h2>
              <button
                onClick={handleVoiceInput}
                className={`mb-4 px-4 py-2 rounded-md ${listening ? "bg-red-600" : "bg-indigo-600"} text-white flex items-center`}
              >
                <FaMicrophone className="mr-2" /> {listening ? "Stop Listening" : "Use Voice Input"}
              </button>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "age", label: "Age", icon: <FaUser /> },
                  { id: "weight", label: "Weight (kg)", icon: <FaWeight /> },
                  { id: "height", label: "Height (cm)", icon: <FaRulerVertical /> },
                  { id: "glucoseFasting", label: "Glucose Fasting (mg/dL)", icon: <FaTint /> },
                  { id: "glucosePostFasting", label: "Glucose 2hrs PostLoad (mg/dL)", icon: <FaTint /> },
                  { id: "HbA1c", label: "HbA1c (%)", icon: <FaVial /> },
                ].map(({ id, label, icon }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
                      <input
                        type="number"
                        name={id}
                        id={id}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder={`Your ${label.toLowerCase()}`}
                        value={formData[id]}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ))}
                {[
                  { id: "familyHistory", label: "Family History of Diabetes", icon: <FaUserMd /> },
                  { id: "hypertension", label: "Hypertension", icon: <FaHeartbeat /> },
                  { id: "heartDisease", label: "Heart Disease", icon: <FaProcedures /> },
                  { id: "increasedThirst", label: "Increased Thirst", icon: <FaTint /> },
                  { id: "frequentUrination", label: "Frequent Urination", icon: <FaToilet /> },
                  { id: "unexplainedFatigue", label: "Unexplained Fatigue", icon: <FaTired /> },
                  { id: "weightLoss", label: "Unexplained Weight Loss", icon: <FaWeight /> },
                ].map(({ id, label, icon }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
                      <select
                        name={id}
                        id={id}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        value={formData[id]}
                        onChange={handleInputChange}
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                ))}
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Predict Diabetes Risk
                </button>
              </form>
            </div>

            <div className="md:w-1/2 bg-indigo-50 p-8 m-4">
              <h2 className="text-2xl font-semibold mb-6">Risk Prediction Result</h2>
              {prediction ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Your Diabetes Risk:</h3>
                  <p className={`text-3xl font-bold ${prediction === "Low" ? "text-green-600" : prediction === "Moderate" ? "text-yellow-500" : "text-red-600"}`}>
                    {prediction}
                    {prediction === "Low" ? <FaCheckCircle className="inline ml-2" /> : prediction === "Moderate" ? <FaCheckCircle className="inline ml-2" /> : <FaTimesCircle className="inline ml-2" />}
                  </p>
                  <p className="mt-4 text-gray-600">Consult a healthcare professional for a detailed assessment.</p>

                  {/* Risk Factor Breakdown */}
                  {pieData && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-4">Risk Factor Breakdown</h3>
                      <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">Enter your information to see your risk assessment.</p>
              )}

              {/* Risk Heatmap */}
              {heatmapData}

              {/* Existing Info */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Diabetes Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Diabetes affects glucose processing.</li>
                  <li>Symptoms: thirst, urination, fatigue.</li>
                  <li>Prevention: diet and exercise.</li>
                  <li>Early detection improves outcomes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WelcomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 flex flex-col justify-center items-center p-4">
    <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-56"
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Diabetes Awareness"
          />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Welcome to the Diabetes Awareness Portal</h2>
          <p className="text-gray-700">
            Assess your diabetes risk with advanced tools like voice input and risk visualization. Get started now!
          </p>
          <button
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-800"
            onClick={() => setCurrentPage("form")}
          >
            Get Started <BsArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  return currentPage === "welcome" ? (
    <WelcomePage setCurrentPage={setCurrentPage} />
  ) : (
    <DiabetesPredictionPortal />
  );
};

export default App;
import React, { useState } from "react";
import { FaUser, FaWeight, FaRulerVertical, FaTint, FaToilet, FaTired, FaCheckCircle, FaTimesCircle, FaVial } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaUserMd, FaHeartbeat, FaProcedures } from "react-icons/fa";


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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const calculateRisk = () => {

    let riskScore = 0;

    const age = parseInt(formData.age, 10);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const bmi = weight / ((height / 100) ** 2);
    const glucoseFasting = parseFloat(formData.glucoseFasting);
    const glucosePostFasting = parseFloat(formData.glucosePostFasting);
    const HbA1c = parseFloat(formData.HbA1c);


    if (age > 45) {
      riskScore += 1;
    }
    if (age > 120) {
      alert("age must be under 120")
    }

    if (bmi > 25) riskScore += 1;

    if (glucoseFasting < 70) {
      riskScore += 3;
    } else if (glucoseFasting >= 70 && glucoseFasting <= 100) {
      riskScore += 1;
    } else if (glucoseFasting >= 100 && glucoseFasting < 125) {
      riskScore += 2;
    } else if (glucoseFasting > 125) {
      riskScore += 3;
    }

    if (glucosePostFasting < 140) {
      riskScore += 1;
    } else if (glucosePostFasting >= 140 && glucosePostFasting < 199) {
      riskScore += 2;
    } else if (glucosePostFasting >= 199) {
      riskScore += 3;
    }

    if (HbA1c < 5.7) {
      riskScore += 2;
    } else if (HbA1c >= 5.7 && HbA1c <= 6.4) {
      riskScore += 1;
    } else {
      riskScore += 2;
    }

    if (formData.familyHistory === "yes") riskScore += 1;
    if (formData.hypertension === "yes") riskScore += 1;
    if (formData.heartDisease === "yes") riskScore += 1;

    if (formData.increasedThirst === "yes") riskScore += 1;
    if (formData.frequentUrination === "yes") riskScore += 1;
    if (formData.unexplainedFatigue === "yes") riskScore += 1;
    if (formData.weightLoss === "yes") riskScore += 1;

    return riskScore;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      // setError("Please fill in all fields.");
      alert("Please fill in all fields.")
      return;
    }

    const riskScore = calculateRisk();
    let risk;
    if (riskScore <= 3) {
      risk = "Low";
    } else if (riskScore <= 5) {
      risk = "Moderate";
    } else {
      risk = "High";
    }
    setPrediction(risk);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-violet-600 mb-12">Diabetes risk Prediction Portal</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold mb-6">Enter Your Information</h2>

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
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                      </div>
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
                ].map(({ id, label, icon }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                      </div>
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
                {[
                  { id: "increasedThirst", label: "Increased Thirst", icon: <FaTint /> },
                  { id: "frequentUrination", label: "Frequent Urination", icon: <FaToilet /> },
                  { id: "unexplainedFatigue", label: "Unexplained Fatigue", icon: <FaTired /> },
                  { id: "weightLoss", label: "Unexplained Weight Loss", icon: <FaWeight /> },
                ].map(({ id, label, icon }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 ">{label}</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                      </div>
                      <select
                        name={id}
                        id={id}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        value={formData[id]}
                        onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                ))}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Predict Diabetes Risk
                  </button>
                </div>
              </form>
            </div>

            <div className="md:w-1/2 bg-indigo-50 p-8 m-4">
              <h2 className="text-2xl font-semibold mb-6">Risk Prediction Result</h2>
              {prediction ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Your Diabetes Risk:</h3>
                  <p className={`text-3xl font-bold ${prediction === "Low"
                    ? "text-green-600"
                    : prediction === "Moderate"
                      ? "text-yellow-500"
                      : "text-red-600"
                    }`}>
                    {prediction}
                    {prediction === "Low" ? (
                      <FaCheckCircle className="inline ml-2 text-green-600" />
                    ) : prediction === "Moderate" ? (
                      <FaCheckCircle className="inline ml-2 text-yellow-500" />
                    ) : (
                      <FaTimesCircle className="inline ml-2 text-red-600" />
                    )}
                  </p>

                  <p className="mt-4 text-gray-600 rounded-xl">
                    This prediction is based on the information you provided. Please consult with a healthcare professional for a more accurate assessment.
                  </p>
                </div>
              ) : (
                <p className="text-gray-600">Enter your information and click the predict button to see your diabetes risk assessment.</p>
              )}

              <div className="mt-5">
                <h3 className="text-xl font-semibold mb-2">Diabetes Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Diabetes is a chronic condition that affects how your body processes glucose (sugar).</li>
                  <li>Common symptoms include increased thirst, frequent urination, and unexplained weight loss.</li>
                  <li>Regular exercise and a balanced diet can help prevent or manage diabetes.</li>
                  <li>Early detection and treatment can significantly improve outcomes for people with diabetes.</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Note</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>The diagnosis of Diabetes requires a fasting plasma glucose of greater or = 126 mg/dL or a random / 2 hr post
                    glucose value of greater or = 200 mg/dL on at least 2 occasions.</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Glucose Fasting</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>This test is done by drawing blood after you have not eaten for at least 8 hours. A normal fasting glucose level is generally considered to be between <strong>70-99 mg/dL.</strong> </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Glucose Fasting 2hrs post</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>This test involves drinking a sugary solution and then having your blood sugar level checked two hours later. A normal 2-hour post-load glucose level is typically <strong>below 140 mg/dL.</strong> </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">HbA1c (Hemoglobin A1c)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Below- 5.7%: </strong><br /><li><strong>Normal:</strong> This indicates normal blood sugar levels. People with HbA1c below 5.7% are considered to have a low risk of diabetes.
                  </li></li>
                  <li><strong>5.7% to 6.4%: </strong><br /><li><strong>Prediabetes:</strong> This range indicates an increased risk of developing type 2 diabetes. It suggests impaired glucose tolerance and insulin resistance.</li></li>
                  <li><strong>6.5% and above: </strong><br /><li><strong>Diabetes:</strong> An HbA1c level of 6.5% or higher, confirmed by multiple tests, indicates diabetes. This means blood sugar levels have been consistently high over the past few months.</li></li>
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
            className="h-49 w-full object-cover md:w-50"
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="Diabetes Awareness"
          />
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            Welcome to the Diabetes Awareness Portal
          </h2>

          <p className="text-gray-700">
            This portal helps you assess your risk of diabetes based on various factors like age, weight, blood sugar level,HbA1c and family history. Enter your information to predict your risk level and learn more about diabetes prevention and management.
          </p>

          <button
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-800"
            onClick={() => setCurrentPage("form")}>
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



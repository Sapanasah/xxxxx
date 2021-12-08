import React from "react";

import "./style.css";

import MedicalTreatment from './MedicalTreatment';

import MedicalTreatmentPanel from './MedicalTreatmentPanel';

export default function App() {
  return (

    <div>
      <MedicalTreatment treatID = "203" treatCourseID = "21436534"
      type = "long term" category= "depression" name = "Manpreet" startDate={Date()}></MedicalTreatment >
      <MedicalTreatmentPanel/>



      </div>
  );
}
 

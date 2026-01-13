import React from "react";

import type { FormData } from "./MultiStepForm";

interface Step1Props {
  nextStep: () => void;
  handleChange: (
    field: keyof FormData
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: FormData;
}


const Step1: React.FC<Step1Props> = ({ nextStep, handleChange, values }) => {
  const continueStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (values.name && values.username) {
      nextStep();
    } else {
      alert("All fields required");
    }
  };

  return (
    <div>
      <h2>User Info</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={handleChange("name")}
        value={values.name}
      />

      <input
        type="text"
        placeholder="Username..."
        onChange={handleChange("username")}
        value={values.username}
      />

        <select value={values.role} onChange={handleChange("role")} name="role" id="role">
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
        </select>

      <button onClick={continueStep}>Next</button>
    </div>
  );
};

export default Step1;

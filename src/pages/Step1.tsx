import React from "react";
import { validEmail, validPassword, name } from "../reusable/regex";

import type { FormData } from "./MultiStepForm";
import { notify } from "../reusable/Notification";

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
      if (name.test(values.name)) {
                if (values.surname && name.test(values.surname)) {
                  
                
      nextStep();
                }else{
                  values.surname = "";
                  nextStep();
                }
        
      }else{
        notify("The name can only contain letters and spaces", "error")
      }

    } else {
      notify("All fields required", "error");
    }
  };

 return (
<div className="bg-salviaGreen h-screen overflow-hidden flex items-center justify-center">
    {/* Step indicator */}
<div className="absolute top-1/2 -translate-y-72 flex items-center gap-4">
  
  {/* Step 1 */}
  <div className="
    w-12 h-12
    rounded-full
    bg-salviaGreen
    text-brokenWhite
    flex items-center justify-center
    font-bold
    shadow-[0_0_20px_rgba(126,144,118,0.8)]
    ring-4 ring-brokenWhite/50
  ">
    1
  </div>

  {/* Line */}
  <div className="w-10 h-[2px] bg-brokenWhite/50"></div>

  {/* Step 2 */}
  <div className="
    w-10 h-10
    rounded-full
    bg-brokenWhite/40
    text-gray-700
    flex items-center justify-center
    font-semibold
    backdrop-blur-lg
  ">
    2
  </div>

  {/* Line */}
  <div className="w-10 h-[2px] bg-brokenWhite/30"></div>

  {/* Step 3 */}
  <div className="
    w-10 h-10
    rounded-full
    bg-brokenWhite/30
    text-gray-700
    flex items-center justify-center
    font-semibold
    backdrop-blur-lg
  ">
    3
  </div>

</div>

    <form
      className="
        backdrop-blur-lg bg-brokenWhite/70
        p-6 rounded-xl shadow-lg
        w-96 flex flex-col gap-4
      "
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        User Info
      </h2>

      {/* Name */}
      <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange("name")}
          value={values.name}
          className="
            block w-full rounded
            py-1.5 px-3
            bg-transparent
            border border-white/20
            placeholder-gray-400
            text-gray-800
            focus:border-white/40
            focus:outline-none
          "
        />
      </div>
      {/* Surname */}

   <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Surname
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange("surname")}
          value={values.surname}
          className="
            block w-full rounded
            py-1.5 px-3
            bg-transparent
            border border-white/20
            placeholder-gray-400
            text-gray-800
            focus:border-white/40
            focus:outline-none
          "
        />
      </div>

      {/* Username */}
      <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Username <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={handleChange("username")}
          value={values.username}
          className="
            block w-full rounded
            py-1.5 px-3
            bg-transparent
            border border-white/20
            placeholder-gray-400
            text-gray-800
            focus:border-white/40
            focus:outline-none
          "
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Role
        </label>
        <select
          value={values.role}
          onChange={handleChange("role")}
          name="role"
          id="role"
          className="
            block w-full rounded
            py-1.5 px-3
            bg-transparent
            border border-white/20
            text-gray-800
            focus:border-white/40
            focus:outline-none
          "
        >
          <option value="STUDENT">Student</option>
          <option value="MENTOR">Teacher</option>
        </select>
      </div>

      {/* Button */}
      <button
        onClick={continueStep}
        className="
          w-full mt-4
          inline-flex items-center justify-center
          px-6 py-2
          backdrop-blur-2xl bg-white/20
          text-gray-800
          rounded-lg
          transition-all duration-300
          hover:bg-salviaGreen
          hover:text-brokenWhite
        "
      >
        Next
      </button>
    </form>
  </div>
);

};

export default Step1;

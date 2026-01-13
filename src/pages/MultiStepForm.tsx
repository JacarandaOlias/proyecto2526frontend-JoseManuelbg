import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export interface FormData {
  name: string;
  email: string;
  role: string;
  username: string;
  password: string;
  subjects: number[];
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "STUDENT",
    username: "",
    password: "",
    subjects: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // handleChange genérico
  const handleChange =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const value =
        e.target instanceof HTMLSelectElement && e.target.multiple
          ? Array.from(e.target.selectedOptions, (option) => option.value)
          : e.target.value;

      setFormData({ ...formData, [field]: value });
    };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          values={formData}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    default:
      
  }
};

export default MultiStepForm;

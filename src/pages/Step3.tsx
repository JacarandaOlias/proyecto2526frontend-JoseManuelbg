import React from "react";
import type { FormData } from "./MultiStepForm";


interface StepProps {
  prevStep: () => void;
  handleChange: (
    field: keyof FormData
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  values: FormData;
}

const Step3: React.FC<StepProps> = ({ prevStep, handleChange, values }) => {
  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const payload = {
    name: values.name,
    email: values.email,
    role: values.role,
    username: values.username,
    password: values.password,
    subjects: values.subjects
  };

  console.log(payload);
  try {
    const res = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to save user");

    const data = await res.text();
    console.log("User created:", data);

  } catch (error) {
    console.error(error);
    alert("Error al crear el usuario");
  }
};


  console.log(FormData);
  return (
    <div>
      <h2>Cuenta</h2>
      <input
        type="email"
        placeholder="Correo"
        value={values.email}
        onChange={handleChange("email")}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={values.password}
        onChange={handleChange("password")}
      />
      <div>
        <button onClick={prevStep}>Atrás</button>
        <button onClick={submitForm}>Enviar</button>
      </div>
    </div>
  );
};

export default Step3;

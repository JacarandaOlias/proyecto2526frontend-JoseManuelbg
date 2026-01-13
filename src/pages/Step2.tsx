import React, { useEffect, useState } from "react";
import type { FormData } from "./MultiStepForm";
import type Subject from "../models/Subject";
import type { Level } from "../models/Subject";

interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
  values: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Step2: React.FC<StepProps> = ({
  nextStep,
  prevStep,
  setFormData,
  values,
}) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  // Traer materias desde la API
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await fetch("http://localhost:8080/subjects");
        if (!res.ok) throw new Error("Error fetching subjects");

        const data: Subject[] = await res.json();
        setSubjects(data);
      } catch (error) {
        console.error("Error cargando materias:", error);
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const continueStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  //Funcion para separar por nivel academico

  const subjectsByLevel: Record<Level, Subject[]> = {
PRIMARY: [],
  SECONDARY: [],
  HIGH_SCHOOL: [],
  VOCATIONAL: [],
  UNIVERSITY: [],
  
  
  };

  subjects.forEach((subject) => {
  subjectsByLevel[subject.level].push(subject);
});


  return (
    <div>
      <h2>Elige tus materias</h2>
      {(Object.keys(subjectsByLevel) as Level[]).map((level) => (
  <div key={level}>
    <h3>{level}</h3>

    <ul>
      {subjectsByLevel[level].map((subject) => (
        <li key={subject.id}>
          <label>
            {subject.name}
            <input
              type="checkbox"
              checked={values.subjects.includes(subject.id)}
              onChange={() => {
                if (values.subjects.includes(subject.id)) {
                  setFormData({
                    ...values,
                    subjects: values.subjects.filter(
                      (id) => id !== subject.id
                    ),
                  });
                } else {
                  setFormData({
                    ...values,
                    subjects: [...values.subjects, subject.id],
                  });
                }
              }}
            />
          </label>
        </li>
      ))}
    </ul>
  </div>
))}


      <div>
        <button onClick={prevStep}>Atrás</button>
        <button onClick={nextStep}>Siguiente</button>
      </div>
    </div>
  );
};

export default Step2;

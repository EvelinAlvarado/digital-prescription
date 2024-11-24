"use client";

import { Prescription } from "@/Types/user";
import { createContext, ReactNode, useState } from "react";

interface PrescriptionContextProps {
  prescriptions: Prescription[];
  addPrescription: (prescription: Prescription) => void;
  editPrescription: (id: string, updatedData: Partial<Prescription>) => void;
  deletePrescription: (id: string) => void;
  getPrescription: (id: string) => Prescription | undefined;
}

export const PrescriptionContext = createContext<
  PrescriptionContextProps | undefined
>(undefined);

export const PrescriptionProvider = ({ children }: { children: ReactNode }) => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  const addPrescription = (prescription: Prescription) => {
    setPrescriptions((prev) => [...prev, prescription]);
  };

  const editPrescription = (id: string, updatedData: Partial<Prescription>) => {
    setPrescriptions((prev) =>
      prev.map((prescription) =>
        prescription.id === id
          ? { ...prescription, ...updatedData }
          : prescription
      )
    );
  };

  const deletePrescription = (id: string) => {
    setPrescriptions((prev) =>
      prev.filter((prescription) => prescription.id !== id)
    );
  };

  const getPrescription = (id: string): Prescription | undefined => {
    return prescriptions.find((prescription) => prescription.id === id);
  };

  return (
    <PrescriptionContext.Provider
      value={{
        prescriptions,
        addPrescription,
        editPrescription,
        deletePrescription,
        getPrescription,
      }}
    >
      {children}
    </PrescriptionContext.Provider>
  );
};

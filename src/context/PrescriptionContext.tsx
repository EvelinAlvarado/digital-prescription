"use client";

import { Prescription } from "@/Types/user";
import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

interface PrescriptionContextType {
  prescriptions: Prescription[];
  getPrescription: (id: string) => Prescription | undefined;
  userRole: string | null;
}

export const PrescriptionContext = createContext<
  PrescriptionContextType | undefined
>(undefined);

export const PrescriptionProvider = ({ children }: { children: ReactNode }) => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([
    // Exemplo
    {
      id: "1",
      code: "ABC123",
      name_drug: "Paracetamol",
      quantity: 10,
      instructions: "Tomar cada 8 horas",
      status: "Pendiente",
      created_at: new Date("2024-11-01"),
      expires_at: new Date("2024-12-01"),
      type: 1,
    },
    {
      id: "2",
      code: "DEF456",
      name_drug: "Ibuprofeno",
      quantity: 5,
      instructions: "Tomar después de las comidas",
      status: "Usada",
      created_at: new Date("2024-11-02"),
      expires_at: new Date("2024-12-02"),
      type: 2,
    },
  ]);

  const { user } = useContext(AuthContext) ?? { user: null };
  const userRole = user?.role || null;

  const getPrescription = (id: string): Prescription | undefined => {
    return prescriptions.find(
      (prescription) =>
        prescription.code.trim().toLowerCase() === id.trim().toLowerCase()
    );
  };

  return (
    <PrescriptionContext.Provider
      value={{ prescriptions, getPrescription, userRole }}
    >
      {children}
    </PrescriptionContext.Provider>
  );
};

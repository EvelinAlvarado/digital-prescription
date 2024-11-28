"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePrescriptions } from "@/hooks/usePrescription";
import { PrescriptionCard } from "@/components/PrescriptionCard";
import { Prescription } from "@/Types/user";

export default function PrescriptionSearch() {
  const [searchCode, setSearchCode] = useState<string>("");
  const [prescription, setPrescription] = useState<Prescription | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const { prescriptions } = usePrescriptions();

  useEffect(() => {
    //empty
    if (searchCode.trim() === "") {
      setPrescription(null);
      setMessage(null);
      return;
    }

    const foundPrescription = prescriptions.find(
      (p) => p.code.toLowerCase() === searchCode.toLowerCase()
    );

    if (foundPrescription) {
      setPrescription(foundPrescription);
      setMessage(null);
    } else {
      setPrescription(null);
      setMessage(`Nenhuma receita encontrada para o código ${searchCode}.`);
    }
  }, [searchCode, prescriptions]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full">
      <div className="flex justify-between items-center gap-10">
        <div>
          <h2 className="text-4xl">Buscar Receita Médica</h2>
          <p className="text-base text-my-dark mb-4">
            Insira o código da receita médica para localizar os detalhes
            rapidamente.
          </p>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="search"
            placeholder="Ingrese o código"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <Button type="button" /* onClick={handleSearch} */>Consultar</Button>
        </div>
      </div>
      {/* Rendering PrescriptionCard if founded or show a message */}
      {prescription ? (
        <PrescriptionCard prescription={prescription} />
      ) : (
        message && <p className="text-muted-foreground mt-4">{message}</p>
      )}
    </section>
  );
}

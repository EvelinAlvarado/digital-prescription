import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function PrescriptionSearch() {
  return (
    <section className="flex justify-between items-center min-h-full">
      <div>
        <h2 className="text-4xl">Buscar Receita Médica</h2>
        <p className="text-base text-my-dark mb-4">
          Insira o código da receita médica para localizar os detalhes
          rapidamente.
        </p>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Ingrese o código" />
        <Button type="submit">Consultar</Button>
      </div>
    </section>
  );
}

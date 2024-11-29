import { DataTableList } from "@/components/DataTableList";
import { columnsTable } from "@/components/HeaderColumnsTable";
import { usePrescriptions } from "@/hooks/usePrescription";
import React from "react";

export default function MyPrescriptions() {
  const { prescriptions } = usePrescriptions();
  return (
    <section className="flex flex-col justify-start items-start min-h-full">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Minhas Receitas Médicas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Consulte aqui todas as suas receitas médicas, com detalhes como
          status, validade e instruções de uso. Acompanhe suas prescrições de
          forma simples e organizada.
        </p>
      </div>
      <DataTableList
        columns={columnsTable}
        data={prescriptions}
        paginationAndInput
      />
    </section>
  );
}

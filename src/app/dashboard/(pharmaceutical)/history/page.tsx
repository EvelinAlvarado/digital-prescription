"use client";
import { DataTableList } from "@/components/DataTableList";
// import { data } from "@/constants/temporaryData";
import React from "react";
import { columnsTable } from "@/components/HeaderColumnsTable";
import { usePrescriptions } from "@/hooks/usePrescription";

export default function History() {
  const { prescriptions } = usePrescriptions();
  console.log("data desde page:", prescriptions);

  return (
    <section className="flex flex-col mx-auto min-h-full">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Histórico de Receitas Médicas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Aqui você pode consultar o histórico completo de receitas médicas,
          verificando os detalhes e status de cada prescrição.
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

"use client";

import { DataTableList } from "@/components/DataTableList";
import { columnsTable } from "@/components/HeaderColumnsTable";
import { usePrescriptions } from "@/hooks/usePrescription";
import React from "react";

export default function PrescriptionRecord() {
  const { prescriptions } = usePrescriptions();
  console.log("data desde page:", prescriptions);
  return (
    <section className="flex flex-col justify-start items-start min-h-full mx-auto">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Receitas Prescritas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Visualize todas as receitas médicas que você prescreveu. Confira os
          detalhes, status e datas de cada prescrição em um formato organizado.
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

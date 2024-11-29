"use client";

import React from "react";
// import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "@/components/DashboardHeader";
// import AnalysisGraph from "@/components/AnalysisGraph";
import { usePrescriptions } from "@/hooks/usePrescription";
import { DataTableList } from "@/components/DataTableList";
import { columnsTable } from "@/components/HeaderColumnsTable";

export default function DoctorDashboard() {
  // const { user } = useAuth();
  const { prescriptions } = usePrescriptions();

  const user = {
    role: "doctor", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
  };

  const userName = user ? `Dr. ${user.name}` : "Usuário";

  const limitedData = prescriptions.slice(0, 3);
  return (
    <section className=" h-full">
      <DashboardHeader
        userName={userName}
        description="Aqui você pode gerenciar suas prescrições médicas e acessar informações relevantes para o acompanhamento de seus pacientes."
      />
      {/* conteudo */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-my-light"></div>
        <div className="aspect-video rounded-xl bg-my-light"></div>
        <div className="aspect-video rounded-xl bg-my-my-light p-2">
          {/* <AnalysisGraph /> */}
        </div>
        <div></div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min p-2">
        <DataTableList
          data={limitedData}
          columns={columnsTable}
          paginationAndInput={false}
        />
      </div>
    </section>
  );
}

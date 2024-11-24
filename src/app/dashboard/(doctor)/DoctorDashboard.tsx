import React from "react";
import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "@/components/DashboardHeader";

export default function DoctorDashboard() {
  const { user } = useAuth();

  const userName = user ? `Dr. ${user.name}` : "Usuário";
  return (
    <section>
      <DashboardHeader
        userName={userName}
        description="Aqui você pode gerenciar suas prescrições médicas e acessar informações relevantes para o acompanhamento de seus pacientes."
      />
      {/* conteudo */}
    </section>
  );
}

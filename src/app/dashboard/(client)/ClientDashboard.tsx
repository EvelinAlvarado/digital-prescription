import React from "react";
import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "@/components/DashboardHeader";

export default function ClientDashboard() {
  const { user } = useAuth();

  const userName = user ? `Dr. ${user.name}` : "Usuário";
  return (
    <section>
      <DashboardHeader
        userName={userName}
        description="Aqui você pode acompanhar suas receitas médicas, verificar suas
    consultas e acessar informações importantes sobre sua saúde."
      />
      {/* conteudo*/}
    </section>
  );
}

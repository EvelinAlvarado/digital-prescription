// import { useAuth } from "@/hooks/useAuth";
import React from "react";
import ClientDashboard from "./(client)/ClientDashboard";
import DoctorDashboard from "./(doctor)/DoctorDashboard";
import PharmaceuticalDashboard from "./(pharmaceutical)/PharmaceuticalDashboard";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  // const user = {
  //   role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
  //   name: "Carlos Silva",
  // };

  if (!user) {
    return <p>Carregando...</p>;
  }

  switch (user.role.toLowerCase()) {
    case "client":
      return <ClientDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    case "pharmaceutical":
      return <PharmaceuticalDashboard />;
    default:
      return <p>Role não reconhecido</p>;
  }
  // return (
  //   <>
  //     <h2 className="text-4xl font-semibold text-primary mb-2">
  //       Bem-vindo, [user.name]
  //     </h2>
  //     <p className="text-base text-my-dark mb-4">
  //       Aqui você pode acompanhar suas receitas médicas, verificar suas
  //       consultas e acessar informações importantes sobre sua saúde.
  //     </p>
  //     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
  //       <div className="aspect-video rounded-xl bg-muted/50" />
  //       <div className="aspect-video rounded-xl bg-muted/50" />
  //       <div className="aspect-video rounded-xl bg-muted/50" />
  //       <div></div>
  //     </div>
  //     <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
  //   </>
  // );
}

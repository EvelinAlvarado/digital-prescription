"use client";

import { CalendarDemo } from "@/components/CalendarDemo";
import ChartPie from "@/components/ChartPie";
import DashboardHeader from "@/components/DashboardHeader";
import { DataTableList } from "@/components/DataTableList";
import { columnsTable } from "@/components/HeaderColumnsTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePrescriptions } from "@/hooks/usePrescription";
import Image from "next/image";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
// import { useAuth } from "@/hooks/useAuth";

export default function PharmaceuticalDashboard() {
  // const { user } = useAuth();
  const { prescriptions } = usePrescriptions();

  const user = {
    role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
    name: "Laura Carvalho",
  };
  const userName = user?.name || "Usuário";
  const limitedData = prescriptions.slice(-3);
  return (
    <section className="h-full max-w-[1440px] mx-auto">
      <DashboardHeader
        userName={userName}
        description="Aqui você pode consultar receitas médicas e gerenciar o histórico de medicamentos dispensados."
      />
      {/* conteudo */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-6">
        {/* <div className="aspect-video rounded-xl bg-my-light"></div> */}
        <article className=" col-span-2 aspect-video rounded-xl flex items-end relative">
          <Image
            src="/images/pharmacist.png"
            alt="Imagem de um Farmacéutico"
            width={450}
            height={900}
            className="absolute right-0 mr-4"
          />
          <Card className="bg-gradient-to-r from-my-secondary to-my-primary pt-4 pb-6 w-full rounded-xl">
            <CardHeader>
              <CardTitle>Status das visitas</CardTitle>
              {/* <CardDescription className="text-6xl pt-8 pb-6 text-baseDark">
                40
              </CardDescription> */}
            </CardHeader>
            <CardContent className="gap-0 pb-1 ">
              <div className=" bg-white/50 p-1 rounded-xl h-full w-52">
                <ChartPie />
                {/* <p className="font-semibold">Novos Pacientes</p>
                <div className="flex justify-between gap-10 mt-4">
                  <span className="text-3xl">15</span>
                  <div className="bg-[#DFFDDD] text-my-done flex rounded-md items-center my-1 py-1 px-2 gap-2">
                    37.5% <FiTrendingUp size={20} />
                  </div>
                </div> */}
              </div>
              {/* <div className="flex flex-col bg-white/50 p-2 rounded-xl">
                <p className="font-semibold">Antigos Pacientes</p>
                <div className="flex justify-between gap-10 mt-4">
                  <span className="text-3xl">25</span>
                  <div className="bg-[#FBC3C3] text-my-no-started flex rounded-md items-center my-1 py-1 px-2 gap-2">
                    62.5% <FiTrendingDown size={20} />
                  </div>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </article>

        <Card className="flex flex-col p-4 aspect-auto rounded-xl mx-auto gap-2">
          <span className="flex items-center gap-2">
            <GoDotFill fill="#DFFDDD" /> Destaque do Dia
          </span>
          <CardTitle className="text-lg hover:underline cursor-pointer">
            Novas Diretrizes para o Uso Racional de Medicamentos na Farmácia
            Comunitária
          </CardTitle>
          <CardContent className="bg-news-pharmacy bg-cover h-full rounded-xl"></CardContent>
        </Card>
        <Card className="flex flex-col p-4 aspect-auto rounded-xl mx-auto gap-2">
          <h4>Calendar</h4>
          <div className="my-auto">
            <CalendarDemo />
          </div>
        </Card>
      </div>
      <Card className="min-h-[100vh] flex-1 rounded-xl md:min-h-min p-4">
        <CardTitle className="pb-4">Ultimas receitas</CardTitle>
        <DataTableList
          data={limitedData}
          columns={columnsTable}
          paginationAndInput={false}
        />
      </Card>
    </section>
  );
}

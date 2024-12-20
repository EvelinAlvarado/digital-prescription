"use client"; //tirar depois
import { Prescription } from "@/Types/user";
import { DataTableList } from "@/components/DataTableList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columnsCardPrescription } from "./HeaderColumnsTable";
// import { DialogTitle } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { usePrescriptions } from "@/hooks/usePrescription";

interface PrescriptionCardProps {
  prescription: Prescription;
  // isPharmaceutical?: boolean;
}

export function PrescriptionCard({ prescription }: PrescriptionCardProps) {
  const [isPharmaceutical, setIsPharmaceutical] = useState(false);
  const { updatePrescriptionStatus } = usePrescriptions();
  // const{user}=useAuth()

  const user = {
    role: "PHARMACEUTICAL", // Dynamic (PHARMACEUTICAL, DOCTOR, client)
    name: "Carlos Silva",
  };
  const role: boolean = user?.role.toUpperCase() === "PHARMACEUTICAL";
  useEffect(() => {
    setIsPharmaceutical(role);
  }, [role]);

  console.log("prescription desde prescriptionCArd:", prescription);

  const handleOnClick = async () => {
    try {
      if (prescription.status === "PENDIENTE") {
        await updatePrescriptionStatus(prescription.id, "USADA");
      }
    } catch (error) {
      // Handle potential errors ( show a toast notification????)
      console.error("Failed to update prescription status", error);
    }
  };

  return (
    <Card className="sm:max-w-[60rem]">
      <CardHeader>
        <CardTitle className="mb-4 text-my-dark flex items-center gap-2">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_58_384)">
              <path
                d="M26.8874 8.81502H23.889C23.889 8.81502 23.8726 10.5354 23.8562 10.8631H26.8874C28.018 10.8631 28.9355 11.7807 28.9355 12.9112V18.0396C28.9355 19.1702 28.018 20.0877 26.8874 20.0877H21.1527C19.9567 20.0877 19.0719 19.9731 18.4165 19.7437C17.4826 19.4324 17.0074 18.8917 16.778 18.1707C16.3192 18.1871 15.8768 18.1871 15.5164 18.1871C15.2378 18.1871 14.9593 18.1871 14.6808 18.1871C15.0085 19.7764 15.926 21.2347 18.4329 21.8409C18.9408 21.9556 19.5143 22.0375 20.1369 22.0867V26.8383C20.1369 27.9688 19.2193 28.8864 18.0888 28.8864H12.9276C11.797 28.8864 10.8795 27.9688 10.8795 26.8383V21.1036C10.8795 16.4831 12.6163 16.4831 15.5 16.4831C18.3182 16.4831 22.185 16.4831 22.185 9.7981V4.06343C22.185 1.80233 20.3335 -0.0491486 18.0724 -0.0491486L12.9276 5.77793e-06C10.6665 5.77793e-06 8.81501 1.85149 8.81501 4.11259V8.81502H4.11258C1.8351 8.81502 0 10.6665 0 12.9276V18.056C0 20.3171 1.8351 22.1686 4.11258 22.1686H7.11099V21.1364C7.11099 20.7759 7.12738 20.4318 7.14376 20.1041H4.11258C2.98203 20.1041 2.06448 19.1866 2.06448 18.056V12.9276C2.06448 11.797 2.98203 10.8795 4.11258 10.8795H9.84725C11.0433 10.8795 11.9281 10.9942 12.5835 11.2236C13.5174 11.5349 13.9926 12.0756 14.222 12.7965C14.6808 12.7801 15.1231 12.7801 15.4836 12.7801C15.7622 12.7801 16.0407 12.7801 16.3192 12.7801C15.9915 11.1908 15.074 9.73256 12.5671 9.12633C12.0592 9.01163 11.4857 8.92971 10.8631 8.88056V4.12897C10.8631 2.99842 11.7807 2.08087 12.9112 2.08087H18.056C19.1866 2.08087 20.1041 2.99842 20.1041 4.12897V9.86364C20.1041 14.4841 18.3673 14.4842 15.4836 14.4842C12.6654 14.4842 8.79862 14.4841 8.79862 21.1691V26.9038C8.79862 29.1649 10.6501 31.0164 12.9112 31.0164H18.056C20.3171 31.0164 22.1686 29.1649 22.1686 26.9038V22.2014H26.871C29.1321 22.2014 30.9836 20.3499 30.9836 18.0888V12.9276C31 10.6665 29.1485 8.81502 26.8874 8.81502Z"
                fill="url(#paint0_linear_58_384)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_58_384"
                x1="30.9837"
                y1="30.9573"
                x2="3.36124e-06"
                y2="0.0255613"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.295" stop-color="#101010" />
              </linearGradient>
              <clipPath id="clip0_58_384">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Saúde Digital
        </CardTitle>
        <CardDescription className="flex justify-between items-center">
          <h3 className="border rounded-md p-4 font-bold bg-my-neutral">
            Receita Eletrónica
          </h3>
          <p className="font-bold">
            Data:{" "}
            <span>
              {new Date(prescription.created_at).toLocaleDateString()}
            </span>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 mb-12">
        <div className=" flex items-center space-x-4 p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Utente: <span className="uppercase">user_name?</span>
            </p>
            <p className="text-sm font-medium leading-none">
              Código de Acesso e Dispensa:{" "}
              <span className="uppercase">{prescription.code}</span>
            </p>
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Local de Prescrição:{" "}
              <span className="uppercase">Hospital de Brasil</span>
            </p>
            <p className="text-sm font-medium leading-none">
              Prescritor:{" "}
              <span className="uppercase">Dr. Gustavo de Almeida</span>
            </p>
          </div>
        </div>
        <div>
          <DataTableList
            columns={columnsCardPrescription}
            data={prescription}
            paginationAndInput={false}
          />
        </div>
        <p className="italic">{prescription.instructions}</p>
      </CardContent>
      {isPharmaceutical && (
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleOnClick}
            disabled={
              prescription.status === "USADA" ||
              prescription.status === "EXPIRADO"
            }
          >
            {prescription.status === "USADA"
              ? "Receita já foi entregue"
              : prescription.status === "PENDIENTE"
              ? "Marcar como entregue"
              : "Receita expirou"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

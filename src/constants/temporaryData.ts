import { PrescriptionListTable } from "@/Types/user";
import { ColumnDef } from "@tanstack/react-table";

export type Prescription = {
  id: string;
  name_drug: string;
  status: "pending" | "processing" | "success" | "failed";
  code: string;
  quantity: number;
  created_at: Date;
  expires_at: Date;
};

export const data: PrescriptionListTable[] = [
  {
    id: "ad2040",
    name_drug: "Tilenol",
    status: "Pendiente",
    code: "a102010",
    quantity: 2010,
    created_at: new Date(),
    expires_at: new Date(),
  },
  {
    id: "ad2040",
    name_drug: "Tilenol",
    status: "Pendiente",
    code: "a102010",
    quantity: 2010,
    created_at: new Date(),
    expires_at: new Date(),
  },
  {
    id: "ad2040",
    name_drug: "Tilenol",
    status: "Usada",
    code: "a102010",
    quantity: 2010,
    created_at: new Date(),
    expires_at: new Date(),
  },
  {
    id: "ad2040",
    name_drug: "Tilenol",
    status: "Expirado",
    code: "a102010",
    quantity: 2010,
    created_at: new Date(),
    expires_at: new Date(),
  },
  {
    id: "ad2040",
    name_drug: "Usada",
    status: "Pendiente",
    code: "a102010",
    quantity: 2010,
    created_at: new Date(),
    expires_at: new Date(),
  },
];

export const columns: ColumnDef<PrescriptionListTable>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name_drug",
    header: "Remédio",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "code",
    header: "Código",
  },
  {
    accessorKey: "quantity",
    header: "Quantidade",
  },
  {
    accessorKey: "created_at",
    header: "Data de Expedição",
  },
  {
    accessorKey: "expires_at",
    header: "Data de Expiração",
  },
];

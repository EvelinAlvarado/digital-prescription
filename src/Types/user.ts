import { LucideIcon } from "lucide-react";

export interface SidebarLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface SidebarLinks {
  pharmaceutical: SidebarLink[];
  doctor: SidebarLink[];
  client: SidebarLink[];
}

// user type
export interface User {
  role: "doctor" | "client" | "pharmaceutical";
  id: string;
  name?: string;
  crm?: string;
  specialty?: string;
  phone?: string;
  id_user?: string;
  prescriptions?: Prescription[];
}

export interface Prescription {
  id: string;
  code: string;
  name_drug: string;
  quantity: number;
  type: number;
  instructions: string;
  status: "Pendiente" | "Rejeitado" | "Aprovado";
  expeditionDate: Date;
  expiredDate: Date;
}

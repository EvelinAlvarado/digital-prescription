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

export interface User {
  role: "DOCTOR" | "CLIENT" | "PHARMACEUTICAL";
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
  status: "Pendiente" | "Usada" | "Expirado";
  created_at: Date;
  expires_at: Date;
}

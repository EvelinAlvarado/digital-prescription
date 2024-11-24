"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLinks } from "@/Types/user";
import { useParams } from "next/navigation";
import { SidebarLink } from "@/Types/user";
import {
  LucideCross,
  LucideFileSearch,
  LucideFileText,
  LucidePencilLine,
  Pill,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const userNameUrl = params["user-name"];

  // Data coming from backend?
  const user = {
    role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
    userName: userNameUrl,
  };
  console.log(user);

  const sidebarLinks: SidebarLinks = {
    pharmaceutical: [
      {
        href: `/dashboard/history`,
        label: "Histórico de Receitas",
        icon: LucideCross,
      },
      {
        href: `/dashboard/prescription-search`,
        label: "Buscar Receita",
        icon: LucideFileSearch,
      },
    ],
    doctor: [
      {
        href: `/dashboard/prescription-record`,
        label: "Histórico de Receitas",
        icon: LucideFileText,
      },
      {
        href: `/dashboard/new-prescription`,
        label: "New Prescription",
        icon: LucidePencilLine,
      },
    ],
    client: [
      {
        href: `/dashboard/my-prescriptions`,
        label: "Minhas Receitas",
        icon: Pill,
      },
    ],
  };

  // Filter sidebar links based on user role
  let userSidebarLinks: SidebarLink[] = [];

  if (user.role === "pharmaceutical") {
    userSidebarLinks = sidebarLinks.pharmaceutical;
  } else if (user.role === "doctor") {
    userSidebarLinks = sidebarLinks.doctor;
  } else if (user.role === "client") {
    userSidebarLinks = sidebarLinks.client;
  }
  return (
    <SidebarProvider>
      <AppSidebar sidebarLinks={userSidebarLinks} />
      <SidebarInset className="bg-my-base">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="bg-my-base flex flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

// {/* <div>
//     {/* Main content */}
//     <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-gray-200 p-4 shadow">
//           <h1 className="text-xl">Dashboard - {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h1>
//         </header>
//         {/* Page content */}
//         <main className="p-4">{children}</main>
//       </div>
//     </div> */}

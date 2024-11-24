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
        href: `dashboard/history`,
        label: "Medication History",
      },
      {
        href: `dashboard/new-prescription`,
        label: "New Prescription",
      },
    ],
    doctor: [
      {
        href: `dashboard/prescriptions`,
        label: "Prescriptions History",
      },
      {
        href: `/dashboard/new-prescription`,
        label: "New Prescription",
      },
    ],
    client: [
      {
        href: `/dashboard/my-prescriptions`,
        label: "My Prescriptions",
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
    <SidebarProvider className="bg-red-500">
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
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div>
              <h1>Dashboard for User ID:</h1>

              <div className="bg-my-base">{children}</div>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
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

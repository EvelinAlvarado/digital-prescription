import * as React from "react";
import { LucideLayoutDashboard, LucideLogOut } from "lucide-react";

// import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarLink } from "@/Types/user";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface AppSidebarProps {
  sidebarLinks: SidebarLink[];
}

export function AppSidebar({ sidebarLinks }: AppSidebarProps) {
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader
        className="bg-my-primary pt-6 rounded-tr-3xl

"
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-my-dark flex justify-center"
            >
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center text-sidebar-primary-foreground">
                  <Image
                    alt="White Logo"
                    src="/images/logo-white.png"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none text-my-base">
                  <span className="font-semibold text-xl">Digital Saúde</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-my-primary text-my-base pt-6">
        <SidebarMenu>
          <SidebarMenuItem className="mb-4">
            <SidebarMenuButton className="">
              <button
                onClick={() => router.push("/dashboard")}
                className="flex gap-2 pl-5"
              >
                <LucideLayoutDashboard className="w-4" />
                <span>Dashboard</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {sidebarLinks.map((item) => (
            <SidebarMenuItem key={item.href} className="mb-4">
              <SidebarMenuButton asChild>
                <button onClick={() => router.push(item.href)} className="pl-7">
                  <item.icon />
                  <span>{item.label}</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="bg-my-primary pb-6 rounded-br-3xl">
        <Link href="/">
          <Button variant="outline" className="w-full">
            <LucideLogOut className="rotate-180" />
            Sair
          </Button>
        </Link>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

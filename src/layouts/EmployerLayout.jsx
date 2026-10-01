import SidebarEmployer from "@/components/navbar/SidebarEmployer";
import {
  BrainCircuit,
  Briefcase,
  Building2,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PlusCircle,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/employer/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "Hiring",
    items: [
      { name: "All Jobs", href: "/employer/jobs", icon: Briefcase },
      { name: "Create Jobs", href: "/employer/jobs/create", icon: PlusCircle },
      { name: "Applications", href: "/employer/applications", icon: FileText },
      { name: "Candidates", href: "/employer/candidates", icon: Users },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "AI Screening",
        href: "/employer/ai-screening",
        icon: BrainCircuit,
      },
      { name: "Messages", href: "/employer/messages", icon: MessageSquare },
    ],
  },
  {
    title: "Account",
    items: [
      { name: "Company Profile", href: "/employer/company", icon: Building2 },
      { name: "Billing & Plans", href: "/employer/billing", icon: CreditCard },
      { name: "Settings", href: "/employer/settings", icon: Settings },
    ],
  },
];
const EmployerLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <SidebarEmployer navigation={navigation} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 border">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployerLayout;

import { formatDate, formatFullDate } from "@/lib/timeAgo";
import { Briefcase, Building2, FileText, Users } from "lucide-react";
import React from "react";
import AdminDashboardStateCard from "./AdminDashboardStateCard";
import UserTable from "../user/UserTable";
import { users } from "../user/dummyUsers";

const stats = [
  {
    title: "Total Users",
    value: "12,453",
    icon: Users,
    color: "blue",
    description: "2,341 active this weak",
  },
  {
    title: "Active Jobs",
    value: "8,234",
    icon: Briefcase,
    color: "green",
    description: "523 posted today",
  },
  {
    title: "Companies",
    value: "1,452",
    icon: Building2,
    color: "purple",
    description: "124 pending review",
  },
  {
    title: "Applications",
    value: "45,678",
    icon: FileText,
    color: "orange",
    description: "3,211 submitted today",
  },
];
const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">
          {formatFullDate(new Date())}
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((state) => (
          <AdminDashboardStateCard key={state.title} {...state} />
        ))}
      </div>
      <UserTable users={users} />
    </div>
  );
};

export default AdminDashboard;

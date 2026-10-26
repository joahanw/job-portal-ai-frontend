import EmployerApplicationStateCard from "@/pages/employer/applications/EmployerApplicationStateCard";
import { user } from "@/pages/user/profile/dummyUser";
import { Briefcase, UserCheck, Users, UsersIcon, UserX } from "lucide-react";
import React, { useMemo } from "react";
import { users } from "./dummyUsers";
import UserFilter from "./UserFilter";
import UserTable from "./UserTable";

const AdminUsers = () => {
  const stats = useMemo(() => {
    const total = users.length;
    const seekers = users.filter((u) => u.role === "ROLE_JOB_SEEKER").length;
    const employers = users.filter((u) => u.role === "ROLE_EMPLOYER").length;
    const suspended = users.filter((u) => u.status === "SUSPENDED").length;
    return { total, seekers, employers, suspended };
  }, [users]);

  const summaryCards = [
    {
      label: "Total Users",
      value: stats.total,
      icon: UsersIcon,
      color: "text-primary bg-blue-50",
    },
    {
      label: "Job Seekers",
      value: stats.seekers,
      icon: UserCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Employers",
      value: stats.employers,
      icon: Briefcase,
      color: "text-purple-600 bg-purple-50",
    },
    {
      label: "Suspended",
      value: stats.suspended,
      icon: UserX,
      color: "text-red-600 bg-red-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage and monitor all platform users
        </p>
      </section>
      {/* State */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, index) => (
          <EmployerApplicationStateCard
            key={index}
            label={card.label}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </section>
      <UserFilter
        onRoleFilter={(role) => console.log("Filter Role:", role)}
        onStatusFilter={(status) => console.log(status)}
      />

      <UserTable users={users} />
    </div>
  );
};

export default AdminUsers;

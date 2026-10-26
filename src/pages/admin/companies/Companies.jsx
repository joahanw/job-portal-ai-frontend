import { Ban, Building2, Clock, ShieldCheck } from "lucide-react";
import React, { useMemo } from "react";
import { companies } from "./dummyCompanies";
import EmployerApplicationStateCard from "@/pages/employer/applications/EmployerApplicationStateCard";
import CompanyFilter from "./CompanyFilter";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  const stats = useMemo(() => {
    const total = companies.length;
    const pending = companies.filter(
      (u) => u.status === "PENDING_VERIFICATION",
    ).length;
    const active = companies.filter((u) => u.status === "ACTIVE").length;
    const suspended = companies.filter((u) => u.status === "SUSPENDED").length;
    const rejected = companies.filter((u) => u.status === "REJECTED").length;
    return { total, pending, active, suspended, rejected };
  }, [companies]);
  const summaryCards = [
    {
      label: "Total Companies",
      value: stats.total,
      icon: Building2,
      color: "text-primary bg-blue-50",
    },
    {
      label: "Pending Review",
      value: stats.pending,
      icon: Clock,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Active & Verified",
      value: stats.active,
      icon: ShieldCheck,
      color: "text-purple-600 bg-purple-50",
    },
    {
      label: "Suspended",
      value: stats.suspended,
      icon: Ban,
      color: "text-red-600 bg-red-50",
    },
  ];
  return (
    <div className="space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold text-slate-900">
          Company Management
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Review, verify, and manage all registered companies
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

      <CompanyFilter />

      <CompaniesTable companies={companies} />
    </div>
  );
};

export default Companies;

import React from "react";
import EmployerApplicationStateCard from "./EmployerApplicationStateCard";
import {
  Eye,
  Filter,
  ListOrdered,
  Search,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { applications } from "./applications";
import { useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobs } from "@/pages/user/jobs/dummyJobs";
import { cn } from "cn";
import ApplicationTable from "./ApplicationTable";

const AI_SHORLIST_FILTERS = [
  { value: "ALL", label: "All" },
  { value: "AUTO_SHORLISTED", label: "Auto Shorlisted" },
  { value: "REVIEW_RECOMMENDED", label: "Review Recommended" },
  { value: "PENDING_REVIEW", label: "Pending Review" },
  { value: "LOW_MATCH", label: "Low Match" },
  { value: "NOT_SCREENED", label: "Not Screened" },
];

const STATUS_FILTER = [
  "ALL",
  "PENDING",
  "REVIEWING",
  "SHORLISTED",
  "INTERVIEW_SCHEDULED",
  "HIRED",
  "REJECTED",
];
const EmployerApplications = () => {
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [starredOnly, setStarredOnly] = React.useState(false);
  const [unreadOnly, setUnreadOnly] = React.useState(false);
  const stats = useMemo(
    () => ({
      total: applications.length,
      pending: applications.filter((app) => app.status === "PENDING").length,
      shorlisted: applications.filter((app) => app.status === "SHORLISTED")
        .length,
      unread: applications.filter((app) => !app.isRead).length,
      rejected: applications.filter((app) => app.status === "REJECTED").length,
    }),
    [applications],
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold text-slate-900">Applications</h1>
        <p className="text-sm text-slate-500 mt-1">
          Reviewing and manage all candidate applications
        </p>
      </section>

      {/* State */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <EmployerApplicationStateCard
          label="Total"
          value={stats.total}
          icon={Users}
          color={"text-primary bg-blue-50"}
        />
        <EmployerApplicationStateCard
          label="Pending"
          value={stats.pending}
          icon={Users}
          color={"text-warning bg-yellow-50"}
        />
        <EmployerApplicationStateCard
          label="Shorlisted"
          value={stats.shorlisted}
          icon={Users}
          color={"text-success bg-green-50"}
        />
        <EmployerApplicationStateCard
          label="Unread"
          value={stats.unread}
          icon={Users}
          color={"text-info bg-purple-50"}
        />
        <EmployerApplicationStateCard
          label="Auto-Shorlisted"
          value={stats.pending}
          icon={Users}
          color={"text-primary bg-indigo-50"}
        />
      </section>

      {/* Search and Filter */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        {/* Row 1: Search + Job select + AI shorlist + Sort - All in one line */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search by candidate name or hob titile..."
              className="pl-9"
            />
          </div>

          {/* All Job Select Dropdown */}
          <Select>
            <SelectTrigger className="border-slate-200 text-sm w-full sm:w-48">
              <Filter className="h-4 w-4" />
              <SelectValue placeholder="All Jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              {jobs.map((job) => (
                <SelectItem key={job.id} value={job.id}>
                  {job.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* AI Shorlisted */}
          <Select>
            <SelectTrigger className="border-slate-200 text-sm w-full sm:w-48">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
              <SelectValue placeholder="AI Shorlisted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">AI Shorlisted</SelectItem>
              {AI_SHORLIST_FILTERS.map((ai) => (
                <SelectItem key={ai.label} value={ai.value}>
                  {ai.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Scoring */}
          <Select>
            <SelectTrigger className="border-slate-200 text-sm w-full sm:w-48">
              <ListOrdered className="h-3.5 w-3.5 mr-2 text-primary" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DEFAULT">Newest First</SelectItem>
              <SelectItem value="AI_SCORE_DESC">
                AI Score: High to Low
              </SelectItem>
              <SelectItem value="AI_SCORE_ASC">
                AI Score: Low to High
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Row 2: Status tabs + toggles */}
        <div className="flex gap-3 items-center flex-wrap ">
          <div className="flex flex-wrap gap-1.5 flex-1">
            {STATUS_FILTER.map((status) => (
              <button
                onClick={() => setStatusFilter(status)}
                key={status}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  statusFilter === status
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setStarredOnly(!starredOnly)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors",
                starredOnly
                  ? "bg-amber-100 text-amber-700"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200",
              )}
            >
              <Star className="h-3.5 w-3.5 text-primary" />
              Starred
            </button>
            <button
              onClick={() => setUnreadOnly(!unreadOnly)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors",
                unreadOnly
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200",
              )}
            >
              <Eye className="h-3.5 w-3.5" /> Unread
            </button>
          </div>
        </div>
      </section>

      {/* Applicant Table */}
      <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <ApplicationTable applications={applications} isFullMode={true} />
      </section>
    </div>
  );
};

export default EmployerApplications;

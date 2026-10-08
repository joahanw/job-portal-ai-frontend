import { Button } from "@/components/ui/button";
import { jobs } from "@/pages/user/jobs/dummyJobs";
import {
  Briefcase,
  Clock,
  Delete,
  Edit2,
  MapPin,
  MoreVertical,
  Plus,
  Search,
  TrendingUp,
  User,
  Users,
  XCircle,
} from "lucide-react";
import React, { useMemo } from "react";
import EmployerApplicationStateCard from "../applications/EmployerApplicationStateCard";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import AiScoreCircle from "../applications/AiScoreCircle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const STATUS_FILTER = [
  "ALL",
  "PENDING",
  "REVIEWING",
  "SHORLISTED",
  "INTERVIEW_SCHEDULED",
  "HIRED",
  "REJECTED",
];

function fmtDate(dt) {
  if (!dt) return "-";
  return new Date(dt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
const EmployerJobs = () => {
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const stats = useMemo(
    () => ({
      total: jobs.length,
      open: jobs.filter((job) => job.status === "OPEN").length,
      draft: jobs.filter((job) => job.status === "DRAFT").length,
      closed: jobs.filter((job) => job.status === "CLOSED").length,
      appTotal: jobs.reduce((acc, job) => acc + job.applicationCount, 0),
    }),
    [jobs],
  );
  return (
    <div className="space-y-6">
      <section className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Jobs Posting</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage all your job listings in one place
          </p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90 shrink-0">
          <Plus />
          Post a Job
        </Button>
      </section>

      {/* State */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <EmployerApplicationStateCard
          label="Total Jobs"
          value={stats.total}
          icon={Briefcase}
          color={"text-primary bg-blue-50"}
        />
        <EmployerApplicationStateCard
          label="Active (Open)"
          value={stats.open}
          icon={TrendingUp}
          color={"text-warning bg-yellow-50"}
        />
        <EmployerApplicationStateCard
          label="Draft"
          value={stats.draft}
          icon={Clock}
          color={"text-success bg-green-50"}
        />
        <EmployerApplicationStateCard
          label="Total Applications"
          value={stats.appTotal}
          icon={Users}
          color={"text-info bg-purple-50"}
        />
      </section>

      {/* Search and Filter */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <div className="flex gap-5 ">
          <div className="relative flex-1">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search by candidate name or hob titile..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
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
        </div>
      </section>

      {/* List Jobs */}
      <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-slate-700">
                Job Titile
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Status
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Type / Mode
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Location
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Applicats
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Posted
              </TableHead>
              <TableHead className="font-semibold text-slate-700 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => {
              const location = [job.city, job.state, job.country]
                .filter(Boolean)
                .join(", ");
              return (
                <TableRow key={job.id}>
                  <TableCell>
                    <p className="text-sm text-slate-900 font-medium">
                      {job.title}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge>{job.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-xs">{job.jobType}</Badge>
                    <Badge className="text-xs">{job.workMode}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-4 w-4" />
                      {location}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span>{job.applicationCount ?? 0}</span>
                      <span>/ {job.openings}</span>
                    </div>
                  </TableCell>
                  <TableCell>{fmtDate(job.createdAt)}</TableCell>

                  {/* Action */}
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-52">
                        <DropdownMenuItem>
                          <Edit2 className="h-4 w-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <XCircle className="h-4 w-4 mr-2" /> Close
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Delete className="h-4 w-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default EmployerJobs;

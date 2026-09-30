import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getApplicationStatus } from "@/lib/applicationStatus";
import { formatRupiah } from "@/lib/rupiahFormatter";
import {
  Bookmark,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";
import React from "react";

export const PIPELINE = [
  "PENDING",
  "REVIEWING",
  "SHORTLISTED",
  "INTERVIEW_SCHEDULED",
  "HIRED",
];
const ApplicationCard = ({ app }) => {
  const myPipelineIndex = PIPELINE.indexOf(app.status);
  const job = app.job;
  const status = getApplicationStatus(app.status);
  const location = [job.city, job.state, job.country]
    .filter(Boolean)
    .join(", ");
  return (
    <Card>
      <CardContent className="">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="h-16 w-16 rounded-xl shrink-0 overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src={app.company?.logoUrl}
              alt="Company Logo"
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Title Row + Bookmark  */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-1">
                  {job.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span className="text-slate-700 font-medium text-sm">
                    {app.company?.name}
                  </span>
                  <CheckCircle2 className="h-4 w-4 fill-primary text-white shrink-0" />
                  <span className="text-slate-400 text-sm">
                    • {app.company?.industryType}
                  </span>
                  <span className="text-slate-400 text-sm">
                    • {app.company?.companySize}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5 italic">
                  {app.company?.tagline}
                </p>
              </div>

              <Badge variant="outline" className={`p-2 ${status.className}`}>
                <span className={`text-xs font-normal`}>{status.label}</span>
              </Badge>
            </div>

            {/* Job Details */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 shrink-0" />
                {location}
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4 shrink-0" />
                {job.jobType}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 shrink-0" />
                {job.minSalary && job.maxSalary
                  ? `${formatRupiah(job.minSalary)} - ${formatRupiah(job.maxSalary)}`
                  : "Not disclosed"}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 shrink-0" />
                Posted {job.createdAt?.split("T")[0]}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {PIPELINE.map((item, i) => (
                <div
                  className={`h-1.5 rounded-full flex-1 transition-colors 
                  ${myPipelineIndex >= i ? "bg-primary" : "bg-slate-200"} `}
                ></div>
              ))}
            </div>

            <>
              <Separator className="mt-4 mb-3" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {5}
                    </span>
                    <span>{job.openings} openings</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      View Job
                    </Button>
                    <Button variant="ghost" className="text-red-400">
                      Withdraw
                    </Button>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;

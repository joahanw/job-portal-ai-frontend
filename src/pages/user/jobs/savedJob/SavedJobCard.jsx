import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatRupiah } from "@/lib/rupiahFormatter";
import { timeAgo } from "@/lib/timeAgo";
import {
  Bookmark,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  MapPin,
  Trash2,
  Users,
} from "lucide-react";
import React from "react";

const SavedJobCard = ({ savedJob }) => {
  const job = savedJob.job;
  const location = [job.city, job.state, job.country]
    .filter(Boolean)
    .join(", ");
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="h-16 w-16 rounded-xl shrink-0 overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src={job.company?.logoUrl}
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
                    {job.company?.name}
                  </span>
                  <CheckCircle2 className="h-4 w-4 fill-primary text-white shrink-0" />
                  <span className="text-slate-400 text-sm">
                    • {job.company?.industryType}
                  </span>
                  <span className="text-slate-400 text-sm">
                    • {job.company?.companySize}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5 italic">
                  {job.company?.tagline}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <Button variant="ghost">
                  <Bookmark className="h-4 w-4 fill-primary" />
                </Button>
                <span className="text-xs text-slate-400">
                  {timeAgo(savedJob.savedAt)}
                </span>
              </div>
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
                Posted {timeAgo(job.createdAt)}
              </div>
            </div>

            {/* Badges - Job Details */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary">{job.status}</Badge>
              <Badge variant="outline">{job.experienceLevel}</Badge>
              <Badge variant="secondary">{job.category?.name}</Badge>
              {job.skills.map((skill) => (
                <Badge key={skill.id} variant="outline">
                  {skill.name}
                </Badge>
              ))}
            </div>

            <>
              <Separator className="mt-4 mb-3" />
              <div className="flex items-center gap-3">
                <Button size="sm" className="h-8 text-xs gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5" />
                  View job
                </Button>
                <Button
                  variant="outline"
                  className="h-8 text-xs text-red-500 border-red-200 
                hover:bg-red-50 hover:text-red-600 gap-1.5"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Remove
                </Button>
              </div>
            </>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SavedJobCard;

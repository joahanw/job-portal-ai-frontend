import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  Car,
  CheckCircle2,
  Clock,
  DollarSign,
  Eye,
  MapPin,
  Share,
  Share2,
  Users,
} from "lucide-react";
import React from "react";
import { job } from "./dummyJob";
import { formatRupiah } from "@/lib/rupiahFormatter";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const JobDetail = () => {
  const location = [job.city, job.state, job.country]
    .filter(Boolean)
    .join(", ");
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Button variant="ghost" className="my-5">
        <ArrowLeft />
        Back To Jobs
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="">
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

                    <Button variant="ghost">
                      <Bookmark className="h-4 w-4" />
                    </Button>
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

                  {/* Badges - Job Details */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary">{job.status}</Badge>
                    <Badge variant="outline">{job.experienceLevel}</Badge>
                    <Badge variant="secondary">{job.category?.name}</Badge>
                    {job.skills?.map((skill) => (
                      <Badge key={skill.id} variant="outline">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle>About the role</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                {job.description}
              </p>
            </CardContent>
          </Card>

          {/* Job Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                {job.responsibilities}
              </p>
            </CardContent>
          </Card>

          {/* Job Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                {job.requirements}
              </p>
            </CardContent>
          </Card>

          {/* Job Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                {job.benefits}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Apply Card */}
        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-6">
              <Button
                className="w-full py-5"
                onClick={() => navigate(`/apply/${job.id}`)}
              >
                Apply Now
              </Button>
              <div className="flex gap-2 justify-between">
                <Button variant="outline" className="w-[85%] py-5">
                  <Bookmark className="h-4 w-4 fill-primary" />
                  Saved
                </Button>
                <Button variant="outline" className="w-[15%] py-5">
                  <Share2 />
                </Button>
              </div>

              <Separator />

              <div className="text-sm text-slate-600 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Job Type</span>
                  <p className="text-slate-900 font-medium">{job.jobType}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Work Mode</span>
                  <p className="text-slate-900 font-medium">{job.workMode}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Experience Level</span>
                  <p className="text-slate-900 font-medium">
                    {job.experienceLevel}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Salary</span>
                  <p className="text-slate-900 font-medium">
                    {job.minSalary && job.maxSalary
                      ? `${formatRupiah(job.minSalary)} - ${formatRupiah(job.maxSalary)}`
                      : "Not disclosed"}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Openings</span>
                  <p className="text-slate-900 font-medium">{job.openings}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Deadline</span>
                  <p className="text-slate-900 font-medium">
                    {job.applicationDeadline?.split("T")[0]}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Posted</span>
                  <p className="text-slate-900 font-medium">
                    {job.createdAt?.split("T")[0]}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" /> 20 applicants
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> 150 views
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {job.tags?.map((tag) => (
                  <Badge key={tag.id} variant="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <Card>
            <CardHeader>
              <CardTitle>Location Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-500 whitespace-pre-line leading-relaxed space-y-1">
                <p>
                  {job.zipCode} {job.address}
                </p>
                <p>{location}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

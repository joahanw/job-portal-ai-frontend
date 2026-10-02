import { Button } from "@/components/ui/button";
import { jobs } from "@/pages/user/jobs/dummyJobs";
import { Plus } from "lucide-react";
import React, { useMemo } from "react";

const EmployerJobs = () => {
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
    <div>
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
    </div>
  );
};

export default EmployerJobs;

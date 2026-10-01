import { Button } from "@/components/ui/button";
import { BookMarked, Briefcase } from "lucide-react";
import React from "react";
import { savedJobs } from "./dummySavedJobs";
import SavedJobCard from "./SavedJobCard";

const SavedJobs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BookMarked className="h-6 w-6 text-primary" />
            Saved Jobs
          </h1>
          <p className="text-slate-500 text-sm mt-1">2 Saved Jobs</p>
        </div>
        <div>
          <Button variant="outline" className="py-5">
            <Briefcase />
            Browse Jobs
          </Button>
        </div>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {savedJobs.map((job) => (
          <SavedJobCard key={job.id} savedJob={job} />
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;

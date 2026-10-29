import { Button } from "@/components/ui/button";
import { FileText, Plus, Star } from "lucide-react";
import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import { resumes } from "../applications/applyNow/dummyResume";
import CreateResumeDialog from "./CreateResumeDialog";

const Resumes = () => {
  const [showCreate, SetShowCreate] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col  sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="">
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              My Resumes
            </h1>
            <p>
              Create and manage multiple resume versions using our built-in
              templates
            </p>
          </div>
          <Button onClick={() => SetShowCreate(true)}>
            <Plus className="mr-1.5 h-4 w-4" />
            New Resume
          </Button>
        </div>

        {/* Card Information */}
        <div className="bg-yellow-50 border-yellow-200 rounded-xl p-4 mb-6 flex items-center gap-3">
          <Star className="h-5 w-5 text-yellow-500 fill-current shrink-0" />
          <div>
            <p className="text-sm font-semibold text-yellow-800">
              Default Resume
            </p>
            <p className="text-xs text-yellow-700">
              <span>
                <span className="font-medium">"React Developer Resume" </span>
                will be used when you apply without choosing a version.
              </span>
            </p>
          </div>
        </div>

        {/* List of Resumes Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumes.map((item) => (
            <ResumeCard resume={item} key={item.id} />
          ))}
          {/* Add Resume */}
          <button
            onClick={() => SetShowCreate(true)}
            className="border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center
           gap-3 text-slate-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
          >
            <div className="h-10 w-10 rounded-xl border-2 border-current flex items-center justify-center">
              <Plus />
            </div>
            <div>
              <p>New Resume</p>
              <p className="text-xs">Pick a template to get started</p>
            </div>
          </button>
        </div>
      </div>

      {/* Resume Dialog */}
      <CreateResumeDialog
        open={showCreate}
        onClose={() => SetShowCreate(false)}
      />
    </div>
  );
};

export default Resumes;

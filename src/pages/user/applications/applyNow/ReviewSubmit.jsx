import { Card, CardContent } from "@/components/ui/card";
import { formatRupiah } from "@/lib/rupiahFormatter";
import React from "react";
import { resumes } from "./dummyResume";

const ReviewSubmit = ({
  selectedResume,
  coverLetter,
  expectedSalary,
  availableForm,
  job,
}) => {
  const location = [job.city, job.state, job.country]
    .filter(Boolean)
    .join(", ");

  const selectedResumeTitle =
    resumes.find((r) => r.id.toString() === selectedResume)?.title ??
    `Resume #${selectedResume}`;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Review Your Application
        </h2>
        <p className="text-slate-600">
          Please review all information befor submitting
        </p>
      </div>

      {/* Job Details */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-slate-900 mb-4">Position</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-between">
              <span className="text-slate-600">Job Title:</span>
              <span className="text-medium text-slate-900">{job.title}</span>
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-between">
              <span className="text-slate-600">Company Name:</span>
              <span className="text-medium text-slate-900">
                {job.company?.name}
              </span>
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-between">
              <span className="text-slate-600">Location:</span>
              <span className="text-medium text-slate-900">{location}</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Selected Resume */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-slate-900 mb-2">Selected Resume</h3>
          <p className="text-slate-600">{selectedResumeTitle}</p>
        </CardContent>
      </Card>

      {/* Cover Letter */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-slate-900 mb-2">Cover Letter</h3>
          <p className="text-slate-600">{coverLetter}</p>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-slate-900 mb-2">
            Additional Information
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-between">
              <span className="text-slate-600">Expected Salary:</span>
              <span className="font-medium text-slate-900">
                {formatRupiah(expectedSalary)}
              </span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-slate-600">Available From:</span>
              <span className="font-medium text-slate-900">
                {availableForm?.toLocaleDateString()}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewSubmit;

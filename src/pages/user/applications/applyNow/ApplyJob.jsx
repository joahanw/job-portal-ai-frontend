import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import JobInfoCard from "./JobInfoCard";
import ApplySteps from "./ApplySteps";
import SelectResume from "./SelectResume";
import CoverLetterEditor from "./CoverLetterEditor";
import AdditionalDetails from "./AdditionalDetails";
import ReviewSubmit from "./ReviewSubmit";
import { job } from "../../jobs/dummyJob";

const ApplyJob = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedResume, setSelectedResume] = React.useState(null);
  const [coverLetter, setCoverLetter] = React.useState("");
  const [expectedSalary, setExpectedSalary] = React.useState("");
  const [availableForm, setAvailableForm] = React.useState(null);
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SelectResume
            selectedResume={selectedResume}
            setSelectedResume={setSelectedResume}
          />
        );
      case 2:
        return (
          <CoverLetterEditor
            coverLetter={coverLetter}
            setCoverLetter={setCoverLetter}
          />
        );
      case 3:
        return (
          <AdditionalDetails
            expectedSalary={expectedSalary}
            setExpectedSalary={setExpectedSalary}
            availableForm={availableForm}
            setAvailableForm={setAvailableForm}
          />
        );
      case 4:
        return (
          <ReviewSubmit
            selectedResume={selectedResume}
            coverLetter={coverLetter}
            expectedSalary={expectedSalary}
            availableForm={availableForm}
            job={job}
          />
        );
    }
    return currentStep;
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button
        className="py-5 mb-5"
        variant="ghost"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back To Jobs
      </Button>

      <JobInfoCard job={job} />
      <ApplySteps currentStep={currentStep} />

      <div className="my-8">{renderStep()}</div>

      <div className="flex items-center justify-between mt-8">
        <Button
          disabled={currentStep === 1}
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep((next) => next + 1)}
          disabled={currentStep === 4}
        >
          Next
          <ArrowRight className="h-4 w-4 mr-2" />
        </Button>
      </div>
    </div>
  );
};

export default ApplyJob;

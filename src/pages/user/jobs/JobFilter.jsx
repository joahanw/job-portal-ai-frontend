import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";
import React from "react";

const JOB_TYPE = [
  { value: "FULL_TIME", label: "Full-time" },
  { value: "PART_TIME", label: "Part-time" },
  { value: "CONTRACT", label: "Contract" },
  { value: "INTERNSHIP", label: "Internship" },
  { value: "FREELANCE", label: "Freelance" },
  { value: "REMOTE", label: "Remote" },
];

const WORK_MODE = [
  { value: "REMOTE", label: "Remote" },
  { value: "HYBRID", label: "Hybrid" },
  { value: "ONSITE", label: "On-site" },
];

const EXPERIENCE_LEVEL = [
  { value: "ENTRY_LEVEL", label: "Entry Level", years: "0-1 yrs" },
  { value: "JUNIOR", label: "Junior", years: "1-3 yrs" },
  { value: "MID_LEVEL", label: "Mid Level", years: "3-5 yrs" },
  { value: "SENIOR", label: "Senior", years: "5-8 yrs" },
  { value: "LEAD", label: "Lead", years: "8+ yrs" },
  { value: "EXECUTIVE", label: "Executive", years: "C-level" },
];

const minSalary = 60000;
const maxSalary = 100000;

const JobFilter = () => {
  return (
    <Card className="sticky top-10 border-slate-200">
      <CardHeader className={"pb-3"}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            <CardTitle className="text-base">Filters</CardTitle>
            <Badge className="bg-primary text-white text-xs px-1.5 py-0.5 h-5">
              4
            </Badge>
          </div>
          <div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-sm text-slate-500 hover:text-red-600"
            >
              <X className="h-3.5 w-3.5 mr-1" />
              Clear All
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Job Type */}
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2.5">
            Job Type
          </h4>
          <div className="space-y-2">
            {JOB_TYPE.map(({ value, label }) => (
              <div
                className="flex items-center gap-2.5 cursor-pointer group"
                key={value}
              >
                <Checkbox />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Work Mode */}
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2.5">
            Work Mode
          </h4>
          <div className="space-y-2">
            {WORK_MODE.map(({ value, label }) => (
              <div
                className="flex items-center gap-2.5 cursor-pointer group"
                key={value}
              >
                <Checkbox />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Experience Level */}
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2.5">
            Experience Level
          </h4>
          <div className="space-y-2">
            {EXPERIENCE_LEVEL.map(({ value, label, years }) => (
              <div
                className="flex items-center gap-2.5 cursor-pointer group"
                key={value}
              >
                <Checkbox />
                <span>{label}</span>
                <span className="text-xs text-slate-500">{years}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Salary Range */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Salary Range
            </h4>
            <span>
              ${0} - ${"500K"}
            </span>
          </div>
          <Slider
            min={0}
            max={500000}
            step={10000}
            value={[minSalary, maxSalary]}
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1.5">
            <span>$0</span>
            <span>$500K+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFilter;

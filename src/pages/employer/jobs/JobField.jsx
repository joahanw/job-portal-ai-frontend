import { Label } from "@/components/ui/label";
import React from "react";

const JobField = ({ label, required, children, hint, action }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between min-h-5">
        <Label className="text-xs font-semibold text-slate-600">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        {action}
      </div>
      {children}
      {hint && <p className="text-sm text-slate-500">{hint}</p>}
    </div>
  );
};

export default JobField;

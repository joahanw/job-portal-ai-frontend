import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const COMPANY_STATUS = [
  { value: "all", label: "All Status" },
  { value: "PENDING_VERIFICATION", label: "Pending Verification" },
  { value: "ACTIVE", label: "Active" },
  { value: "SUSPENDED", label: "Suspended" },
  { value: "REJECTED", label: "Rejected" },
];

const COMPANY_TYPE = [
  { value: "all", label: "All Types" },
  { value: "STARTUP", label: "Startup" },
  { value: "INDIVIDUAL", label: "Individual" },
  { value: "PUBLIC_LISTED", label: "Public Listed" },
  { value: "GOVERNMENT", label: "Government" },
  { value: "EDUCATIONAL", label: "Educational" },
  { value: "SELF_EMPLOYED", label: "Self Employed" },
];

const INDUSTRY_TYPES = [
  { value: "all", label: "All Industries" },
  { value: "TECHNOLOGY", label: "Technology" },
  { value: "FINANCE_BANKING", label: "Finance & Banking" },
  { value: "MANUFACTURING", label: "Manufacturing" },
  { value: "CONSTRUCTION", label: "Construction" },
  { value: "EDUCATION", label: "Education" },
  { value: "HEALTHCARE", label: "Healthcare" },
  { value: "RETAIL_ECOMMERCE", label: "Retail & Ecommerce" },
  { value: "MEDIA_ENTERTAINMENT", label: "Media & Entertainment" },
  { value: "CONSULTING", label: "Consulting" },
  { value: "TELECOMMUNICATIONS", label: "Telecommunications" },
  { value: "PHARMACEUTICALS", label: "Pharmaceuticals" },
  { value: "OTHER", label: "Other" },
];

const CompanyFilter = ({ onStatusFilter, onTypeFilter, onIndustryFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center flex-wrap ">
      <Select onValueChange={(value) => onStatusFilter?.(value)}>
        <SelectTrigger className="h-9 w-full sm:w-40 bg-white border-slate-200 text-sm rounded-lg">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          {COMPANY_STATUS.map((item, index) => (
            <SelectItem value={item.value} key={index}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onTypeFilter?.(value)}>
        <SelectTrigger className="h-9 w-full sm:w-40 bg-white border-slate-200 text-sm rounded-lg">
          <SelectValue placeholder="All Types" />
        </SelectTrigger>
        <SelectContent>
          {COMPANY_TYPE.map((item, index) => (
            <SelectItem value={item.value} key={index}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onIndustryFilter?.(value)}>
        <SelectTrigger className="h-9 w-full sm:w-40 bg-white border-slate-200 text-sm rounded-lg">
          <SelectValue placeholder="All Industries" />
        </SelectTrigger>
        <SelectContent>
          {INDUSTRY_TYPES.map((item, index) => (
            <SelectItem value={item.value} key={index}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CompanyFilter;

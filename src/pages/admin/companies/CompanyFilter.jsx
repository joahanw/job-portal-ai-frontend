import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  COMPANY_STATUS,
  COMPANY_TYPE,
  INDUSTRY_TYPES,
} from "@/lib/companyStatus";
import React from "react";

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

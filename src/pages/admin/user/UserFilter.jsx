import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const UserFilter = ({ onRoleFilter, onStatusFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center flex-wrap ">
      {/* ROLE */}
      <Select onValueChange={(value) => onRoleFilter?.(value)}>
        <SelectTrigger className="h-9 w-full sm:w-40 bg-white border-slate-200 text-sm rounded-lg">
          <SelectValue placeholder="All Roles" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="ROLE_JOB_SEEKER">Job Seekers</SelectItem>
          <SelectItem value="ROLE_EMPLOYER">Employers</SelectItem>
          <SelectItem value="ROLE_ADMIN">Admin</SelectItem>
        </SelectContent>
      </Select>

      {/* STATUS */}
      <Select onValueChange={(value) => onStatusFilter?.(value)}>
        <SelectTrigger className="h-9 w-full sm:w-40 bg-white border-slate-200 text-sm rounded-lg">
          <SelectValue placeholder="All Roles" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="ACTIVE">Active</SelectItem>
          <SelectItem value="SUSPENDED">Suspended</SelectItem>
          <SelectItem value="INACTIVE">Inactive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserFilter;

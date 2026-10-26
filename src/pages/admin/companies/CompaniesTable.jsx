import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/timeAgo";
import { cn } from "cn";
import { CheckCircle, ShieldLock } from "lucide-react";
import React from "react";

const statusConfig = {
  ACTIVE: {
    label: "Active",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  INACTIVE: {
    label: "Inactive",
    dot: "bg-slate-400",
    text: "text-slate-500",
    bg: "bg-slate-100",
  },
  SUSPENDED: {
    label: "Suspended",
    dot: "bg-amber-500",
    text: "text-amber-700",
    bg: "bg-amber-50",
  },
  PENDING_VERIFICATION: {
    label: "Pending Verification",
    dot: "bg-slate-500",
    text: "text-slate-700",
    bg: "bg-slate-50",
  },
  REJECTED: {
    label: "Rejected",
    dot: "bg-red-500",
    text: "text-red-700",
    bg: "bg-red-50",
  },
};
const CompaniesTable = ({ companies }) => {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider w-10 pl-6">
              #
            </TableHead>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Company
            </TableHead>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Industry/Type
            </TableHead>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Size
            </TableHead>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Status
            </TableHead>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Verified
            </TableHead>
            <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Registered
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company, index) => {
            const status = statusConfig[company.status];
            return (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={company.logoUrl} />
                      <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 leading-tight">
                        {company.name}
                      </p>
                      <p className="text-xs text-slate-400 truncate max-w-[200px]">
                        {company.website}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="text-sm font-medium text-slate-700 ">
                      {company.industryType}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {company.companyType}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{company.companySize}</TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      status.bg,
                    )}
                  >
                    <div
                      className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0",
                        status.dot,
                      )}
                    />
                    <span className={status.text}>{status.label}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${company.verified ? "bg-green-100 text-green-700" : ""}`}
                  >
                    <CheckCircle className="h-3 w-3" />
                    {company.verified ? "Verified" : " Unverified"}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(company.createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;

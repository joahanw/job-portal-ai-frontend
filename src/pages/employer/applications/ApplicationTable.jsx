import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  Eye,
  FileText,
  MoreHorizontal,
  ScrollText,
  Sparkles,
  Star,
} from "lucide-react";
import React from "react";
import AiScoreCircle from "./AiScoreCircle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ApplicationTable = ({ applications, isFullMode }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {isFullMode && <TableHead className="w-8" />}
          <TableHead className="font-semibold text-slate-700">
            Candidate
          </TableHead>
          <TableHead className="font-semibold text-slate-700">
            Job Position
          </TableHead>
          <TableHead className="font-semibold text-slate-700">Status</TableHead>
          <TableHead className="font-semibold text-slate-700">
            AI Score
          </TableHead>
          <TableHead className="font-semibold text-slate-700">
            Applied
          </TableHead>
          <TableHead className="font-semibold text-slate-700 text-right">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => {
          const job = app.job;
          const location = [job.city, job.state, job.country]
            .filter(Boolean)
            .join(", ");
          return (
            <TableRow key={app.id}>
              {isFullMode && (
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Star />
                  </Button>
                </TableCell>
              )}
              {/* Candidate Detail */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={app.candidate?.profileImage} />
                    <AvatarFallback className="bg-primary text-white">
                      {app.candidate?.fullName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {app.candidate?.fullName}
                    </p>
                    <p className="text-xs text-slate-400">
                      {app.candidate?.email}
                    </p>
                  </div>
                </div>
              </TableCell>

              {/* Job Position */}
              <TableCell>
                <p className="text-sm text-slate-700 font-medium truncate">
                  {job?.title}
                </p>
                <p className="text-xs text-slate-400">{location}</p>
              </TableCell>

              {/* Job Status */}
              <TableCell>
                <Badge className="text-xs">{app.status}</Badge>
              </TableCell>

              {/* AI Score */}
              <TableCell>
                <AiScoreCircle score={app.screening?.score} />
              </TableCell>

              {/* Apply */}
              <TableCell className="text-xs text-slate-400">
                {app.appliedAt?.split("T")[0]}
              </TableCell>

              {/* Action */}
              <TableCell className="text-right">
                {isFullMode ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" /> Update Status
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Sparkles className="h-4 w-4 mr-2" /> View AI Screening
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ScrollText className="h-4 w-4 mr-2" /> Summerize Notes
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Star className="h-4 w-4 mr-2" /> Start Candidate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" /> Mark as Read
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button variant="ghost">
                    Review <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ApplicationTable;

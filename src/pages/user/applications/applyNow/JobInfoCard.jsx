import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatRupiah } from "@/lib/rupiahFormatter";
import {
  Bookmark,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
} from "lucide-react";
import React from "react";

const JobInfoCard = ({ job }) => {
  const location = [job.city, job.state, job.country]
    .filter(Boolean)
    .join(", ");
  return (
    <div>
      <Card>
        <CardContent className="">
          <div className="flex items-start gap-4">
            {/* Company Logo */}
            <div className="h-16 w-16 rounded-xl shrink-0 overflow-hidden">
              <img
                className="h-full w-full object-fill"
                src={job.company?.logoUrl}
                alt="Company Logo"
              />
            </div>

            <div className="flex-1 min-w-0">
              {/* Title Row + Bookmark  */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <span className="text-slate-700 font-medium text-sm">
                      {job.company?.name}
                    </span>
                    <CheckCircle2 className="h-4 w-4 fill-primary text-white shrink-0" />
                    <span className="text-slate-400 text-sm">
                      • {job.company?.industryType}
                    </span>
                    <span className="text-slate-400 text-sm">
                      • {job.company?.companySize}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-0.5 italic">
                    {job.company?.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobInfoCard;

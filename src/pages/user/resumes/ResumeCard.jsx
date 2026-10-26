import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Eye,
  Pencil,
  Sparkles,
  Star,
  StarOff,
  Trash,
  User,
} from "lucide-react";
import React from "react";

const completionScore = 90;
const ResumeCard = ({ resume }) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full border border-slate-200 bg-slate-100 overflow-hidden flex items-center justify-center shrink-0">
            {resume.personalInfo.profileImage ? (
              <img
                src={resume.personalInfo.profileImage}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="h-5 w-5 text" />
            )}
          </div>
          <div className="flex-1 flex items-start justify-between gap-2 min-w-0">
            <h3>{resume.title}</h3>
            <Badge>{resume.template}</Badge>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Completion</span>
            <span>{completionScore}%</span>
          </div>
          <Progress value={completionScore} className="h-1.5" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 mb-2">
          <Button className="flex-1" variant="outline" size="sm">
            <Eye className="h-3 w-3 mr-1" /> View
          </Button>
          <Button className="flex-1" variant="outline" size="sm">
            <Pencil className="h-3 w-3 mr-1" /> Edit
          </Button>
          <Button variant="ghost" size="icon">
            <Trash className="h-3 w-3 text-red-500 hover:text-red-900" />
          </Button>
        </div>

        <Button
          className="w-full text-xs text-purple-600 border-purple-200 hover:bg-purple-50 hover:text-purple-700 mb-2"
          variant="outline"
          size="sm"
        >
          <Sparkles className="h-3 w-3 mr-1.5" /> AI Careeer Feedback
        </Button>
        {!resume.isDefault ? (
          <Button
            className="w-full text-xs text-slate-500 hover:text-yellow-700 hover:bg-yellow-50"
            variant="ghost"
            size="sm"
          >
            <StarOff className="h-3 w-3 mr-1" />
            Set As Default
          </Button>
        ) : (
          <div className="w-full flex items-center justify-center gap-1 text-xs text-yellow-600 font-medium py-1">
            <Star className="h-3.5 w-3.5 fill-current" />
            Default Resume
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumeCard;

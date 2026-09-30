import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RotateCcw, Sparkles } from "lucide-react";
import React from "react";

const tips = [
  "Highlight your most relevant skills and how they align with the role",
  "Mention specific achivements with measurable results",
  "Show enthusiasm for the company and why you want to join",
  "Keep it concise - 3 to 4 focused paragraphs",
];
const CoverLetterEditor = ({ coverLetter, setCoverLetter, selectedResume }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
  };
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Cover Letter</h2>
        <p className="text-slate-600">
          Write a compelling cover letter or let AI help you
        </p>
      </div>

      {/* AI Generated Card */}
      <Card className="border-blue-200 bg-linear-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-2">
                AI-Powered Cover Letter
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Let our AI analyze the job description and your resume - skills,
                experience and summary - to create a personalized cover letter
                tailored to this position.
              </p>
              <Button className="py-5">
                <Sparkles className="h-4 w-4" /> Generate with AI
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Writing Tips */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">AI Writing Tips</h3>
            <Badge variant="secondary" className="gap-1">
              <Sparkles />
              Personalize
            </Badge>
          </div>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Editor */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">
                Your Cover Letter
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCoverLetter("")}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>

            <Textarea
              placeholder="Write your cover letter here or click Generate with AI..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="min-h-100 font-mono text-sm"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverLetterEditor;

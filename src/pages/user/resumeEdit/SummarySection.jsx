import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import React, { useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import { resumes } from "../applications/applyNow/dummyResume";
import { Textarea } from "@/components/ui/textarea";

const SummarySection = () => {
  const [text, setText] = useState("");
  const handleSave = () => {
    console.log("Summary Text", text);
  };
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">
        Write a compelling 2-4 sentence overview of your career, key skills, and
        career goals
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-blue-200 text-primary hover:bg-blue-50"
        >
          <Sparkles className="h-3 w-3" />
          Generate with AI
        </Button>
        <CopyFromMenu resumes={resumes} />
      </div>

      {/* FORM */}
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g I am a skilled and dedicated software developer with a strong understanding of web development. With a passion for creating user-friendly and efficient applications, I bring a unique blend of technical expertise and creativity to every project I undertake."
      />
      <p className="text-xs text-slate-400">{text.length} characters</p>
      <Button onClick={handleSave}>
        <Check className="h-4 w-4 mr-1.5" /> Save Summary
      </Button>
    </div>
  );
};

export default SummarySection;

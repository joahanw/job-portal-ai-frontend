import { Sparkles } from "lucide-react";
import React from "react";

const AiButton = ({ label, onClick, disabled }) => {
  return (
    <button
      className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 hover:text-violet-800
    disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      onClick={onClick}
      disabled={disabled}
    >
      <Sparkles className="h-3 w-3" />
      {label}
    </button>
  );
};

export default AiButton;

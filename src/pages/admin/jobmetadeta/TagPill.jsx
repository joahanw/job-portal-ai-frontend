import { cn } from "cn";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

const TagPill = ({ tag, colorClass, onEdit }) => {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
        colorClass,
      )}
    >
      <span>{tag}</span>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-1 cursor-pointer">
        <button onClick={onEdit}>
          <Pencil className="h-3 w-3" />
        </button>
        <button>
          <Trash2 className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default TagPill;

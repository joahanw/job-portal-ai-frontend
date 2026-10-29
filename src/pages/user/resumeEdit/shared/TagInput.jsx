import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import React, { useState } from "react";

const TagInput = ({ tags, onChange, placeholder = "Add tag..." }) => {
  const [val, setValue] = useState("");
  const add = () => {
    const v = val.trim();
    if (v && !tags.includes(v)) {
      onChange([...tags, v]);
      setValue("");
    }
  };
  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-blue-50 text-blue-700 rounded-full px-2.5 py-0.5 text-xs font-medium"
          >
            {tag}
            <button
              type="button"
              onClick={() => onChange(tags.filter((t) => t !== tag))}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Input
          value={val}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        <Button variant="outline" onClick={add}>
          add
        </Button>
      </div>
    </div>
  );
};

export default TagInput;

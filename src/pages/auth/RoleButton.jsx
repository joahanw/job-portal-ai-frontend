import { cn } from "cn";
import { CheckCircle, Users } from "lucide-react";
import React from "react";

const RoleButton = ({
  setValue,
  selectedRole,
  name,
  description,
  role,
  icon: Icon,
}) => {
  return (
    <button
      type="button"
      onClick={() => setValue("role", role)}
      className={cn(
        "relative flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200",
        selectedRole === role
          ? "border-primary bg-primary/5 shadow-md"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm",
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
          selectedRole === role ? "bg-primary text-white " : "bg-slate-100 ",
        )}
      >
        <Icon />
      </div>
      <div>
        <p
          className={cn(
            "text-sm font-semibold",
            selectedRole === role ? "text-primary" : "text-slate-700",
          )}
        >
          {name}
        </p>
        <p>{description}</p>
      </div>
      {selectedRole === role && (
        <div className="absolute top-3 right-3 text-primary w-5 h-5">
          <CheckCircle />
        </div>
      )}
    </button>
  );
};

export default RoleButton;

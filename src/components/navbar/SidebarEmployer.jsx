import { Sparkles } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "cn";

const SidebarEmployer = ({ navigation }) => {
  return (
    <div className="relative flex flex-col bg-slate-900 transition-all duration-300 shrink-0 w-64">
      {/* Brand Logo */}
      <div className="flex h-16 items-center justify-between border-b border-white/5 px-4 shrink-0">
        <Link to="/employer" className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/40">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white truncate">
              JOHANWORK.AI
            </p>
            <p className="text-[10px] text-slate-500 leading-tight">
              Employer Dashboard
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <nav className="py-4 space-y-5 px-3">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="mb-1.5 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                {section.title}
              </h3>
              {/* Nav Items */}
              <div>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      end={item.href === "/employer/jobs"}
                      title={item.name}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium transition-all duration-150 px-3",
                          isActive
                            ? "bg-primary/90 text-white shadow-sm shadow-primary/30"
                            : "text-slate-400 hover:text-white hover:bg-white/5",
                        )
                      }
                    >
                      <Icon className="h-5 w-5" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};

export default SidebarEmployer;

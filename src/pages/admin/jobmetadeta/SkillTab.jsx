import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "cn";
import {
  CheckCircle,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import SkillFormDialog from "./SkillFormDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SKILL_CATEGORIES = [
  "ALL",
  "PROGRAMMING_LANGUAGE",
  "FRAMEWORK",
  "DATABASE",
  "CLOUD PLATFORM",
  "DEVOPS",
  "DESIGN",
  "SOFT_SKILL",
  "TOOL",
  "LANGUAGE",
  "OTHER",
];
const SkillTab = ({ skills }) => {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("ALL");
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const filtered = useMemo(() => {
    let list = [...skills];
    if (search.trim()) {
      const q = search.toLocaleLowerCase();
      list = list.filter(
        (s) =>
          s.name?.toLocaleLowerCase().includes(q) ||
          s.slug?.toLocaleLowerCase().includes(q),
      );
    }
    if (catFilter !== "ALL") {
      list = list.filter((s) => s.category === catFilter);
    }
    return list;
  }, [skills, search, catFilter]);
  const openEdit = (skill) => {
    setEditTarget(skill);
    setFormOpen(true);
  };

  const handleDelete = (skill) => {
    console.log("Delete Category", skill);
    // Actual Delete API Call
    setFormOpen(false);
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <Input
            className={"pl-9 h-9 bg-white"}
            placeholder="Sarch Skills...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span>
            {filtered.length}/{skills.length}
          </span>
          <Button
            size={"sm"}
            onClick={() => {
              setFormOpen(true);
              setEditTarget(null);
              console.log("Form open trigger");
            }}
          >
            <Plus className="h-3.5 w-3.5" />
            Add Skills
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <section className="flex items-center gap-2">
        {/* <button onClick={() => setCatFilter("all")}>All</button> */}
        {SKILL_CATEGORIES.map((item) => (
          <button
            onClick={() => setCatFilter(item)}
            className={cn(
              "text-xs font-semibold px-3 py-1 rounded-full border transition-colors",
              catFilter === item
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50",
            )}
          >
            {item.toLocaleLowerCase()}
          </button>
        ))}
      </section>

      {/* Category TABLE */}
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider w-10 pl-6">
                #
              </TableHead>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Name
              </TableHead>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Slug
              </TableHead>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Category
              </TableHead>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((skill, index) => {
              return (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <p className="text-sm font-semibold text-slate-900">
                      {skill.name}
                    </p>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {skill.slug}
                    </code>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{skill.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${skill.active ? "bg-green-100 text-green-700" : "bg-red-500 text-red-50"}`}
                    >
                      {skill.active && <CheckCircle className="h-3.5 w-3.5" />}
                      {skill.active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuItem onClick={() => openEdit(skill)}>
                            <Pencil className="h-3.5 w-3.5 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(skill)}
                            className="text-red-600 focus:text-red-600 focus:bg-red-50"
                          >
                            <Trash2 className="h-3.5 w-3.5 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Dialog Popup Form */}
      <SkillFormDialog
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditTarget(null);
        }}
        initialData={editTarget}
        isEdit={!!editTarget}
      />
    </div>
  );
};

export default SkillTab;

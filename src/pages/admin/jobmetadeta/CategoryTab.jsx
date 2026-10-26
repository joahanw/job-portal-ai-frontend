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
import { formatDate } from "date-fns";
import {
  CheckCircle,
  ChevronRight,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import CategoryFormDialog from "./CategoryFormDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoryTab = ({ categories }) => {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  const filtered = useMemo(() => {
    let list = [...categories];
    if (search.trim()) {
      const q = search.toLocaleLowerCase();
      list = list.filter(
        (c) =>
          c.name?.toLocaleLowerCase().includes(q) ||
          c.description?.toLocaleLowerCase().includes(q),
      );
    }
    return list;
  }, [categories, search]);

  const rootCategories = useMemo(
    () => categories.filter((c) => !c.parentId),
    [categories],
  );

  const openEdit = (cat) => {
    setEditTarget(cat);
    setFormOpen(true);
  };

  const handleDelete = (cat) => {
    console.log("Delete Category", cat);
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
            placeholder="Sarch Categories...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span>
            {filtered.length}/{categories.length}
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
            Add Category
          </Button>
        </div>
      </div>

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
                Parent
              </TableHead>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Sub-category
              </TableHead>
              <TableHead className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((category, index) => {
              return (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {category.parentId && (
                        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                      )}
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {category.name}
                        </p>
                        <p className="text-xs text-slate-400 truncate max-w-[220px] ">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {category.slug}
                    </code>
                  </TableCell>
                  <TableCell>
                    {category.parentName ? (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium ">
                        {category.parentName}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>
                    <Badge
                      className={`${category.active ? "bg-green-100 text-green-700" : "bg-red-500 text-red-50"}`}
                    >
                      {category.active && (
                        <CheckCircle className="h-3.5 w-3.5" />
                      )}
                      {category.active ? "Active" : "Inactive"}
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
                          <DropdownMenuItem onClick={() => openEdit(category)}>
                            <Pencil className="h-3.5 w-3.5 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(category)}
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
      <CategoryFormDialog
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditTarget(null);
        }}
        rootCategories={rootCategories}
        initialData={editTarget}
        isEdit={!!editTarget}
      />
    </div>
  );
};

export default CategoryTab;

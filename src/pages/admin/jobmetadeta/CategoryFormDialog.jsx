import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";

const CategoryFormDialog = ({
  isEdit,
  open,
  onClose,
  onSubmit,
  initialData,
  rootCategories,
}) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    iconUrl: "",
    parentId: "none",
  });
  const set = (field) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", form);
  };

  useEffect(() => {
    if (open) {
      setForm({
        name: initialData?.name || "",
        description: initialData?.description || "",
        iconUrl: initialData?.iconUrl || "",
        parentId: initialData?.parentId
          ? String(initialData?.parentId)
          : "none",
      });
    }
  }, [open, initialData]);
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Category" : "Add Category"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-700">
              Name <span>*</span>
            </Label>
            <Input
              placeholder="e.g Software Engineering"
              value={form.name}
              onChange={set("name")}
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-700">
              Description
            </Label>
            <Textarea
              placeholder="provide the description"
              value={form.description}
              onChange={set("description")}
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-700">
              Icon Url
            </Label>
            <Input
              placeholder="Prodvide icon url"
              value={form.iconUrl}
              onChange={set("iconUrl")}
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-700">
              Parent Category
            </Label>
            <Select value={form.parentId} onValueChange={set("parentId")}>
              <SelectTrigger className="text-sm w-full">
                <SelectValue placeholder="Root Level (No Parent)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Root Level (No Parent)</SelectItem>
                {rootCategories.map((item) => (
                  <SelectItem value={String(item.id)} key={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              className="flex-1"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600"
              onClick={onClose}
            >
              {isEdit ? "Save Cahanges" : "Create Category"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryFormDialog;

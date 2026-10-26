import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

const TagFormDialog = ({ isEdit, open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
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
      });
    }
  }, [open, initialData]);
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Tag" : "Add Tag"}</DialogTitle>
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
              {isEdit ? "Save Cahanges" : "Create Tag"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TagFormDialog;

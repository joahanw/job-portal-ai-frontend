import React, { useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import AddButton from "./shared/AddButton";
import { resumes } from "../applications/applyNow/dummyResume";
import { awards } from "./shared/awardsData";
import SectionCard from "./shared/SectionCard";
import SectionDialog from "../resumes/SectionDialog";
import FRow from "./shared/FRow";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import DeleteConfirm from "./shared/DeleteConfirm";
import { formatDate, formatMonthYear } from "@/lib/timeAgo";
import { Textarea } from "@/components/ui/textarea";

const awardsData = {
  title: "",
  issuedBy: "",
  awardDate: "",
  description: "",
};
const AwardsSection = () => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDelete] = useState(null);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(awardsData);

  const openEdit = (data) => {
    setEdit(data);
    setOpen(true);
    setForm({ ...awardsData, ...data });
  };
  const openAdd = () => {
    setOpen(true);
    setForm(awardsData);
    setEdit(null);
  };

  const save = () => {
    setOpen(false);
    console.log("Educations Data", form);
  };

  const set = (field) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleDelete = () => {
    console.log("deleting", deleteItem);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <CopyFromMenu resumes={resumes} />
        <AddButton onClick={openAdd} label="Add Awards" />
      </div>

      {awards.map((item) => (
        <SectionCard
          key={item.id}
          item={item}
          onEdit={openEdit}
          onDelete={setDelete}
        >
          <p className="font-semibold text-slate-900">{item.title}</p>
          <p className="text-sm text-slate-600 font-medium">{item.issuedBy}</p>
          <p className="text-sm text-slate-600 shadow-slate-500">
            {item.description}
          </p>
          <p className="text-sm text-slate-600">
            {formatMonthYear(item.awardDate)}
          </p>
        </SectionCard>
      ))}
      {/* Dialog Form Popup Add Certification */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Awards" : "Add Awards"}
        onSave={save}
      >
        <FRow label="Award Title *">
          <Input
            value={form.title}
            onChange={set("title")}
            placeholder="e.g First Place at Hackathon"
          />
        </FRow>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Issued By">
            <Input
              value={form.issuedBy}
              onChange={set("issuedBy")}
              placeholder="TechCrop Inc."
            />
          </FRow>
          <FRow label="Award Date">
            <Input
              type="date"
              value={form.awardDate}
              onChange={set("awardDate")}
            />
          </FRow>
        </div>
        <FRow label="Description *">
          <Textarea
            value={form.description}
            onChange={set("description")}
            placeholder="Describe your achievement"
            row={3}
          />
        </FRow>
      </SectionDialog>

      {/* Delete Confirm Dialog */}
      <DeleteConfirm
        open={!!deleteItem}
        onClose={() => setDelete(null)}
        onConfirm={handleDelete}
        label="Certification"
      />
    </div>
  );
};

export default AwardsSection;

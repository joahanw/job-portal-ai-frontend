import React, { useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import AddButton from "./shared/AddButton";
import { resumes } from "../applications/applyNow/dummyResume";
import SectionCard from "./shared/SectionCard";
import { educations } from "./shared/EducationData";
import SectionDialog from "../resumes/SectionDialog";
import FRow from "./shared/FRow";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/timeAgo";
import DeleteConfirm from "./shared/DeleteConfirm";

const educationData = {
  institutionName: "",
  degree: "",
  fieldOfStudy: "",
  grade: "",
  startDate: "",
  endDate: "",
  isCurrentlyStudying: false,
  description: "",
};
const EducationSection = () => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDelete] = useState(null);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(educationData);

  const openEdit = (data) => {
    setEdit(data);
    setOpen(true);
    setForm({ ...educationData, ...data, endDate: data.endDate ?? "" });
  };
  const openAdd = () => {
    setOpen(true);
    setForm(educationData);
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
        <AddButton onClick={openAdd} label="Add Education" />
      </div>
      {educations.map((item) => (
        <SectionCard
          key={item.id}
          item={item}
          onEdit={openEdit}
          onDelete={setDelete}
        >
          <p className="font-semibold text-slate-900">{item.institutionName}</p>
          <p className="text-sm text-slate-600 ">
            {item.fieldOfStudy}
            {item.degree && `. (${item.degree})`}
          </p>
          <p className="text-xs text-slate-600 ">
            {formatDate(item.startDate)} -{" "}
            {item.isCurrentJob ? "Present" : formatDate(item.endDate)}
            {item.grade && `. GPA: (${item.grade})`}
          </p>
        </SectionCard>
      ))}

      {/* Dialog Form Popup Add Education */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Education" : "Add Education"}
        onSave={save}
      >
        <FRow label="Institution *">
          <Input
            value={form.institutionName}
            onChange={set("institutionName")}
            placeholder="University of XYZ"
          />
        </FRow>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Degree *">
            <Input
              value={form.degree}
              onChange={set("degree")}
              placeholder="B.S. Computer Science"
            />
          </FRow>
          <FRow label="Field of Study *">
            <Input
              value={form.fieldOfStudy}
              onChange={set("fieldOfStudy")}
              placeholder="Computer Science"
            />
          </FRow>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <FRow label="Start Date *">
            <Input
              type="date"
              value={form.startDate}
              onChange={set("startDate")}
            />
          </FRow>
          <FRow label="End Date">
            <Input
              type="date"
              value={form.endDate}
              onChange={set("endDate")}
              disabled={form.isCurrentlyStudying}
            />
          </FRow>
          <FRow label="Grade / GPA">
            <Input
              value={form.grade}
              onChange={set("grade")}
              placeholder="3.5 / 4.0"
            />
          </FRow>
        </div>

        <Field orientation="horizontal">
          <Checkbox
            checked={form.isCurrentlyStudying}
            onCheckedChange={set("isCurrentlyStudying")}
          />
          <Label>Currently studying</Label>
        </Field>
        <div className="space-y-1">
          <Label>Description</Label>
          <Textarea
            value={form.description}
            onChange={set("description")}
            placeholder="Thesis, honors, achievements, etc."
            row={3}
          />
        </div>
      </SectionDialog>

      {/* Delete Confirm Dialog */}
      <DeleteConfirm
        open={!!deleteItem}
        onClose={() => setDelete(null)}
        onConfirm={handleDelete}
        label="Educations"
      />
    </div>
  );
};

export default EducationSection;

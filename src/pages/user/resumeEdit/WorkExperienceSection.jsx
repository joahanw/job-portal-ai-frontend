import React, { useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import { resumes } from "../applications/applyNow/dummyResume";
import AddButton from "./shared/AddButton";
import { workExperienceData } from "./shared/WorkExperienceData";
import SectionCard from "./shared/SectionCard";
import { formatDate } from "@/lib/timeAgo";
import SectionDialog from "../resumes/SectionDialog";
import FRow from "./shared/FRow";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_TYPE } from "@/lib/userStatus";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import TagInput from "./shared/TagInput";
import DeleteConfirm from "./shared/DeleteConfirm";

const experienceData = {
  companyName: "",
  companyLogoUrl: "",
  jobTitle: "",
  employmentType: "FULL_TIME",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
  isCurrentJob: false,
  technologies: [],
};
const WorkExperienceSection = () => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDelete] = useState(null);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(experienceData);

  const openEdit = (data) => {
    setEdit(data);
    setOpen(true);
    setForm({ ...experienceData, ...data, endDate: data.endDate ?? "" });
  };
  const openAdd = () => {
    setOpen(true);
    setForm(experienceData);
    setEdit(null);
  };

  const save = () => {
    setOpen(false);
    console.log("Work Experience Data", form);
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
        <AddButton onClick={openAdd} label="AddExperience" />
      </div>
      {workExperienceData.map((item) => (
        <SectionCard
          key={item.id}
          item={item}
          onEdit={openEdit}
          onDelete={setDelete}
        >
          <p className="font-semibold text-slate-900">{item.jobTitle}</p>
          <p className="text-sm text-slate-600 ">
            {item.companyName}
            {item.location && `. (${item.location})`}
          </p>
          <p className="text-xs text-slate-600 ">
            {formatDate(item.startDate)} -{" "}
            {item.isCurrentJob ? "Present" : formatDate(item.endDate)}
          </p>
          {item.technologies?.length && (
            <div className="flex flex-wrap gap-1 mt-1">
              {item.technologies.map((t) => (
                <span
                  className="text-xs bg-slate-100 text-slate-600 rounded px-1.5 py-0.5"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </SectionCard>
      ))}

      {/* Dialog Form Popup Add Experience */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Experience" : "Add Experience"}
        onSave={save}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Company *">
            <Input
              value={form.companyName}
              onChange={set("companyName")}
              placeholder="e.g JohanWork pvt."
            />
          </FRow>
          <FRow label="Job Title *">
            <Input
              value={form.jobTitle}
              onChange={set("jobTitle")}
              placeholder="e.g Backend Developer"
            />
          </FRow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Employment Types">
            <Select
              value={form.employmentType}
              onValueChange={set("employmentType")}
            >
              <SelectTrigger className="border-slate-200 text-sm w-full">
                <SelectValue placeholder="Select Employment Type " />
              </SelectTrigger>
              <SelectContent>
                {JOB_TYPE.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FRow>
          <FRow label="Location *">
            <Input
              value={form.location}
              onChange={set("location")}
              placeholder="City / Remote"
            />
          </FRow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              disabled={form.isCurrentJob}
            />
          </FRow>
        </div>
        <Field orientation="horizontal">
          <Checkbox
            checked={form.isCurrentJob}
            onCheckedChange={set("isCurrentJob")}
          />
          <Label>Currently working here</Label>
        </Field>
        <div className="space-y-1">
          <div className="flex items-center justify-between ">
            <Label>Description</Label>
            <Button type="button" variant="ghost" size="sm">
              Generate Bullets
            </Button>
          </div>
          <Textarea
            value={form.description}
            onChange={set("description")}
            placeholder="Key achivements and responsibilities..."
            row={3}
          />
        </div>
        <FRow label="Technologies *">
          <TagInput
            tags={form.technologies}
            value={form.technologies}
            onChange={set("technologies")}
            placeholder="e.g React, Node.js, ..."
          />
        </FRow>

        <FRow label="Company Logo URL *">
          <Input
            value={form.companyLogoUrl}
            onChange={set("companyLogoUrl")}
            placeholder="https://..."
          />
        </FRow>
      </SectionDialog>

      {/* Delete Confirm Dialog */}
      <DeleteConfirm
        open={!!deleteItem}
        onClose={() => setDelete(null)}
        onConfirm={handleDelete}
        label="Work Experience"
      />
    </div>
  );
};

export default WorkExperienceSection;

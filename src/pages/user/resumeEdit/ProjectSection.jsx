import React, { useState } from "react";
import { resumes } from "../applications/applyNow/dummyResume";
import CopyFromMenu from "./shared/CopyFromMenu";
import AddButton from "./shared/AddButton";
import { projects } from "./shared/ProjectData";
import SectionCard from "./shared/SectionCard";
import { formatDate } from "@/lib/timeAgo";
import SectionDialog from "../resumes/SectionDialog";
import FRow from "./shared/FRow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import TagInput from "./shared/TagInput";
import DeleteConfirm from "./shared/DeleteConfirm";

const projectData = {
  title: "",
  description: "",
  technologies: [],
  projectUrl: "",
  sourceCodeUrl: "",
  startDate: "",
  endDate: "",
  isOngoing: false,
};
const ProjectSection = () => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDelete] = useState(null);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(projectData);

  const openEdit = (data) => {
    setEdit(data);
    setOpen(true);
    setForm({ ...projectData, ...data });
  };
  const openAdd = () => {
    setOpen(true);
    setForm(projectData);
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
        <AddButton onClick={openAdd} label="Add Project" />
      </div>

      {projects.map((item) => (
        <SectionCard
          key={item.id}
          item={item}
          onEdit={openEdit}
          onDelete={setDelete}
        >
          <p className="font-semibold text-slate-900">{item.title}</p>
          <p className="text-sm text-slate-600 ">{item.description}</p>
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
          <div className="space-x-2 text-[10px] text-white font-medium mt-4">
            <a
              className="bg-mist-500 rounded-sm p-1 hover:bg-mist-800 transition-all duration-300"
              href={item.projectUrl}
              target="_blank"
            >
              Demo ↗
            </a>
            <a
              className="bg-mist-500 rounded-sm p-1 hover:bg-mist-800 transition-all duration-300"
              href={item.sourceCodeUrl}
              target="_blank"
            >
              Source ↗
            </a>
          </div>
        </SectionCard>
      ))}
      {/* Dialog Form Popup Add Project */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Project" : "Add Project"}
        onSave={save}
      >
        <FRow label="Title *">
          <Input
            value={form.title}
            onChange={set("title")}
            placeholder="Ecommerce Platform"
          />
        </FRow>
        <FRow label="Description *">
          <Textarea
            value={form.description}
            onChange={set("description")}
            placeholder="e.g I responsiblitys..."
            row={3}
          />
        </FRow>

        <FRow label="Technologies *">
          <TagInput
            tags={form.technologies}
            value={form.technologies}
            onChange={set("technologies")}
            placeholder="e.g React, Node.js, ..."
          />
        </FRow>

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
              disabled={form.isOngoing}
            />
          </FRow>
        </div>

        <Field orientation="horizontal">
          <Checkbox
            checked={form.isOngoing}
            onCheckedChange={set("isOngoing")}
          />
          <Label>Ongoing project</Label>
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Live URL">
            <Input
              value={form.projectUrl}
              onChange={set("projectUrl")}
              placeholder="https://..."
            />
          </FRow>
          <FRow label="Source Code URL">
            <Input
              value={form.sourceCodeUrl}
              onChange={set("sourceCodeUrl")}
              placeholder="https://github.com/..."
            />
          </FRow>
        </div>
      </SectionDialog>

      {/* Delete Confirm Dialog */}
      <DeleteConfirm
        open={!!deleteItem}
        onClose={() => setDelete(null)}
        onConfirm={handleDelete}
        label="Project"
      />
    </div>
  );
};

export default ProjectSection;

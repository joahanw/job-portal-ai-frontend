import React, { useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import { resumes } from "../applications/applyNow/dummyResume";
import AddButton from "./shared/AddButton";
import { skills } from "./shared/skillsData";
import SectionCard from "./shared/SectionCard";
import { Progress } from "@/components/ui/progress";
import { PROFICIENCY_LEVEL } from "@/lib/userStatus";
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
import DeleteConfirm from "./shared/DeleteConfirm";

const skillData = {
  skillName: "",
  proficiencyLevel: "INTERMEDIATE",
  yearsOfExperience: "",
};

const SkillSection = () => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDelete] = useState(null);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(skillData);

  const openEdit = (data) => {
    setEdit(data);
    setOpen(true);
    setForm({ ...skillData, ...data });
  };
  const openAdd = () => {
    setOpen(true);
    setForm(skillData);
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
        <AddButton onClick={openAdd} label="Add Skills" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((item) => {
          const level = PROFICIENCY_LEVEL.find(
            (x) => x.value === item.proficiencyLevel,
          );
          return (
            <SectionCard
              key={item.id}
              item={item}
              onEdit={openEdit}
              onDelete={setDelete}
            >
              <div className="flex items-center justify-between mb-1.5">
                <p className="font-semibold text-slate-900">{item.skillName}</p>
                <p className="text-sm text-slate-600 ">{level?.label}</p>
              </div>
              <Progress
                value={level?.percent}
                className="w-full h-1.5 bg-slate-300"
                indicatorClassName={level?.color}
              />
              <p className="text-xs text-slate-400 mt-1">
                {item.yearsOfExperience} yr
                {item.yearsOfExperience !== 1 ? "s" : ""}
              </p>
            </SectionCard>
          );
        })}
      </div>

      {/* Dialog Form Popup Add Education */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Skills" : "Add Skills"}
        onSave={save}
      >
        <FRow label="Skill Name *">
          <Input
            value={form.skillName}
            onChange={set("skillName")}
            placeholder="e.g React, AWS, ..."
          />
        </FRow>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Proficiency Level *">
            <Select
              value={form.proficiencyLevel}
              onValueChange={set("proficiencyLevel")}
            >
              <SelectTrigger className="border-slate-200 text-sm w-full">
                <SelectValue placeholder="Select Proficiency Level " />
              </SelectTrigger>
              <SelectContent>
                {PROFICIENCY_LEVEL.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FRow>
          <FRow label="Years of Experience">
            <Input
              type="number"
              min={0}
              max={50}
              value={form.yearsOfExperience}
              onChange={set("yearsOfExperience")}
              placeholder="3"
            />
          </FRow>
        </div>
      </SectionDialog>

      {/* Delete Confirm Dialog */}
      <DeleteConfirm
        open={!!deleteItem}
        onClose={() => setDelete(null)}
        onConfirm={handleDelete}
        label="Skills"
      />
    </div>
  );
};

export default SkillSection;

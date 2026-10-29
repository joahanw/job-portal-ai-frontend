import React, { useState } from "react";
import DeleteConfirm from "./shared/DeleteConfirm";
import CopyFromMenu from "./shared/CopyFromMenu";
import { resumes } from "../applications/applyNow/dummyResume";
import AddButton from "./shared/AddButton";
import { languages } from "./shared/languageData";
import SectionCard from "./shared/SectionCard";
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
import { LANGUAGE_PROFICIENCY } from "@/lib/userStatus";
import { Pencil, Trash2 } from "lucide-react";

const awardsData = {
  languageName: "",
  proficiency: "CONVERSATIONAL",
};
const LanguageSection = () => {
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
        <AddButton onClick={openAdd} label="Add Languages" />
      </div>

      <div className="flex flex-wrap gap-3">
        {languages.map((item) => {
          const level = LANGUAGE_PROFICIENCY.find(
            (x) => x.value === item.proficiency,
          );
          return (
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${level.style}`}
            >
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.languageName}</p>
                <p className="text-xs opacity-75">{level.label}</p>
              </div>
              <div className="flex gap-0.5 ml-1">
                <button onClick={() => openEdit(item)}>
                  <Pencil className="h-3 w-3" />
                </button>
                <button onClick={() => setDelete(item)}>
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dialog Form Popup Add Certification */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Languages" : "Add Languages"}
        onSave={save}
      >
        <FRow label="Language Name *">
          <Input
            value={form.languageName}
            onChange={set("languageName")}
            placeholder="e.g English"
          />
        </FRow>
        <FRow label="Proficiency *">
          <Select value={form.proficiency} onValueChange={set("proficiency")}>
            <SelectTrigger className="border-slate-200 text-sm w-full">
              <SelectValue placeholder="Select Proficiency Level " />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGE_PROFICIENCY.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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

export default LanguageSection;

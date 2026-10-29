import React, { useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import { resumes } from "../applications/applyNow/dummyResume";
import AddButton from "./shared/AddButton";
import { certifications } from "./shared/certificationData";
import SectionCard from "./shared/SectionCard";
import { formatDate, formatMonthYear } from "@/lib/timeAgo";
import SectionDialog from "../resumes/SectionDialog";
import FRow from "./shared/FRow";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import DeleteConfirm from "./shared/DeleteConfirm";
import { Input } from "@/components/ui/input";

const certificationData = {
  name: "",
  issuingOrganization: "",
  issueDate: "",
  expiryDate: "",
  credentialId: "",
  credentialUrl: "",
  noExpiry: false,
};

const CertificationSection = () => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDelete] = useState(null);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState(certificationData);

  const openEdit = (data) => {
    setEdit(data);
    setOpen(true);
    setForm({ ...certificationData, ...data, noExpiry: !data.expiryDate });
  };
  const openAdd = () => {
    setOpen(true);
    setForm(certificationData);
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

  const toggleNoExpiry = (checked) => {
    setForm((prev) => ({
      ...prev,
      noExpiry: checked,
      expiryDate: checked ? "" : prev.expiryDate,
    }));
  };

  const handleDelete = () => {
    console.log("deleting", deleteItem);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <CopyFromMenu resumes={resumes} />
        <AddButton onClick={openAdd} label="Add Certification" />
      </div>

      {certifications.map((item) => (
        <SectionCard
          key={item.id}
          item={item}
          onEdit={openEdit}
          onDelete={setDelete}
        >
          <p className="font-semibold text-slate-900">{item.name}</p>
          <p className="text-sm text-slate-600">{item.issuingOrganization}</p>
          <p className="text-sm text-slate-600">
            {formatMonthYear(item.issueDate)}{" "}
            {item.expiryDate
              ? `- ${formatMonthYear(item.expiryDate)}`
              : "· No Expiry"}
          </p>
          {item.credentialUrl && (
            <a
              className="bg-mist-500 text-white text-[10px] cursor-pointer rounded-sm p-1 hover:bg-mist-800 transition-all duration-300"
              href={item.credentialUrl}
              target="_blank"
            >
              Verify ↗
            </a>
          )}
        </SectionCard>
      ))}
      {/* Dialog Form Popup Add Certification */}
      <SectionDialog
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? "Edit Certification" : "Add Certification"}
        onSave={save}
      >
        <FRow label="Certification Name *">
          <Input
            value={form.name}
            onChange={set("name")}
            placeholder="e.g AWS Cloud Practitioner"
          />
        </FRow>
        <FRow label="Issuing Organization *">
          <Input
            value={form.issuingOrganization}
            onChange={set("issuingOrganization")}
            placeholder="e.g Amazon Web Services"
          />
        </FRow>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Issue Date *">
            <Input
              type="date"
              value={form.issueDate}
              onChange={set("issueDate")}
            />
          </FRow>
          <FRow label="Expiry Date">
            <Input
              type="date"
              value={form.expiryDate}
              onChange={set("expiryDate")}
              disabled={form.noExpiry}
            />
          </FRow>
        </div>
        <Field orientation="horizontal">
          <Checkbox checked={form.noExpiry} onCheckedChange={toggleNoExpiry} />
          <Label>This credential does not expire</Label>
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FRow label="Credential ID">
            <Input
              value={form.credentialId}
              onChange={set("credentialId")}
              placeholder="EXM-123456"
            />
          </FRow>
          <FRow label="Credential URL">
            <Input
              value={form.credentialUrl}
              onChange={set("credentialUrl")}
              placeholder="https://..."
            />
          </FRow>
        </div>
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

export default CertificationSection;

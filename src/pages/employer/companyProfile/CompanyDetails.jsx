import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";
import React, { useState } from "react";

const CompanyDetails = () => {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    descritpion: "",
    logoUrl: "",
    coverImageUrl: "",
    website: "",
    email: "",
    phone: "",
    foundedYear: "",
    companySize: "",
    companyType: "",
    industryType: "",
    registerNumber: "",
  });
  const set = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <form className="space-y-6" action="">
        {/* Identity */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider border-b border-slate-100 pb-2">
            Identity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input
                value={form.name}
                onChange={set("name")}
                placeholder="Enter company name"
                required
                className="border-slate-200 "
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Tagline <span className="text-red-500">*</span>
              </Label>
              <Input
                value={form.tagline}
                onChange={set("tagline")}
                placeholder="Enter company tagline"
                required
                className="border-slate-200 "
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-600">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              value={form.descritpion}
              onChange={set("descritpion")}
              placeholder="Enter company description"
              required
              className="border-slate-200 "
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Logo URL
              </Label>
              <Input
                value={form.logoUrl}
                onChange={set("logoUrl")}
                placeholder="Enter logo URL"
                required
                className="border-slate-200 "
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Cover Image URL
              </Label>
              <Input
                value={form.coverImageUrl}
                onChange={set("coverImageUrl")}
                placeholder="Enter cover image URL"
                required
                className="border-slate-200 "
              />
            </div>
          </div>
        </section>

        {/* Contect and Web details */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider border-b border-slate-100 pb-2">
            Contact & Web
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Company Website
              </Label>
              <Input
                value={form.website}
                onChange={set("website")}
                placeholder="Enter company website"
                className="border-slate-200 "
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Company Email
              </Label>
              <Input
                value={form.email}
                onChange={set("email")}
                placeholder="Enter company email"
                className="border-slate-200 "
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-600">
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                value={form.phone}
                onChange={set("phone")}
                placeholder="Enter company phone"
                className="border-slate-200 "
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end pt-2">
          <Button
            className="gap-2 bg-primary hover:bg-primary/90"
            type="submit"
            onClick={handleSubmit}
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyDetails;

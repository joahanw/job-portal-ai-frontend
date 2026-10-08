import { Button } from "@/components/ui/button";
import { Briefcase, Layers, MapPin, Plus, Tags } from "lucide-react";
import React, { useState } from "react";
import JobSection from "./JobSection";
import JobField from "./JobField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AiButton from "./AiButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "./categories";
import MultiSelect from "./MultiSelect";
import { skills } from "./skills";
import { tags } from "./tags";

const experienceLevel = [
  { label: "Entry Level", value: "ENTRY_LEVEL" },
  { label: "Junior", value: "JUNIOR" },
  { label: "Mide Level", value: "MID_LEVEL" },
  { label: "Senior Level", value: "SENIOR_LEVEL" },
  { label: "Lead", value: "LEAD" },
  { label: "Executive", value: "EXECUTIVE" },
];
const jobType = [
  { label: "Full time", value: "FULL_TIME" },
  { label: "Part time", value: "PART_TIME" },
  { label: "Contract", value: "CONTRACT" },
  { label: "Internship", value: "INTERNSHIP" },
  { label: "Freelance", value: "FREELANCE" },
  { label: "Remote", value: "REMOTE" },
];
const workMode = [
  { label: "Remote", value: "REMOTE" },
  { label: "Onsite", value: "ON_SITE" },
  { label: "Hybrid", value: "HYBRID" },
];

const CreateJob = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
    categoryId: "",
    experienceLevel: "",
    jobType: "",
    workMode: "",
    openings: 0,
    salary: "",
    location: "",
    skillIds: [],
    tagIds: [],
    city: "",
    state: "",
    country: "",
    zipCode: "",
    address: "",
  });
  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }));
  const setVal = (f) => (v) => setForm((prev) => ({ ...prev, [f]: v }));

  return (
    <div className="space-y-5">
      <section>
        <h1 className="text-2xl font-bold text-slate-900">Post a New Job</h1>
        <p className="text-sm text-slate-500 mt-1">
          Fill in the details below. You can save a draft and publish later
        </p>
      </section>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Secrtion */}
        <div className="xl:col-span-2 space-y-5">
          {/* Job Details */}
          <JobSection icon={Briefcase} title={"Job Details"}>
            <JobField label={"Job Title"} required>
              <Input
                value={form.title}
                placeholder="e.g. Senior Backend developer"
                className="border-slate-200"
                onChange={set("title")}
              />
            </JobField>
            <JobField
              label={"Job Description"}
              required
              action={
                <AiButton
                  label={"Generate with AI"}
                  disabled={!form.title.trim()}
                />
              }
            >
              <Textarea
                value={form.description}
                placeholder="Describe the role, culture and what makes position exciting..."
                className="border-slate-200 resize-none text-sm "
                onChange={set("description")}
              />
            </JobField>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <JobField
                label={"Requirements"}
                required
                action={
                  <AiButton
                    label={"Auto fill from title"}
                    disabled={!form.title.trim()}
                  />
                }
              >
                <Textarea
                  value={form.requirements}
                  placeholder="List the skills, experience and qualifications needed for this role..."
                  className="border-slate-200 resize-none text-sm "
                  onChange={set("requirements")}
                />
              </JobField>
              <JobField
                label={"Responsibilities"}
                required
                action={
                  <AiButton
                    label={"Auto fill from title"}
                    disabled={!form.title.trim()}
                  />
                }
              >
                <Textarea
                  value={form.responsibilities}
                  placeholder="List the key responsibilities for this role..."
                  className="border-slate-200 resize-none text-sm "
                />
              </JobField>
            </div>
            <JobField
              label={"Benefits"}
              required
              action={
                <AiButton
                  label={"Auto fill from title"}
                  disabled={!form.title.trim()}
                />
              }
            >
              <Textarea
                value={form.benefits}
                placeholder="Healts insurance, equity, remote work, gym membership..."
                className="border-slate-200 resize-none text-sm "
                onChange="set('benefits')"
              />
            </JobField>
          </JobSection>

          {/* Classification */}
          <JobSection icon={Layers} title={"Classifications"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <JobField label={"Category"} required>
                <Select value={form.categoryId} onChange={setVal("categoryId")}>
                  <SelectTrigger className="border-slate-200 text-sm w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </JobField>
              <JobField label={"Experience Level"} required>
                <Select
                  value={form.experienceLevel}
                  onChange={setVal("experienceLevel")}
                >
                  <SelectTrigger className="border-slate-200 text-sm w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevel.map((experience) => (
                      <SelectItem
                        key={experience.value}
                        value={experience.value}
                      >
                        {experience.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </JobField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <JobField label={"Job Type"} required>
                <Select value={form.jobType} onChange={setVal("jobType")}>
                  <SelectTrigger className="border-slate-200 text-sm w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobType.map((jobType) => (
                      <SelectItem key={jobType.value} value={jobType.value}>
                        {jobType.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </JobField>
              <JobField label={"Work Mode"} required>
                <Select value={form.workMode} onChange={setVal("workMode")}>
                  <SelectTrigger className="border-slate-200 text-sm w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {workMode.map((work) => (
                      <SelectItem key={work.value} value={work.value}>
                        {work.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </JobField>
            </div>
            <JobField label={"Number of Openings"}>
              <Input
                value={form.openings}
                placeholder="e.g. 50"
                className="border-slate-200"
                onChange={set("openings")}
                type={"number"}
              />
            </JobField>
          </JobSection>

          {/* Skills and Tags */}
          <JobSection icon={Tags} title={"Skills & Tags"}>
            <JobField
              hint="Select skills from the library — candidates will be matched against these"
              label={"Required Skills"}
              required
              action={
                <AiButton label={"Recommend"} disabled={!form.title.trim()} />
              }
            >
              <MultiSelect
                options={skills}
                selectedIds={form.skillIds}
                onChange={setVal("skillIds")}
                placeholder="Add Skills..."
              />
            </JobField>
            <JobField
              hint="Keywords that improve job discoverability"
              label={"Tags"}
              required
              action={
                <AiButton label={"Recommend"} disabled={!form.title.trim()} />
              }
            >
              <MultiSelect
                options={tags}
                selectedIds={form.tagIds}
                onChange={setVal("tagIds")}
                placeholder="Add Tags..."
              />
            </JobField>
          </JobSection>

          {/* Locations */}
          <JobSection icon={MapPin} title={"Locations"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <JobField label={"City"} required>
                <Input
                  value={form.city}
                  placeholder="e.g. DKI Jakarta"
                  className="border-slate-200"
                  onChange={set("city")}
                />
              </JobField>
              <JobField label={"State/Province"} required>
                <Input
                  value={form.state}
                  placeholder="e.g. West Jakarta"
                  className="border-slate-200"
                  onChange={set("state")}
                />
              </JobField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <JobField label={"Country"} required>
                <Input
                  value={form.country}
                  placeholder="e.g. Indonesia"
                  className="border-slate-200"
                  onChange={set("country")}
                />
              </JobField>
              <JobField label={"Zip Code"} required>
                <Input
                  value={form.zipCode}
                  placeholder="e.g. 11470"
                  className="border-slate-200"
                  onChange={set("zipCode")}
                />
              </JobField>
            </div>
            <JobField label={"Full Address"} required>
              <Input
                value={form.address}
                placeholder="e.g. Letjen S. Parman St No.Kav.28, RT.12/RW.6, South Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470"
                className="border-slate-200"
                onChange={set("address")}
              />
            </JobField>
          </JobSection>
        </div>

        {/* Right Section */}
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;

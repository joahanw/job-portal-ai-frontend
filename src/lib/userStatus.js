export const EXPERIENCE_LEVEL = [
  { value: "ENTRY_LEVEL", label: "Entry Level", years: "0-1 yrs" },
  { value: "JUNIOR", label: "Junior", years: "1-3 yrs" },
  { value: "MID_LEVEL", label: "Mid Level", years: "3-5 yrs" },
  { value: "SENIOR", label: "Senior", years: "5-8 yrs" },
  { value: "LEAD", label: "Lead", years: "8+ yrs" },
  { value: "EXECUTIVE", label: "Executive", years: "C-level" },
];

export const JOB_TYPE = [
  { label: "Full time", value: "FULL_TIME" },
  { label: "Part time", value: "PART_TIME" },
  { label: "Contract", value: "CONTRACT" },
  { label: "Internship", value: "INTERNSHIP" },
  { label: "Freelance", value: "FREELANCE" },
  { label: "Remote", value: "REMOTE" },
];

export const WORK_MODE = [
  { label: "Remote", value: "REMOTE" },
  { label: "Onsite", value: "ON_SITE" },
  { label: "Hybrid", value: "HYBRID" },
];

export const PROFICIENCY_LEVEL = [
  { label: "Beginner", value: "BEGINNER", percent: 20, color: "bg-[#d6008f]" },
  {
    label: "Elementary",
    value: "ELEMENTARY",
    percent: 40,
    color: "bg-[#d63c00]",
  },
  {
    label: "Intermediate",
    value: "INTERMEDIATE",
    percent: 60,
    color: "bg-[#6a00f4]",
  },
  { label: "Advanced", value: "ADVANCED", percent: 80, color: "bg-[#0057ff]" },
  { label: "Expert", value: "EXPERT", percent: 100, color: "bg-[#00873a]" },
];

export const LANGUAGE_PROFICIENCY = [
  { label: "Basic", value: "BASIC", style: "bg-slate-100 text-slate-600" },
  {
    label: "Conversational",
    value: "CONVERSATIONAL",
    style: "bg-blue-50 text-blue-700",
  },
  {
    label: "Professional",
    value: "PROFESSIONAL",
    style: "bg-indigo-50 text-indigo-700",
  },
  { label: "Fluent", value: "FLUENT", style: "bg-purple-50 text-purple-700" },
  { label: "Native", value: "NATIVE", style: "bg-green-50 text-green-700" },
];

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "cn";
import {
  Award,
  BadgeCheck,
  Briefcase,
  Code2,
  FileText,
  FolderGit2,
  GraduationCap,
  Languages,
  Settings,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PersonalInfoSection from "./PersonalInfoSection";
import { resumes } from "../applications/applyNow/dummyResume";
import SummarySection from "./SummarySection";
import WorkExperienceSection from "./WorkExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import CertificationSection from "./CertificationSection";
import AwardsSection from "./AwardsSection";
import LanguageSection from "./LanguageSection";
import ResumeSettingSection from "./ResumeSettingSection";

const SECTIONS = [
  { key: "personal", label: "Personal Info", icon: User, field: null },
  { key: "summary", label: "Summary", icon: FileText, field: "summary" },
  {
    key: "experience",
    label: "Work Experience",
    icon: Briefcase,
    field: "workExperiences",
  },
  {
    key: "education",
    label: "Education",
    icon: GraduationCap,
    field: "educations",
  },
  { key: "skills", label: "Skills", icon: Code2, field: "skills" },
  { key: "projects", label: "Projects", icon: FolderGit2, field: "projects" },
  {
    key: "certifications",
    label: "Certifications",
    icon: BadgeCheck,
    field: "certifications",
  },
  { key: "awards", label: "Awards", icon: Award, field: "awards" },
  { key: "languages", label: "Languages", icon: Languages, field: "languages" },
  { key: "settings", label: "Settings", icon: Settings, field: null },
];
const ResumeEdit = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const { id } = useParams();
  const resume = resumes[0];
  return (
    <div className="flex flex-col h-[calc(100dvh-57px)] w-full">
      <div className="flex flex-1 overflow-hidden">
        {/* SideBar */}
        <aside className="w-64 shrink-0 bg-white border-r border-slate-200 overflow-y-auto flex flex-col">
          <div className="p-3 space-y-0.5 flex-1">
            {SECTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  onClick={() => setActiveSection(item)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all",
                    activeSection.key === item.key
                      ? "bg-primary text-white"
                      : "text-slate-600 hover:bg-slate-100",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon />
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <activeSection.icon className="text-primary " />
                {activeSection?.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeSection.key === "personal" && (
                <PersonalInfoSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "summary" && (
                <SummarySection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "experience" && (
                <WorkExperienceSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "education" && (
                <EducationSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "skills" && (
                <SkillSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "projects" && (
                <ProjectSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "certifications" && (
                <CertificationSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "awards" && (
                <AwardsSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "languages" && (
                <LanguageSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
              {activeSection.key === "settings" && (
                <ResumeSettingSection
                  resumeId={id}
                  resume={resume}
                  otherResumes={resumes}
                />
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ResumeEdit;

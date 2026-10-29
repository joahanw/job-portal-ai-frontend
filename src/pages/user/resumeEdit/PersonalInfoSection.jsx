import React, { useRef, useState } from "react";
import CopyFromMenu from "./shared/CopyFromMenu";
import { resumes } from "../applications/applyNow/dummyResume";
import { Camera, Check, Globe, Loader, User } from "lucide-react";
import FRow from "./shared/FRow";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const PersonalInfoSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    headline: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
    websiteUrl: "",
    profileImage:
      "https://objectstorage.ap-batam-1.oraclecloud.com/n/axy64om8r4us/b/bakedbyerina/o/user%2F36c70012-d46a-45dc-a235-279e12934d29.png",
  });
  const [isUploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef();

  const handleImageChange = (event) => {
    console.log(event.target.value);
  };

  const set = (field) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Form Data", form);
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CopyFromMenu resumes={resumes} />
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-2 border-slate-200 bg-slate-100 overflow-hidden flex items-center justify-center">
            {form.profileImage ? (
              <img src={form.profileImage} className="h-full w-full" />
            ) : (
              <User className="h-8 w-8 text-slate-400" />
            )}
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            type="button"
            className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-primary text-white flex items-center
          justify-center shadow hover:bg-primary/90 disabled:opacity-60"
          >
            {isUploadingImage ? <Loader /> : <Camera className="h-3 w-3" />}
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <p className="text-xs text-slate-400">
          Click camera to upload profile image
        </p>
      </div>

      {/* Form Profile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FRow label="First Name">
          <Input
            value={form.firstName}
            onChange={set("firstName")}
            placeholder="John"
          />
        </FRow>
        <FRow label="Last Name">
          <Input
            value={form.lastName}
            onChange={set("lastName")}
            placeholder="Doe"
          />
        </FRow>
      </div>
      <FRow label="Professional Headline">
        <Input
          value={form.headline}
          onChange={set("headline")}
          placeholder="e.g Senior Software Engineer"
        />
      </FRow>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FRow label="Email">
          <Input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="john@gmail.com"
          />
        </FRow>
        <FRow label="Phone">
          <Input
            value={form.phone}
            onChange={set("phone")}
            placeholder="+62 811 2222 3333"
          />
        </FRow>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FRow label="City">
          <Input
            value={form.city}
            onChange={set("city")}
            placeholder="e.g Jakarta"
          />
        </FRow>
        <FRow label="Country">
          <Input
            value={form.country}
            onChange={set("country")}
            placeholder="e.g Indonesia"
          />
        </FRow>
      </div>
      <Separator />

      {/* Form Social */}
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        Online Presence
      </p>

      <FRow label="LinkedIn URL">
        <div className="relative">
          <FaLinkedin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input
            value={form.linkedinUrl}
            onChange={set("linkedinUrl")}
            className="pl-9"
            placeholder="e.g https://linkedin.com/in/..."
          />
        </div>
      </FRow>

      <FRow label="GitHub URL">
        <div className="relative">
          <FaGithub className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input
            value={form.githubUrl}
            onChange={set("githubUrl")}
            className="pl-9"
            placeholder="e.g https://github.com/..."
          />
        </div>
      </FRow>

      <FRow label="Portofolio URL">
        <div className="relative">
          <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input
            value={form.portfolioUrl}
            onChange={set("portfolioUrl")}
            className="pl-9"
            placeholder="e.g https://mysite.com/..."
          />
        </div>
      </FRow>

      <FRow label="Website URL">
        <div className="relative">
          <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input
            value={form.websiteUrl}
            onChange={set("websiteUrl")}
            className="pl-9"
            placeholder="e.g https://mysite.com/..."
          />
        </div>
      </FRow>

      <Button onClick={handleSave} className="w-full">
        <Check />
        Save Personal Info
      </Button>
    </div>
  );
};

export default PersonalInfoSection;

import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import React from "react";

const company = {
  coverImage:
    "https://images.pexels.com/photos/36713443/pexels-photo-36713443.jpeg?_gl=1*opx62w*_ga*NjU0ODU5MjkxLjE3OTE3NzY4MTM.*_ga_8JE65Q40S6*czE3OTE3NzY4MTMkbzEkZzEkdDE3OTE3NzcwNzQkajUyJGwwJGgw",
  logoUrl:
    "https://cdn.pixabay.com/photo/2025/05/24/12/40/whale-9619752_640.png",
  name: "JohanWork Ltd Company",
  tagline: "Innovating and Future",
  companySize: "51-200 Employees",
  industryType: "Information Technology",
  companyType: "Private",
  foundedYear: "2010",
};
const ProfileHeader = () => {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div
        className={`h-36 w-full ${company.coverImage ? "bg-cover" : "bg-primary"}`}
        style={{ backgroundImage: `url(${company.coverImage})` }}
      ></div>

      {/* Logo + Info Row*/}
      <div className="px-6 pb-5">
        <div className="flex items-end gap-4 -mt-8 mb-4">
          <img
            src={company.logoUrl}
            alt=""
            className="h-20 w-20 rounded-xl object-cover border-4 border-white shadow-md shrink-0"
          />
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Badge variant="outline" className="bg-green-200 text-green-800">
              <Shield />
              Active
            </Badge>
            <Badge variant="outline" className="bg-green-200 text-green-800">
              <Shield />
              Verified
            </Badge>
          </div>
        </div>
        <div>
          <h2>{company.name}</h2>
          <p className="text-sm text-slate-500">{company.tagline}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-400">
            <span>{company.industryType}</span>
            <span>{company.companyType}</span>
            <span>{company.companySize}</span>
            <span>{company.foundedYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

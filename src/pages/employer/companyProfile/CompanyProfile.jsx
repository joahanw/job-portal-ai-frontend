import React from "react";
import ProfileHeader from "./ProfileHeader";
import CompanyDetails from "./CompanyDetails";

const CompanyProfile = () => {
  return (
    <div className="space-y-5">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Company Profile</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your company information and branding
        </p>
      </div>

      {/* Profile Header */}
      <ProfileHeader />

      {/* Info */}
      <CompanyDetails />
    </div>
  );
};

export default CompanyProfile;

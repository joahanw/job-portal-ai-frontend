import React from "react";
import ProfileHeroCard from "./ProfileHeroCard";
import { user } from "./dummyUser";
import PersonalInformation from "./PersonalInformation";
import AccountSecurityCard from "./AccountSecurityCard";
import ActivityCard from "./ActivityCard";

const Profile = () => {
  const [editing, setEditing] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [form, setForm] = React.useState({
    fullName: user.fullName,
    phone: user.phone,
  });
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        <ProfileHeroCard
          user={user}
          editing={editing}
          uploading={uploading}
          onEdit={() => setEditing(true)}
          onCancel={() => setEditing(false)}
        />
        <PersonalInformation
          user={user}
          editing={editing}
          form={form}
          onFormChange={(patch) => setForm((f) => ({ ...f, ...patch }))}
        />
        <AccountSecurityCard user={user} />
        <ActivityCard user={user} />
      </div>
    </div>
  );
};

export default Profile;

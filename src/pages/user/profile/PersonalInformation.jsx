import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoIcon, Mail, Phone, User } from "lucide-react";
import React from "react";

const PersonalInformation = ({ editing, user, form, onFormChange }) => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <User className="h-4 w-4 text-primary" /> Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Full Name:
            </Label>
            {editing ? (
              <Input
                placeholder="Your full name"
                onChange={(e) => onFormChange({ phone: e.target.value })}
                value={form.fullName}
                className="focus-visible:ring-primary focus-visible:border-primary"
              />
            ) : (
              <p className="text-sm text-slate-600 py-2">{user?.fullName}</p>
            )}
          </div>

          {/* email */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Email:
            </Label>
            <p className="text-sm text-slate-600 py-2 flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-500" /> {user?.email}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Phone Number:
            </Label>
            {editing ? (
              <Input
                placholder="Your Phone Number"
                onChange={(e) => onFormChange({ phone: e.target.value })}
                value={form.phone}
                className="focus-visible:ring-primary focus-visible:border-primary"
              />
            ) : (
              <p className="text-sm text-slate-600 py-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                {user?.phone}
              </p>
            )}
          </div>

          {/* Profile */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Profile Image:
            </Label>
            {user?.profileImage ? (
              <>
                <img
                  src={user?.profileImage}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </>
            ) : (
              <p className="text-sm text-slate-400 py-2 flex items-center gap-2">
                <InfoIcon className="h-4 w-4 text-orange-500" /> No photo -
                click avatar to upload
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;

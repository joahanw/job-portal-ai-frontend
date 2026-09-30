import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FingerprintPattern, Info, ShieldCheck, User } from "lucide-react";
import React from "react";

const AccountSecurityCard = ({ user }) => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <ShieldCheck className="h-4 w-4 text-primary" /> Account & Security
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Role */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Role
            </Label>
            <p className="text-sm text-slate-600 py-2">{user?.role}</p>
          </div>

          {/* Account Status */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Account Status:
            </Label>
            <p className="text-sm text-slate-600 py-2">{user?.status}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Sign-in Method */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Sign-in Method:
            </Label>
            <p className="text-sm text-slate-600 py-2 flex items-center gap-2">
              <FingerprintPattern className="h-4 w-4 text-primary" />
              Email & Password
            </p>
          </div>

          {/* Email Verified */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Email Verified:
            </Label>
            <p className="text-sm text-slate-600 py-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-orange-700" />
              Not Verified
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSecurityCard;

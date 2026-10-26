import {
  Bookmark,
  Briefcase,
  FileText,
  LogOut,
  ScrollText,
  Settings,
  Sparkles,
  Target,
  User,
} from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const user = {
  id: 1,
  fullName: "duarrrr",
  email: "duarrrr28@gmail.com",
  phone: "021222333122",
  profileImage:
    "https://objectstorage.ap-batam-1.oraclecloud.com/n/axy64om8r4us/b/bakedbyerina/o/user%2F36c70012-d46a-45dc-a235-279e12934d29.png",
  role: "ROLE_JOB_SEEKER",
  status: "ACTIVE",
  lastLogin: "2026-09-25T00:04:15.500734Z",
  createdAt: "2026-09-25T00:04:15.921817Z",
};

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-1.5">
            <div className="bg-primary text-white p-2 m-2 rounded-lg">
              <Sparkles />
            </div>
            <span className="text-xl font-bold text-slate-900">
              JOHANWORK.AI
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/jobs"
              className={`hidden lg:block text-sm font-medium transition-colors ${
                isActive("/jobs")
                  ? "text-primary"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Jobs
            </Link>
            <Link
              to="/ai-match"
              className={`hidden lg:flex items-center gap-1 text-sm font-medium transition-colors ${
                isActive("/ai-match")
                  ? "text-primary"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Target className="h-4 w-4" />
              Ai Match
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar>
                    <AvatarImage src={user.profileImage} />
                    <AvatarFallback>
                      {user?.fullName?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div>
                      <p>{user?.fullName || "user"}</p>
                      <p className="text-xs text-slate-500">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/applications")}>
                    <FileText className="h-4 w-4 mr-2" />
                    My Applications
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/saved-jobs")}>
                    <Bookmark className="h-4 w-4 mr-2" />
                    Saved Jobs
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/resumes")}>
                    <ScrollText className="h-4 w-4 mr-2" />
                    My Resumes
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => navigate("/logout")}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

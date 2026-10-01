import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FileText,
  PlusCircle,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import StateCard from "./StateCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RecentApplicationTable from "./RecentApplicationTable";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Jobs Posted",
      value: 20,
      icon: Briefcase,
    },
    {
      title: "Active Jobs",
      value: 15,
      icon: TrendingUp,
    },
    {
      title: "Applications Received",
      value: 50,
      icon: FileText,
    },
    {
      title: "Shortlisted / Interview",
      value: 10,
      icon: UserCheck,
    },
  ];
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">
            Welcome back! Here's an overview of your hiring activity
          </p>
        </div>
        <Link to="/employer/jobs/create">
          <Button>
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Job
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StateCard {...stat} />
        ))}
      </div>

      {/* AI Insight Card */}
      <Card className="bg-linear-to-b from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Users className="h-4 w-4" />
            </div>
            AI Screening Inshights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-2 w-2 rounded-full bg-primary mt-2"></div>
              <div>
                <p className="font-medium text-slate-900 ">
                  15 candidates auto-shortlisted today
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Based on AI analysis, these candidates match 90%+ of your job
                  requirements for senior React Developer Position.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-2 w-2 rounded-full bg-green-600 mt-2"></div>
              <div>
                <p className="font-medium text-slate-900 ">
                  3 high-potential candidates need review
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  These candidates have exceptional skills but limited
                  experience. Worth considering for junior roles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-2 w-2 rounded-full bg-orange-600 mt-2"></div>
              <div>
                <p className="font-medium text-slate-900 ">
                  Suggestion: Update job description
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Your DevOps Engineer posting has low application rate.
                  Consider adjusting salary range or rquirements.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary/20">
            <Link to={"/employer/ai-screening"}>
              <Button className="border-primary/30 hover:bg-primary/10 cursor-pointer">
                View AI Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent Application Card */}
      <RecentApplicationTable />
    </div>
  );
};

export default Dashboard;

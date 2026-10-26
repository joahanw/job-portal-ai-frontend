import React, { useMemo } from "react";
import { applications } from "../applications/applications";
import { isToday } from "@/lib/timeAgo";
import { STATUS_ORDER } from "@/lib/applicationStatus";
import { BrainCircuit, Sparkles, Users } from "lucide-react";
import StateCard from "./StateCard";

const AIScreening = () => {
  const stats = useMemo(() => {
    const total = applications.length;
    const screened = (a) => a.screened != null;
    const statusOf = (a) => a.screening?.shorlistStatus ?? "NOT_SCREENED";

    const todayApps = applications.filter((a) => isToday(a.appliedAt));
    const todayScreened = todayApps.filter(screened);
    const allScreened = applications.filter(screened);

    const dist = {};
    STATUS_ORDER.forEach((s) => {
      dist[s] = 0;
    });
    applications.forEach((a) => {
      const key =
        screened(a) && STATUS_ORDER.includes(statusOf(a))
          ? statusOf(a)
          : "NOT_SCREENED";
      dist[key] += 1;
    });

    const topAutoShorlisted = applications
      .filter((a) => statusOf(a) === "AUTO_SHORLISTED")
      .sort(
        (a, b) =>
          (b.screening?.overallScore ?? 0) - (a.screening?.overallScore ?? 0),
      )
      .slice(0, 5);

    const topNeedReview = applications
      .filter((a) => statusOf(a) === "REVIEW_RECOMMENDED")
      .sort(
        (a, b) =>
          (b.screening?.overallScore ?? 0) - (a.screening?.overallScore ?? 0),
      )
      .slice(0, 5);

    return {
      total,
      todayCount: todayApps.length,
      todayScreenedCount: todayScreened.length,
      allScreenedCount: allScreened.length,
      autoShorlistedCount: dist["AUTO_SHORLISTED"],
      needReviewCount: dist["REVIEW_RECOMMENDED"],
      dist,
      topAutoShorlisted,
      topNeedReview,
    };
  }, [applications]);

  return (
    <div>
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            AI Screening Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time insights into your AI-driven candidate screening process
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-primary">AI Active</span>
        </div>
      </header>

      {/* Stat Cards */}
      <div>
        <StateCard
          label="Today's Applications"
          value={stats.todayCount}
          sub="Applications screened today"
          icon={Users}
        />
        <StateCard
          label="Today's Screened"
          value={stats.todayScreenedCount}
          sub="Applications screened today"
          icon={BrainCircuit}
        />
        <StateCard
          label="Auto Shorlisted"
          value={stats.autoShorlistedCount}
          sub="Candidates automatically shorlisterd"
          icon={Sparkles}
        />
        <StateCard label="Needs Review" value={stats.needReviewCount} />
      </div>
    </div>
  );
};

export default AIScreening;

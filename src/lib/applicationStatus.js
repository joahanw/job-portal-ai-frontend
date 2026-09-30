export const APPLICATION_STATUS = {
  PENDING: {
    label: "Pending",
    className: "bg-slate-100 text-slate-700 border-slate-200",
  },
  REVIEWING: {
    label: "Reviewing",
    className: "bg-blue-100 text-blue-700 border-blue-200",
  },
  SHORTLISTED: {
    label: "Shortlisted",
    className: "bg-violet-100 text-violet-700 border-violet-200",
  },
  INTERVIEW_SCHEDULED: {
    label: "Interview Scheduled",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  REJECTED: {
    label: "Rejected",
    className: "bg-red-100 text-red-700 border-red-200",
  },
  HIRED: {
    label: "Hired",
    className: "bg-green-100 text-green-700 border-green-200",
  },
  WITHDRAWN: {
    label: "Withdrawn",
    className: "bg-zinc-100 text-zinc-500 border-zinc-200",
  },
};

export const getApplicationStatus = (status) =>
  APPLICATION_STATUS[status] ?? {
    label: status ?? "Unknown",
    className: "bg-slate-100 text-slate-700 border-slate-200",
  };

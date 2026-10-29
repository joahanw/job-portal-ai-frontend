const UNITS = [
  ["y", 365 * 24 * 60 * 60], // tahun
  ["mo", 30 * 24 * 60 * 60], // bulan
  ["w", 7 * 24 * 60 * 60], // minggu
  ["d", 24 * 60 * 60], // hari
  ["h", 60 * 60], // jam
  ["m", 60], // menit
];

// "2026-09-16T..." -> "2w ago"
export const timeAgo = (date) => {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
  if (seconds < 60) return "just now";

  for (const [label, unitSeconds] of UNITS) {
    const value = Math.floor(seconds / unitSeconds);
    if (value >= 1) return `${value}${label} ago`;
  }
};

export const isToday = (dtStr) => {
  const prefix = new Date().toISOString().split("T")[0];
  return dtStr.startsWith(prefix) ?? false;
};

// "2026-02-28T..." -> "Feb 28, 2026"
export const formatDate = (date) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// "2025-06-15" -> "Jun 2025"
export const formatMonthYear = (date) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};

// "2026-06-25T..." -> "Thursday, June 25, 2026"
export const formatFullDate = (date = new Date()) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

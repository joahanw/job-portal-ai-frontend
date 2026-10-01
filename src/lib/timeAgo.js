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

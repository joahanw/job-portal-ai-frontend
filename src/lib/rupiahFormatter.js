export { cn } from "cn";

const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export const formatRupiah = (value) => rupiahFormatter.format(value);

// 8000000 -> "8.000.000" (tanpa "Rp", untuk isi input)
export const formatThousands = (value) =>
  value ? new Intl.NumberFormat("id-ID").format(value) : "";

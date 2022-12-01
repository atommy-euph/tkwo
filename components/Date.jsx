import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-600 text-xs" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}

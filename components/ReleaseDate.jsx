import { parseISO, format } from "date-fns";

export default function ReleaseDate({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-500 text-xs" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}

import { BookmarkIcon, ClockIcon, LocationIcon } from "@/assets/icons";
import { TeamsLogo } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Bookmark, MapPin, Clock } from "lucide-react";

type Job = {
  title: string;
  company: string;
  location: string;
  type?: string;
  tags?: string[];
  applicants?: number;
  timePosted?: string;
  promoted?: boolean;
  icon?: string;
};

export default function JobCard({
  title,
  company,
  location,
  applicants = 22,
  timePosted = "1 day ago",
  promoted,
}: Job) {
  return (
    <Card className="w-[182px] rounded-xl border border-gray-200 hover:shadow-sm transition">
      <CardContent className="py-[10px] px-[20px] flex flex-col ">
        {/* Promoted label */}
        {promoted && (
          <div className="text-[11px] font-semibold text-secondary">Promoted</div>
        )}

        {/* Logo + Title + Company */}
        <div className="flex items-start gap-2 mb-[5px]">
          <img src={TeamsLogo} alt="Logo" width={32} height={32} className="rounded-sm" />
          <div>
            <div className="text-sm font-semibold leading-tight">{title}</div>
            <div className="text-xs text-gray-500">{company}</div>
          </div>
        </div>

        {/* Location + Time */}
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex items-center gap-1">
            <LocationIcon className="w-3.5 h-3.5 text-gray-400" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-3.5 h-3.5 text-gray-400" />
            {timePosted} · <span className="text-blue-600 cursor-pointer">{applicants} applicants</span>
          </div>
        </div>

        {/* Apply Button + Bookmark */}
        <div className="mt-3 flex items-center justify-between gap-[20px]">
          <Button size="sm" className="text-sm rounded-md w-full py-[10px]">
            Apply Now
          </Button>
          <BookmarkIcon className="text-muted-foreground cursor-pointer w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  );
}

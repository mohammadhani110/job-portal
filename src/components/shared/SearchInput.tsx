import { SearchIcon } from "@/assets/icons";
import { Input } from "@/components/ui/input";

export function SearchInput() {
    return (
        <div className="relative max-w-xs hidden md:block h-10">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
                placeholder="Search"
                className="pl-9 bg-background-light h-10 border-0"
            />
        </div>
    );
}

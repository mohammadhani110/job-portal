import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SearchIcon } from "@/assets/icons";

export default function SearchBar() {
    return (
        <div>

            <div className="bg-white sm:p-5 sm:py-6 md:p-[1.25rem] rounded-xl shadow-none mb-6">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 md:divide-x  md:rounded-lg overflow-hidden bg-white ">
                    {/* Job Title / Keyword Input */}
                    <div className="w-full px-4 py-3 md:pl-0">
                        <Input
                            placeholder="Job Title, Company or Keywords"
                            className="border-none  focus-visible:ring-0 p-0 h-auto text-sm text-gray-700 shadow-none"
                        />
                    </div>

                    {/* Location Dropdown */}
                    <div className="w-full md:w-[240px] px-4 py-2">
                        <Select>
                            <SelectTrigger className="p-0 h-auto border-none focus:ring-0 text-sm text-gray-700 shadow-none">
                                <SelectValue placeholder="Select Location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="karachi">Karachi</SelectItem>
                                <SelectItem value="lahore">Lahore</SelectItem>
                                <SelectItem value="remote">Remote</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Job Type Dropdown */}
                    <div className="w-full md:w-[180px] px-4 py-2">
                        <Select>
                            <SelectTrigger className="p-0 h-auto border-none focus:ring-0 text-sm text-gray-700 shadow-none">
                                <SelectValue placeholder="Job Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="full-time">Full-Time</SelectItem>
                                <SelectItem value="part-time">Part-Time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Search Button */}
                    <div className="w-full md:w-[140px]  px-4 py-3 md:p-0 border-none">
                        <Button
                            className="w-full lg:w-[140px] lg:px-[36px] flex items-center justify-center gap-2 text-sm"
                        >
                            <SearchIcon className="w-4 h-4" />
                            Search
                        </Button>
                    </div>
                </div>


            </div>
            {/* Suggested Filters */}
            <div className="mt-4 flex flex-wrap gap-4 items-center mb-5">
                <p className="text-14 font-normal text-body-light">Similar:</p>
                <Badge variant="outline" className="cursor-pointer font-normal text-body-light px-4 py-2 ">Frontend</Badge>
                <Badge variant="outline" className="cursor-pointer font-normal text-body-light px-4 py-2 ">Backend</Badge>
                <Badge variant="outline" className="cursor-pointer font-normal text-body-light px-4 py-2 ">Graphic Designer</Badge>
            </div>
        </div>
    );
}

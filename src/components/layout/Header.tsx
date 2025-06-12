"use client"

import { useState, type ReactNode } from "react";
import { Logo } from "@/assets/icons";
import { Avatar1 } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SearchInput } from "../shared/SearchInput";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = ({ children }: { children?: ReactNode }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm px-4 py-3 md:px-6 md:py-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-4 md:gap-6">
                <Logo className="text-gray-500 w-[36px] h-[32px] md:w-[42px] md:h-[38px]" />
                {/* Mobile Nav */}
                {children}

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-x-4 whitespace-nowrap text-sm text-muted-foreground">
                    {["Find Jobs", "Top Companies", "Job Tracker", "Calendar", "Messages"].map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`hover:text-primary text-16 ${i === 0 ? "font-semibold" : "font-normal"} ${i === 0 ? "text-primary" : ""}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                {/* Desktop Search */}
                <div className="hidden lg:block">
                    <SearchInput />
                </div>

                <Button size="sm" className="h-10 px-4 hidden lg:inline-flex">
                    Resume Builder
                </Button>

                <Avatar className="w-8 h-8 md:w-9 md:h-9">
                    <AvatarImage src={Avatar1} />
                    <AvatarFallback>AF</AvatarFallback>
                </Avatar>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-4">
                            <nav className="flex flex-col gap-4 text-sm mt-4">
                                {["Find Jobs", "Top Companies", "Job Tracker", "Calendar", "Messages"].map((item, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        onClick={() => setOpen(false)}
                                        className="hover:text-primary text-base font-medium"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-6">
                                <SearchInput />
                            </div>

                            <Button className="w-full mt-4">Resume Builder</Button>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;

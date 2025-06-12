// components/layout/MobileSidebar.tsx
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-5 h-5" />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="p-0">
                <Sidebar />
            </DrawerContent>
        </Drawer>
    );
}

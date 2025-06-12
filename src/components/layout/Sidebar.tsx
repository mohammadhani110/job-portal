import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonImage, BgImage } from "@/assets/images";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-[400px] bg-gray-50">
            <div className="max-w-[346px] mx-auto">

                <div className="rounded-[10px] overflow-hidden bg-white shadow-none mt-6 ml-auto mb-2">

                    {/* Header section with background and avatar */}
                    <div className="relative h-[100px]">
                        <img
                            src={BgImage}
                            alt="Graduation background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2">
                            <Avatar className="w-21 h-21 border-1 border-white shadow-md">
                                <AvatarImage src={PersonImage} />
                                <AvatarFallback>AF</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="pt-12 px-6 pb-6 text-center ">
                        <h2 className="text-18 text-secondary font-semibold">Albert Flores</h2>
                        <p className="text-sm text-secondary max-w-[236px] mx-auto">
                            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
                        </p>
                        <p className="text-12 text-muted-foreground">Clinton, Maryland</p>
                    </div>
                </div>

                {/* Stats section */}
                <div className="px-5 py-4 text-sm space-y-2 bg-white rounded-[10px] mb-2 ">
                    <div className="flex justify-between">
                        <span className="text-secondary">Profile Visitors</span>
                        <span className="font-medium text-primary">140</span>
                    </div>
                    {/* Divider */}
                    <hr className="border-t" />
                    <div className="flex justify-between">
                        <span className="text-secondary">Resume Viewers</span>
                        <span className="font-medium text-primary">20</span>
                    </div>
                    {/* Divider */}
                    <hr className="border-t" />
                    <div className="flex justify-between">
                        <span className="text-secondary">My Jobs</span>
                        <span className="font-medium text-primary">88</span>
                    </div>
                </div>



                {/* Calendar */}
                <Accordion type="single" collapsible className="px-6 bg-white  rounded-[10px]">
                    <AccordionItem value="calendar" className="border-none">
                        <AccordionTrigger className=" px-0 hover:no-underline  focus:no-underline [&>svg]:text-secondary "
                        >
                            <div className="flex flex-col items-start justify-center w-full">
                                <h2 className="text-16 font-semibold text-secondary hover:text-secondary">My calendar</h2>
                                <p className="text-sm text-muted-foreground">Upcoming Interviews</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground px-0">
                            Upcoming Interviews
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            {/* Profile card */}
        </aside>
    );
};

export default Sidebar;

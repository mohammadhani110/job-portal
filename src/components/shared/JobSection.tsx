import JobCard from "./JobCard";

type Job = {
    title: string;
    company: string;
    location: string;
    type: string;
    tags?: string[];
};

type JobSectionProps = {
    title: string;
    subTitle: string;
    jobs: Job[];
};

export default function JobSection({ title, subTitle, jobs }: JobSectionProps) {
    return (
        <section className="mb-8">
            <div className="flex items-center gap-4 justify-start mb-4">
                <h2 className="text-18 font-medium ">{title}</h2>
                <p className="text-14 text-primary font-normal underline">{subTitle}</p>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  ">
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </section>
    );
}

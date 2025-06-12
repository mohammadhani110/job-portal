import Layout from "@/components/layout/Layout";
import SearchBar from "@/components/shared/SearchBar";
import JobSection from "@/components/shared/JobSection";
import mockJobs from "@/data/mockJobs";

export default function Home() {
    return (
        <Layout>
            <h2 className="text-22 font-bold">Find your Dream Job, <span className="text-primary">Albert!</span></h2>
            <p className="mb-4 text-14 font-normal text-muted-foreground">Explore the latest job openings and apply for the best opportunities available today!</p>
            <SearchBar />
            {/* Job sections go here */}
            <JobSection title="Featured Jobs" subTitle="See Featured Jobs" jobs={mockJobs.featured} />
            <JobSection title="Recommended for You" subTitle="See Recommended Jobs" jobs={mockJobs.recommended} />
            <JobSection title="Latest Jobs" subTitle="See Latest Jobs" jobs={mockJobs.latest} />
        </Layout>
    )
}

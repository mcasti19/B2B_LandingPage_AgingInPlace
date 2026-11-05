import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Difference } from "@/components/sections/Difference";
import { Report } from "@/components/sections/Report";
import { ROI } from "@/components/sections/ROI";
import { Reasons } from "@/components/sections/Reasons";
import { Founders } from "@/components/sections/Founders";
import { Plans } from "@/components/sections/Plans";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Difference />
        <Report />
        <ROI />
        <Reasons />
        <Founders />
        <Plans />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

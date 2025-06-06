import ChartOverview from "@/components/SectionDC/Chart";
import SectionCards from "@/components/SectionDC/SectionCards";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <SectionCards />
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
      </section>
    </main>
  );
}

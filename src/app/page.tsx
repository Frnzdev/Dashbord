import Sales from "@/components/sales";
import ChartOverview from "@/components/SectionDC/Chart";
import SectionCards from "@/components/SectionDC/SectionCards";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <div className="p-2 ">
        <h1 className="font-bold flex justify-center text-xl">
          DASHBOARD FRNZ
        </h1>
      </div>
      <SectionCards />
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}

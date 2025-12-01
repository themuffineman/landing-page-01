import Faq from "@/components/faq";
import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Page() {
  return (
    <div className="relative w-full font-bricolage  dark bg-zinc-950">
      <div className="absolute top-0 z-0 h-full w-full bg-zinc-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-50 perspective-[200px]">
        <div className="absolute inset-0 rotateX(35deg)">
          <div className="animate-grid inset-[0%_0px] ml-[-50%] h-[300vh] w-[600vw] origin-[100%_0_0] bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)] bg-size-[120px_120px] bg-repeat"></div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent to-90%"></div>
      </div>
      <main className="h-full w-full relative ">
        <Header />
        <Hero />
        <FeaturesSection />
        <Pricing />
        <Faq />
        <FooterSection />
      </main>
    </div>
  );
}

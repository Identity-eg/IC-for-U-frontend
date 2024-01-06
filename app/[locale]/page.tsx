import GatesContainer from "@/components/Home/GatesContainer";
import Hero from "@/components/Home/Hero";
import KeysContainer from "@/components/Home/KeysContainer";
import WhyEgypt from "@/components/Home/WhyEgypt";


export default function Home() {

  return (
    <section>
      <Hero/>
      <GatesContainer />
      <WhyEgypt />
      <KeysContainer />
    </section>
  );
}

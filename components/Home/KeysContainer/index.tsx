import Container from "@/components/Utils/Container";
import KeysCard from "./Card";
import { keys } from "@/constants/keys";

export default function KeysContainer() {
  return (
    <div>
      <Container className="py-24">
        <h2 className="mb-2">Select Your Key Life</h2>
        <p className="max-w-[60ch] mb-16">
          Enjoy your tour and relaxation trips according to the chosen main
          destination and life key line with 24/7 telemedical assistance through
          the hotline.
        </p>
        <div style={{gridTemplateColumns: "repeat(auto-fit,minmax(325px, 1fr))"}} className="grid gap-8">
          {keys.map((key) => (
            <KeysCard {...key} key={key.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}

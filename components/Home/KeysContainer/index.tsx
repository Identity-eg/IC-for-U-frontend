import Container from "@/components/Utils/Container";
import KeysCard from "./Card";
import { keys } from "@/constants/keys";

export default function KeysContainer() {
  return (
    <div>
      <Container className="py-24">
        <h2 className="mb-2">Select Your Key Life</h2>
        <p className=" mb-16">
          Experience the ultimate in health tourism with our three exclusive
          packages: Silver Key, Golden Key, and Platinum Key. Each package is
          designed to cater to your specific needs, providing a seamless and
          stress-free experience from start to finish.
        </p>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(325px, 1fr))" }}
          className="grid gap-8"
        >
          {keys.map((key) => (
            <KeysCard {...key} key={key.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}

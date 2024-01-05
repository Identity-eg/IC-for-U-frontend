import Container from "@/components/Utils/Container";
import GatesCard from "./Card";
import { gates } from "@/constants/gates";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GatesContainer() {

  return (
    <Container className="py-24">
      <h2 className="mb-2">Choose the Gate</h2>
      <p className="max-w-[60ch] mb-20">
        Enjoy your tour and relaxation trips according to the chosen main
        destination and life key line with 24/7 telemedical assistance through
        the hotline.
      </p>


      <Carousel>
        <CarouselContent>
          {gates.map((gate) => (
            <CarouselItem
              className='sm:basis-1/2 lg:basis-1/3 w-full'
              key={gate.id}
            >
              <GatesCard title={gate.title} image={gate.image} key={gate.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-top-8 left-0" />
        <CarouselNext className="-top-8 left-12" />
      </Carousel>

      {/* <div
        style={{   
          gridTemplateColumns: "repeat(auto-fit, minmax(325px, 1fr))",
        }}
        className="grid  gap-8"
      >
        {gates.map((gate) => (
          <GatesCard title={gate.title} image={gate.image} key={gate.id} />
        ))}
      </div> */}
    </Container>
  );
}

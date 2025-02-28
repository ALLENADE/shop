import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { reviewData } from "../reviewData";
import Image from "next/image";

const Feedback = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1, // Make it scroll smoothly one by one
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-nowrap md:flex-row md:items-center md:justify-between md:mb-8 md:px-24 items-center justify-between mx-8 py-8">
        <h2 className="md:text-2xl text-[16px] font-semibold whitespace-nowrap">
          What Our Customers Say
        </h2>
        <div className="flex items-center gap-3 md:gap-4">
          <Button variant="outline" className="rounded-md" onClick={scrollPrev}>
            ←
          </Button>
          <Button
            className="bg-black text-white hover:bg-gray-800 rounded-md"
            onClick={scrollNext}
          >
            →
          </Button>
        </div>
      </div>

      {/* Embla Carousel Wrapper */}
      <div className="overflow-hidden px-20" ref={emblaRef}>
        <div className="flex -ml-6">
          {reviewData.map(({ id, name, review, image, rating }) => (
            <div
              key={id}
              className="sm:min-w-[50%] min-w-[100%] md:pl-6 md:min-w-[25%] p-2"
            >
              {/* Card for Review */}
              <Card className="md:p-0 md:overflow-hidden md:border-0 ">
                {/* Image Wrapper (Fixed Issue) */}
                <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={image} alt={name} fill className="object-cover" />
                </div>

                {/* Review Content */}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-semibold">
                    {name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {review}
                  </CardDescription>

                  {/* ⭐️ Rating Display */}
                  <div className="mt-2 text-yellow-500 text-lg">
                    {"⭐".repeat(rating)}
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

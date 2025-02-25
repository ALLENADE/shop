"use client";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import { categories } from "../dummyData";

const ShopCategories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 4,
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
      <div className="flex flex-nowrap md:flex-row md:items-center md:justify-between md:mb-8 md:px-24 items-center justify-between mx-8 py-8">
        <h2 className="md:text-2xl text-[16px] font-semibold whitespace-nowrap">
          Shop by Categories
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

      <div className="overflow-hidden px-20" ref={emblaRef}>
        <div className="flex -ml-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="sm:min-w-[50%] min-w-[100%] md:pl-6 md:min-w-[25%] p-2"
            >
              <Card className="md:p-0 md:overflow-hidden md:border-0 ">
                <div className="h-[320px] bg-[#F3F3F3] relative group cursor-pointer">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <h3 className="text-white text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;

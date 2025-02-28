"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import ShopCategories from "@/components/home/ShopCategories/ShopCategories";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BestSeller from "@/components/home/BestSeller/BestSeller";
import Feedback from "@/components/home/FeedBack/Feedback";
import Footer from "@/components/footer/footer";

export default function Home() {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images
  const images = [
    "/images/Long Sleeve Mock Neck Wide Leg Jumpsuit - Royal Blue _ XL.jpeg",
    "/images/JLUXLABEL.jpeg",
    "/images/Long Sleeve Mock Neck Wide Leg Jumpsuit - Royal Blue _ XL.jpeg",
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-2">
        {/* Hero Section */}
        <div className="bg-[#F3F3F3] h-[700px] rounded-3xl flex items-center justify-center relative">
          {/* Desktop View - Static Image */}
          <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-24 w-full">
            {/* Left Text Content */}
            <div className="md:space-y-3 md:pt-32">
              <h2 className="md:text-2xl md:font-medium">Classic Exclusive</h2>
              <h1 className="md:text-5xl md:font-bold md:leading-tight">
                Women&apos;s Collection
              </h1>
              <h3 className="md:text-2xl md:font-medium">UP TO 40% OFF</h3>
              <div className="pt-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 rounded-md">
                  Shop Now →
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:mt-8 md:mr-16">
              <Image
                src="/images/Long Sleeve Mock Neck Wide Leg Jumpsuit - Royal Blue _ XL.jpeg"
                alt="Woman in blue jumpsuit"
                width={430}
                height={430}
                priority
                className="w-[80%] md:w-[430px] object-cover mx-auto"
              />
            </div>
          </div>

          {/* Mobile View - Carousel with Overlay */}
          <div className="relative w-full  md:hidden">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={images[currentSlide]}
                    alt="Jumpsuit Image"
                    width={430}
                    height={430}
                    priority
                    className="w-full h-[400px] object-contain rounded-3xl"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            {/* Overlay Text with Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between text-white bg-black/50 rounded-3xl p-6">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              {/* Text Content */}
              <div className="text-center flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-2xl font-medium">
                  Classic Exclusive
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Women&apos;s Collection
                </h1>
                <h3 className="text-lg md:text-2xl font-medium">
                  UP TO 40% OFF
                </h3>
                <div className="pt-4">
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-md">
                    Shop Now →
                  </Button>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>

        {/* Shop Categories */}
        <div className="py-8">
          <ShopCategories />
        </div>
        {/* Best seller */}
        <div className="py-8">
          <BestSeller />
        </div>
        <div className="py-8">
          <Feedback />
        </div>
      </main>
      <Footer />
    </div>
  );
}

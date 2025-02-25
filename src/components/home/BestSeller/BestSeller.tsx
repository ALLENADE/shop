import { Card } from "@/components/ui/card";
import Image from "next/image";
import { secondData } from "../secondData";

const BestSeller = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Our Bestsellers</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {secondData.map(({ id, title, image, description, price }) => (
          <Card key={id} className="group p-4 shadow-lg rounded-lg">
            {/* Image Wrapper */}
            <div className="relative w-full h-52">
              <Image
                src={image || ""}
                alt={title || ""}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm text-gray-600">{description}</p>
              <p className="text-sm text-gray-600">{price}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

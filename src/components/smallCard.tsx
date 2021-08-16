import Image from "next/image";

export type itemInformationType = {
  img: string;
  distance: string;
  location: string;
};
export default function SmallCard({
  img,
  location,
  distance,
}: itemInformationType) {
  return (
    <div className="flex space-x-2 m-4 rounded-lg border-2 border-transparent cursor-pointer hover:border-gray-100 hover:scale-105 transform transition transition-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt={location} />
      </div>
      <div className="flex flex-col justify-end">
         <h2>{location}</h2>
         <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

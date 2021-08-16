import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-40 md:h-96">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        alt="Banner image"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go.Perfect</p>
        <button className="font-bold text-purple-500 bg-white shadow-md mt-2 rounded-full py-2 px-4  active:scale-90 hover:shadow-xl transform transition transition-150">
          Im flexible
        </button>
      </div>
    </div>
  );
}

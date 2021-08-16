import Image from "next/image";
export type largeCardProps = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};
export default function LargeCard({
  description,
  img,
  buttonText,
  title,
}: largeCardProps) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white py-2 px-4 rounded-lg mt-5 bg-gray-900 ">{buttonText}</button>
      </div>
    </section>
  );
}

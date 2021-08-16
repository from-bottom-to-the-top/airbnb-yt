import Image from "next/image";

export type bigCardProps = {
  img: string;
  title: string;
};

export default function BigCard({ img, title }: bigCardProps) {
  return (
    <div className="flex flex-col cursor-pointer hover:scale-105 transform transition transition-300 mt-3">
      <div className="relative w-72 h-72">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}

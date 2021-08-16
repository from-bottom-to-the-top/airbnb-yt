import Header from "@components/header";
import Banner from "@components/banner";
import SmallCard from "@components/smallCard";
import BigCard from "@components/bigCard";
import { GetStaticProps } from "next";
import { itemInformationType } from "@components/smallCard";
import { bigCardProps } from "@components/bigCard";
import LargeCard from "@components/largeCard";
type HomeProps = {
  exploreData: [itemInformationType];
  cardData: [bigCardProps];
};

export default function Home({ exploreData, cardData }: HomeProps) {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard
                img={item.img}
                location={item.location}
                distance={item.distance}
                key={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl py-8 font-semibold">Live anywhere</h2>
          <div className="flex overflow-scroll space-x-4 scrollbar-hide">
            {cardData.map((item) => (
              <BigCard img={item.img} title={item.title} key={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
    revalidate: 300,
  };
};

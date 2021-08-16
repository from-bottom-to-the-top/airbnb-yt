import Header from "@components/header";
import Banner from "@components/banner";
import { GetServerSideProps, GetStaticProps } from "next";
import { itemInformationType } from "@components/smallCard";
import SmallCard from "@components/smallCard";
type HomeProps = {
  exploreData: [itemInformationType];
};

export default function Home({ exploreData }: HomeProps) {
  console.log(exploreData);
  
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
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
    revalidate: 300,
  };
};

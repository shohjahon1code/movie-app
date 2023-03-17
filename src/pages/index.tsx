import { useContext } from "react";
import { Header, Hero, Modal, Row } from "@/components";
import { IMovie } from "@/interfaces/app.interface";
import { API_REQUEST } from "@/service/api.service";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { AuthContext } from "@/context/auth.context";
import { useInfoStore } from "@/store";

export default function Home({
  trending,
  topRated,
  tvTopRated,
  popular,
  documentary,
  comedy,
  family,
  war,
  history,
}: HomeProps): JSX.Element {
  const { isLoading } = useContext(AuthContext);
  const { modal, setModal } = useInfoStore();

  if (isLoading) return <>{null}</>;

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Movie | website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <section>
          <Row title="Top Rated" movies={topRated} />
          <Row title="TV Show" movies={tvTopRated} isBig={true} />
          <Row title="Documentary" movies={documentary} />
          <Row title="Popular" movies={popular} isBig={true} />
          <Row title="Comedy" movies={comedy} />
          <Row title="Family" movies={family} isBig={true} />
          <Row title="War" movies={war} />
          <Row title="History" movies={history} />
        </section>
      </main>
      {modal && <Modal />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const [
    trending,
    topRated,
    tvTopRated,
    popular,
    documentary,
    comedy,
    family,
    war,
    history,
  ] = await Promise.all([
    fetch(API_REQUEST.trending).then((res) => res.json()),
    fetch(API_REQUEST.top_rated).then((res) => res.json()),
    fetch(API_REQUEST.tv_top_rated).then((res) => res.json()),
    fetch(API_REQUEST.popular).then((res) => res.json()),
    fetch(API_REQUEST.documentary).then((res) => res.json()),
    fetch(API_REQUEST.comedy).then((res) => res.json()),
    fetch(API_REQUEST.family).then((res) => res.json()),
    fetch(API_REQUEST.war).then((res) => res.json()),
    fetch(API_REQUEST.history).then((res) => res.json()),
  ]);

  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,
      tvTopRated: tvTopRated.results,
      popular: popular.results,
      documentary: documentary.results.reverse(),
      comedy: comedy.results,
      family: family.results,
      war: war.results,
      history: history.results,
    },
  };
};

interface HomeProps {
  trending: IMovie[];
  topRated: IMovie[];
  tvTopRated: IMovie[];
  popular: IMovie[];
  documentary: IMovie[];
  comedy: IMovie[];
  family: IMovie[];
  war: IMovie[];
  history: IMovie[];
}

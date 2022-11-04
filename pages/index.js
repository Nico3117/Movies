import axios from "axios";
import { server } from "../config";
import PopularMovie from "../components/PopularMovie";
import Image from 'next/image';
import SearchMovies from "../components/Search";
import Head from 'next/head'

export default function Home({ movies }) {
  return (    
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Mobile web app with nextjs"></meta>
        <title>Movies PWA</title>
      </Head>
      <div className="bg-gray-700">
        <div className="text-center pb-10 bg-white">
          <div className="w-60 mx-auto">
            <Image src={"/logo-movie.png"} alt="Logo movie" width={240} height={168} layout="responsive my-4" />
          </div>
          <h1 className='text-2xl text-gray-700 uppercase font-bold'>Bienvenue sur Movies</h1>
          <p className='text-gray-500'>Retrouver les films qui vous ont marqué !</p>
        </div>
        <div className="container max-w-7xl mx-auto pb-10 px-4 text-center">
          <SearchMovies />
        </div>
        <PopularMovie movies={movies.results} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.TMDB_API_KEY}&language=fr&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}
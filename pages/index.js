import axios from "axios";
import { server } from "../config";
import PopularMovie from "../components/PopularMovie";
import Image from 'next/image';

export default function Home({ movies }) {
  console.log(movies)
  return (    
    <div className="bg-gray-700">
      <div className="text-center pb-10 bg-white">
        <div className="w-60 mx-auto">
            <Image src={"/logo-movie.png"} width={1000} height={500} layout="responsive my-4" />
        </div>
        <h1 className='text-2xl text-gray-700 uppercase font-bold'>Bienvenue sur Movies</h1>
        <p className='text-gray-500'>Retrouver les films qui vous ont marqué !</p>
      </div>
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.TMDB_API_KEY}&language=fr&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}
import React from 'react'
import Image from "next/image";
import { getSession, useSession } from "next-auth/client";
import { Head } from 'next/document';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

const Movie = ({ result }) => {

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [session] = useSession();


  console.log(result)
  return (
    <div>

      <Header />
      {session ? (
        <Hero />
      ) : (
        <section>
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }

              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className='absolute inset-y-28 md:inset-y-auto  inset-x-4 md:inset-x-12 space-y-6 z-50"'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_name}
            </h1>
            <div className='flex items-center space-x-3 md:space-x-5'>
            <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>
            </div>
          </div>
        </section>
      )}



    </div>
  )
}

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      session,
      result: request,
    },
  };
}
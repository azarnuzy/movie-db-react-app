import React from 'react';
import { category, movieType, tvType } from '../api/tmdbApi';
import MovieLists from '../components/MovieLists';
import Slider from '../components/Slider';
import TitleSection from '../components/TitleSection';

export default function Home() {
  return (
    <div>
      <Slider />
      <TitleSection section={'homePopularMovie'} destination={'allMovie'}>
        Popular Movie
      </TitleSection>
      <MovieLists category={category.movie} type={movieType.popular} />
      <TitleSection section={'homePopularTV'} destination={'allTv'}>
        Popular TV Shows
      </TitleSection>
      <MovieLists category={category.tv} type={tvType.popular} />
    </div>
  );
}

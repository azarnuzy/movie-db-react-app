import React from 'react';
import { category, movieType } from '../api/tmdbApi';
import MovieLists from '../components/MovieLists';
import Slider from '../components/Slider';
import TitleSection from '../components/TitleSection';

export default function Home() {
  return (
    <div>
      <Slider />
      <TitleSection page={'home'} destination={'allMovie'}>
        Popular Movie
      </TitleSection>
      <MovieLists category={category.movie} type={movieType.popular} />
    </div>
  );
}

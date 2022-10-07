import React from 'react';
import { useParams } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';
import PageHeader from '../components/PageHeader';
export default function Catalog() {
  const { category } = useParams();
  let title;
  if (category === 'movie') {
    title = 'Popular Movies';
  }

  if (category === 'tv') {
    title = 'Popular TV Shows';
  }
  return (
    <div>
      <PageHeader>{title}</PageHeader>
      <MovieGrid category={category} />
    </div>
  );
}

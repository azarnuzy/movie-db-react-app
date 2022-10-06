import React from 'react';
import { useParams } from 'react-router-dom';
import { category as cate } from '../api/tmdbApi';
import PageHeader from '../components/PageHeader';
export default function Catalog() {
  const { category } = useParams();

  return (
    <div>
      <PageHeader>Popular Movies</PageHeader>
    </div>
  );
}

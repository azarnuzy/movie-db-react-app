import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
export default function Category() {
  const { category } = useParams();

  return (
    <div>
      <CategoryList category={category} />
    </div>
  );
}

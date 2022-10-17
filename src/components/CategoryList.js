import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../api/apiConfig';
import tmdbApi, { category as cate } from '../api/tmdbApi';
import { OutlineButton } from '../components/Button';
import MovieCard from '../components/MovieCard';
import PageHeader from '../components/PageHeader';

export default function CategoryList({ category }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = { api_key: apiConfig.apiKey, with_genres: id };

      switch (category) {
        case cate.movie:
          response = await tmdbApi.discover(cate.movie, { params });
          break;
        default:
          response = await tmdbApi.discover(cate.tv, { params });
      }

      setItems(response.results);
      setTotalPage(response.total_pages);
    };

    getList();
  }, [category, id]);

  const loadMore = async () => {
    let response = null;
    const params = {
      api_key: apiConfig.apiKey,
      page: page + 1,
      with_genres: id,
    };
    switch (category) {
      case cate.movie:
        response = await tmdbApi.discover(cate.movie, { params });
        break;
      default:
        response = await tmdbApi.discover(cate.tv, { params });
    }
    console.log(response);
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };
  console.log(category);
  return (
    <>
      <PageHeader>{category === 'movie' ? 'Movies' : 'Tv'} Category</PageHeader>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {items.map((item, i) => (
          <MovieCard
            category={category}
            item={item}
            mediaType={item.media_type}
            key={i}
            page="popularPage"
          />
        ))}
      </div>
      {page < totalPage ? (
        <OutlineButton
          onClick={loadMore}
          className="py-1 px-4 font-semibold flex justify-center mx-auto mt-4 text-lg text-lightRed border-solid border-lightRed border w-fit rounded-full"
        >
          Load More
        </OutlineButton>
      ) : null}
    </>
  );
}

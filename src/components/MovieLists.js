import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import { useWindowWidth } from '@react-hook/window-size';
import apiConfig from '../api/apiConfig';
import tmdbApi, { category as cate } from '../api/tmdbApi';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default function MovieLists({ category, type, id }) {
  const [items, setItems] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    const getList = async () => {
      try {
        let response = null;

        const params = { api_key: apiConfig.apiKey };
        if (type !== 'similar') {
          switch (category) {
            case cate.movie:
              response = await tmdbApi.getMoviesList(type, { params });
              break;
            default:
              response = await tmdbApi.getTvList(type, { params });
          }
        } else {
          response = await tmdbApi.similar(category, id, { params });
        }
        console.log(category, id);
        setItems(response.results);
      } catch (error) {}
    };

    getList();
  }, [category, id, type]);

  const getSlidesPerView = () => {
    if (width >= 1280) {
      return 5;
    } else if (width >= 1024) {
      return 4;
    } else if (width >= 768) {
      return 3;
    } else {
      return 2;
    }
  };

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        className="mySwiper"
        modules={[Autoplay]}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={category} page="homePage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function GenreList({ category, type }) {
  const [items, setItems] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    const getGenres = async () => {
      try {
        const params = { api_key: apiConfig.apiKey };
        const response = await tmdbApi.genres(type, { params });
        setItems(response.genres);
      } catch (error) {}
    };
    getGenres();
  }, [type]);

  const getSlidesPerView = () => {
    if (width >= 1280) {
      return 6;
    } else if (width >= 1024) {
      return 5;
    } else if (width >= 768) {
      return 4;
    } else {
      return 3;
    }
  };

  return (
    <div className="w-full mx-2">
      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={20}
        className="mySwiper"
        modules={[Autoplay]}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Link
              to={`/${category}/genres/${item.id}`}
              className="flex justify-center py-3 px-1 border-lightRed border-solid rounded-full border text-lightRed whitespace-nowrap"
            >
              {item.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

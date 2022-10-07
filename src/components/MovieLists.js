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

export default function MovieLists({ category, type, id }) {
  const [items, setItems] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = { api_key: apiConfig.apiKey };
      if (type !== 'similiar') {
        switch (category) {
          case cate.movie:
            response = await tmdbApi.getMoviesList(type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(type, { params });
        }
      } else {
        response = await tmdbApi.similar(category, id);
      }

      setItems(response.results);
    };

    getList();
  }, [category, id, type]);

  const getSlidesPerView = () => {
    if (width >= 1280) {
      return 4;
    } else if (width >= 1024) {
      return 3;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
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

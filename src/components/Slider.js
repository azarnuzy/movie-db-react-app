import React, { useEffect, useState } from 'react';
import apiConfig from '../api/apiConfig';
import tmdbApi, { movieType } from '../api/tmdbApi';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper';
import Button, { TrailerButton } from './Button';

export default function Slider() {
  const [movieItems, setMovieItems] = useState([]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="border-0 ${className}"></span>`;
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      const params = { api_key: apiConfig.apiKey, page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 4));
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full -z-[100]">
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        modules={[Autoplay, Pagination]}
      >
        {movieItems.map((item, i) => {
          const background = apiConfig.originalImage(
            item.backdrop_path ? item.backdrop_path : item.poster_path
          );
          return (
            <SwiperSlide key={i}>
              <div className="w-full h-[100vh] relative">
                <div className="bg-[#0006] absolute w-full h-[100vh]"></div>
                <img
                  className="absolute w-full h-[100vh] object-cover -z-[10]"
                  src={background}
                  alt=""
                />
                <div className="h-[100vh] transform translate-y-[40%] text-white mx-4">
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className=" text-md mb-3">
                    {item.overview.length > 200
                      ? `${item.overview.substring(0, 200)}...`
                      : item.overview}
                  </p>
                  <TrailerButton />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
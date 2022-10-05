import React, { useEffect, useState } from 'react';
import apiConfig from '../api/apiConfig';
import tmdbApi, { movieType } from '../api/tmdbApi';

export default function Slider() {
  const [movieItems, setMovieItems] = useState([]);

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

  console.log(movieItems);
  return <div>Slider</div>;
}

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '723efb5ac2ef3c9278d3e18eb6184aa3',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;

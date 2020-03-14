import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';

const getNews = (query = 'breaking news') => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=86efb1d9e5074721b8f151f282c7bcf7`,
    )
    .then(data => data.data.articles);
};
export default getNews;

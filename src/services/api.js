import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGUyNmQyNzE2MGFkMjk5MjEzYjFhMGRmYTM4ZmFmMCIsIm5iZiI6MTczNzc4MDc0NS41NDQsInN1YiI6IjY3OTQ2ZTA5OTQ4MTA5NTY1MTQ4Mzg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rw-7HLRlQD0umPNK7UUq9FWRuCQp74kABCNQWdLBgyk';

export const fetchFilm = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get(url, options)
    .then(response => {
      return response.data.results;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

export const fetchFilmSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

export const fetchFilmById = async (movie_id, word = '') => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}${word}?language=en-US`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

export const fetchFilmReviews = async (movie_id, page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=${page}`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

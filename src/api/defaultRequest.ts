import Config from 'react-native-config';

export const API_URL = 'https://ott-details.p.rapidapi.com/advancedsearch';
export const API_DETAIL_URL = 'https://movie-details1.p.rapidapi.com/imdb_api/movie';
export const API_TOP_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';
export const config = {
    params: {
        start_year: '2022',
        end_year: '2023',
        min_imdb: '7',
        max_imdb: '9',
        language: 'english',
        type: 'movie',
        sort: 'latest',
    },
    headers: {
        'X-RapidAPI-Key': Config.API_KEY,
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
};

import Config from 'react-native-config';

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

const API_KEY = '2a707a2a42a6c68a404ee3757ac15db4';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/topo_rated?api_key=${API_KEY}&language=en-US`,
    action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    scifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    movie: `/discover/movie?api_key=${API_KEY}&with_genres=10778`,
};
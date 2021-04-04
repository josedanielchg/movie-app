const NAME = "api.themoviedb",
     DOMAIN = `https://${NAME}.org`,
     SITE = `${DOMAIN}/3`,
     MOVIE = `${SITE}/movie`,
     SEARCH = `${SITE}/search/movie`,
     GENRE = `${SITE}/genre`,
     DISCOVER = `${SITE}/discover/movie`,
     POPULAR = `${DISCOVER}?sort_by=popularity.desc`,
     TRENDING = `${SITE}/trending/movie/day`;


export default  {
     NAME,
     DOMAIN,
     SITE,
     MOVIE,
     SEARCH,
     GENRE,
     DISCOVER,
     POPULAR,
     TRENDING
}
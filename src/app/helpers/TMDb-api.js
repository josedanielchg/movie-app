const NAME = "api.themoviedb",
     DOMAIN = `https://${NAME}.org`,
     SITE = `${DOMAIN}/3`,
     MOVIE = `${SITE}/movie`,
     SEARCH = `${SITE}/search/movie?query=`,
     GENRES = `${SITE}/genre/movie/list`,
     DISCOVER = `${SITE}/discover/movie`,
     POPULAR = `${DISCOVER}?sort_by=popularity.desc`,
     TRENDING = `${SITE}/trending/movie/day`,
     appendVideosImages = "?append_to_response=videos,images",
     appendVideosImagesCast = "?append_to_response=videos,images,casts",
     withGenres = "&with_genres=";


export default  {
     NAME,
     DOMAIN,
     SITE,
     MOVIE,
     SEARCH,
     GENRES,
     DISCOVER,
     POPULAR,
     TRENDING,
     appendVideosImages,
     appendVideosImagesCast,
     withGenres
}
const $ = (id) => document.querySelector(id);                                     


// Sections
const headerSection = $('#header');
const trendingPreviewSection = $('#trendingPreview');
const categoriesPreviewSection = $('#categoriesPreview');
const genericSection = $('#genericList');
const movieDetailSection = $('#movieDetail');
const likedMoviesSection = $('#liked');
const maxPageReached = $('#max-page');

// Lists & Containers
const searchForm = $('#searchForm');
const trendingMoviesPreviewList = $('.trendingPreview-movieList');
const categoriesPreviewList = $('.categoriesPreview-list');
const movieDetailCategoriesList = $('#movieDetail .categories-list');
const relatedMoviesContainer = $('.relatedMovies-scrollContainer');
const likedMoviesListArticle = $('.liked-movieList');

// Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const headerCategoryTitle = $('.header-title--categoryView');
const selectLanguage = $('#languages')
const favoriteBtn = $('.likeBtn--container');
const trendingPreviewTitle = $('.trendingPreview-title');
const trendingBtn = $('.trendingPreview-btn');

const searchFormInput = $('#searchForm input');
const searchFormBtn = $('#searchBtn');

const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');
const movieDetailImg = $('.imgMovieDetail');
const movieDetailRelease = $('.movieDetail-release');
const movieDetailRuntime = $('.movieDetail-runtime');

const favoriteMovies = [
    {
        id: 1,
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Sci-Fi, Action',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300'
    },
    {
        id: 2,
        title: 'The Matrix',
        director: 'The Wachowskis',
        year: 1999,
        genre: 'Sci-Fi, Action',
        imageUrl: 'https://picsum.photos/seed/{seed}/200/300'
    },
    {
        id: 3,
        title: 'Parasite',
        director: 'Bong Joon-ho',
        year: 2019,
        genre: 'Thriller, Black Comedy',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300'
    }
];

const movieListContainer = document.getElementById('movie-list-container');

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

function renderMovies() {
    movieListContainer.innerHTML = ''; 
    favoriteMovies.forEach(movie => {
        
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        
        const isLiked = localStorage.getItem(`liked_${movie.id}`) === 'true';
        const likedClass = isLiked ? 'liked' : '';

        movieCard.innerHTML = `
            <img src="${movie.imageUrl}" alt="${movie.title} poster">
            <h2>${movie.title}</h2>
            <div class="movie-details" id="details-${movie.id}">
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
            </div>
            <button class="show-details-btn">Show Details</button>
            <button class="like-button ${likedClass}" data-id="${movie.id}">&#x2764;</button>
        `;

        movieListContainer.appendChild(movieCard);
    });

    
    addEventListeners();
}


function addEventListeners() {
    
    document.querySelectorAll('.show-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const details = e.target.previousElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
                e.target.textContent = 'Show Details';
            } else {
                details.style.display = 'block';
                e.target.textContent = 'Hide Details';
            }
        });
    });


    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const movieId = e.target.dataset.id;
            const isLiked = e.target.classList.toggle('liked');

            
            localStorage.setItem(`liked_${movieId}`, isLiked);
        });
    });
}


document.addEventListener('DOMContentLoaded', renderMovies);
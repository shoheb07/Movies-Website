const movies = [
    {
        title: "Inception",
        year: "2010",
        poster: "https://via.placeholder.com/300x400?text=Inception"
    },
    {
        title: "Avengers: Endgame",
        year: "2019",
        poster: "https://via.placeholder.com/300x400?text=Endgame"
    },
    {
        title: "Interstellar",
        year: "2014",
        poster: "https://via.placeholder.com/300x400?text=Interstellar"
    },
    {
        title: "Joker",
        year: "2019",
        poster: "https://via.placeholder.com/300x400?text=Joker"
    }
];

const container = document.getElementById("movie-container");
const searchInput = document.getElementById("search");

function displayMovies(movieList) {
    container.innerHTML = "";

    movieList.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `;

        container.appendChild(movieEl);
    });
}

// Initial load
displayMovies(movies);

// Search functionality
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm)
    );

    displayMovies(filteredMovies);
});

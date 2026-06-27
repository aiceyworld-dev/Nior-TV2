// ======================================
// SmartTV OS v3
// ======================================

let allMovies = [];

const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");

// Load movie library
async function loadMovies() {
    try {
        const response = await fetch("movies.json");
        allMovies = await response.json();
        displayMovies(allMovies);
    } catch (err) {
        content.innerHTML = "<h2>Unable to load movie library.</h2>";
        console.error(err);
    }
}

// Display movies
function displayMovies(movies) {

    let html = `
        <h2 style="margin-bottom:25px;">🎬 Movie Library</h2>
        <div class="movieGrid">
    `;

    movies.forEach(movie => {

        html += `
            <div class="movieCard">

                <img
                    class="moviePoster"
                    src="${movie.poster}"
                    alt="${movie.title}"
                >

                <div class="movieTitle">
                    ${movie.title}
                </div>

                <div style="padding:10px;text-align:center;">
                    ${movie.category}
                </div>

                <div style="padding:10px;">
                    <button onclick="watchMovie('${movie.url}')">
                        Watch
                    </button>
                </div>

            </div>
        `;

    });

    html += "</div>";

    content.innerHTML = html;
}

// Search
function searchMovies() {

    const text = searchBox.value.toLowerCase();

    const filtered = allMovies.filter(movie =>

        movie.title.toLowerCase().includes(text) ||
        movie.category.toLowerCase().includes(text)

    );

    displayMovies(filtered);

}

// Watch
function watchMovie(url) {

    window.open(url, "_blank");

}

// Home
function goHome() {

    loadMovies();

}

// Launchers
function openYouTube() {

    window.open("https://www.youtube.com", "_blank");

}

function openKosmi() {

    window.open("https://kosmi.io", "_blank");

}

function showFavorites() {

    content.innerHTML = `
        <h2>⭐ Favorites</h2>
        <p>No favorites saved yet.</p>
    `;

}

// Search Listener
searchBox.addEventListener("keyup", searchMovies);

// Startup
window.onload = function () {

    goHome();

};

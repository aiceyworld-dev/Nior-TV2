// ========================================
// Smart TV v2.0
// Loads Movies From movies.json
// ========================================

const content = document.getElementById("content");

async function loadMovies()
{
    const response = await fetch("movies.json");
    const movies = await response.json();

    let html = `
        <h2>Movie Library</h2>

        <div class="movieGrid">
    `;

    movies.forEach(movie => {

        html += `

        <div class="movieCard">

            <img
            class="moviePoster"
            src="${movie.poster}"
            />

            <div class="movieTitle">

                ${movie.title}

            </div>

            <div style="padding:10px;">

                ${movie.category}

            </div>

            <button onclick="watchMovie('${movie.url}')">

                Watch

            </button>

        </div>

        `;

    });

    html += "</div>";

    content.innerHTML = html;
}

function watchMovie(url)
{
    window.location.href = url;
}

function goHome()
{
    loadMovies();
}

function openYouTube()
{
    window.location.href = "https://www.youtube.com";
}

function openKosmi()
{
    window.location.href = "https://kosmi.io";
}

window.onload = function()
{
    goHome();
};

// ======================================
// SmartTV App v1.0
// ======================================

const content = document.getElementById("content");

function goHome()
{
    content.innerHTML = `
        <h2>Welcome to Smart TV</h2>

        <div class="movieGrid">

            <div class="movieCard">
                <div class="movieTitle">📺 YouTube</div>
            </div>

            <div class="movieCard">
                <div class="movieTitle">🎬 Movies</div>
            </div>

            <div class="movieCard">
                <div class="movieTitle">📡 Kosmi</div>
            </div>

            <div class="movieCard">
                <div class="movieTitle">⭐ Favorites</div>
            </div>

        </div>
    `;
}

function openYouTube()
{
    window.location.href = "https://www.youtube.com/";
}

function openKosmi()
{
    window.location.href = "https://kosmi.io/";
}

function showFavorites()
{
    content.innerHTML =
    `
    <h2>Favorites</h2>

    <p>No favorites yet.</p>
    `;
}

window.onload = function()
{
    goHome();
};
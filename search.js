import { searchSongs } from "./api.js";

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", async (e) => {
    const query = e.target.value;
    if (query.length > 2) {
        const results = await searchSongs(query);
        displayResults(results.data);
    }
});

function displayResults(songs) {
    resultsDiv.innerHTML = songs
        .map(song => `
            <div class="p-2 bg-gray-800 rounded">
                <img src="${song.album.cover_medium}" alt="${song.title}" class="w-full rounded">
                <p>${song.title}</p>
            </div>
        `)
        .join("");
}

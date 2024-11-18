import { getPopularArtists, getPopularAlbums } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const artistsContainer = document.getElementById("popular-artists");
    const albumsContainer = document.getElementById("popular-albums");

    // Fetch and display popular artists
    const artistsData = await getPopularArtists();
    artistsContainer.innerHTML = artistsData.data
        .map(artist => `
            <div class="artist-card text-center transition hover:scale-105">
                <img src="${artist.picture_medium}" alt="${artist.name}" class="w-24 h-24 rounded-full mx-auto">
                <p class="mt-2 text-sm">${artist.name}</p>
            </div>
        `)
        .join("");

    // Fetch and display popular albums
    const albumsData = await getPopularAlbums();
    albumsContainer.innerHTML = albumsData.data
        .map(album => `
            <div class="album-card text-center bg-gray-800 p-4 rounded-lg hover:shadow-md transition">
                <img src="${album.cover_medium}" alt="${album.title}" class="w-full rounded-lg">
                <p class="mt-2 text-sm">${album.title}</p>
            </div>
        `)
        .join("");
});

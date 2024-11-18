const API_URL = "https://api.deezer.com";

export async function fetchAPI(endpoint) {
    try {
        const response = await fetch(`${API_URL}${endpoint}`);
        if (!response.ok) throw new Error("API fetch failed");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function getPopularArtists() {
    return fetchAPI("/chart/0/artists");
}

export async function getPopularAlbums() {
    return fetchAPI("/chart/0/albums");
}

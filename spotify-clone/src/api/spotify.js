export async function getSpotifyToken() {
    const clientId = "7d076889a9ec42e2abb9d07196a2baa8";
    const clientSecret = "693c9e98ae6644849a9dd7d7b3326d8f";
  
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
        },
        body: "grant_type=client_credentials",
      });
  
      if (!response.ok) throw new Error("Failed to fetch token");
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching Spotify token:", error);
      return null;
    }
  }
  
  export async function getFeaturedPlaylists(token) {
    const apiUrl = "https://api.spotify.com/v1/browse/featured-playlists";
  
    try {
      const response = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!response.ok) throw new Error("Failed to fetch playlists");
      const data = await response.json();
      return data.playlists.items;
    } catch (error) {
      console.error("Error fetching playlists:", error);
      return [];
    }
  }
  
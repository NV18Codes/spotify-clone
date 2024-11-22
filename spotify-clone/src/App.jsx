import React, { useEffect, useState } from "react";
import { getSpotifyToken, getFeaturedPlaylists } from "./api/spotify";

const App = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const token = await getSpotifyToken();
      if (token) {
        const playlists = await getFeaturedPlaylists(token);
        setPlaylists(playlists);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="p-4 border-b border-gray-800">
        <h1 className="text-3xl font-bold">Spotify Clone</h1>
      </header>
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg">
              <img
                src={playlist.images[0]?.url || ""}
                alt={playlist.name}
                className="rounded mb-4"
              />
              <h3 className="font-bold">{playlist.name}</h3>
              <p className="text-sm text-gray-400">{playlist.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

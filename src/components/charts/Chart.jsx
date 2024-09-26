import React, { useState } from "react";
import { browse } from "../assets/data/data"; // Array of songs
import { Card_sm } from "../common/Card_sm";

export const Chart = () => {
  // Initial Playlists
  const initialPlaylists = [
    {
      name: "My Favourite",
      songs: browse.slice(0, 4), // Example: first 4 songs
    },
    {
      name: "Trending",
      songs: browse.slice(4, 8), // Next 4 songs
    },
    {
      name: "New",
      songs: browse.slice(8, 12), // Another 4 songs
    },
  ];

  // States
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening and closing the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNewPlaylistName(""); // Reset the form inputs when closed
    setSelectedSongs([]);
  };

  // Function to handle song selection (checkbox)
  const handleSongSelection = (song) => {
    const alreadySelected = selectedSongs.includes(song);
    if (alreadySelected) {
      setSelectedSongs(selectedSongs.filter((s) => s !== song));
    } else {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  // Function to create a playlist
  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() && selectedSongs.length > 0) {
      const newPlaylist = {
        name: newPlaylistName,
        songs: selectedSongs.slice(0, 4), // Limit to 4 songs
      };
      setPlaylists([...playlists, newPlaylist]); // Add new playlist to state
      toggleModal(); // Close the modal
    }
  };

  return (
    <>
      <section className="playlists hero mt-8 sm:mt-20">
        <h1 className="text-5xl font-bold mb-5 text-primary">Playlists</h1>

        {/* Button to trigger playlist creation */}
        <button
          onClick={toggleModal}
          className="btn bg-primary text-white px-4 py-2 mb-6 rounded hover:bg-secondary transition"
        >
          Create New Playlist
        </button>

        {/* Display Playlists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {playlists.map((playlist, index) => (
            <div
              className="playlist-box bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300"
              key={index}
            >
              <h2 className="text-2xl font-bold mb-4">{playlist.name}</h2>

              {/* Grid for songs inside playlist (max 4 songs) */}
              <div className="grid grid-cols-2 gap-4">
                {playlist.songs.length > 0 ? (
                  playlist.songs.map((song, i) => (
                    <div
                      className="song-card box card p-2 bg-white shadow-md rounded-md"
                      key={i}
                    >
                      <Card_sm
                        cover={song.cover}
                        name={song.name}
                        tag={song.tag}
                        i={i}
                        show={true}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No songs yet. Add some songs to this playlist!
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for creating a new playlist */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-3xl font-bold mb-4">Create New Playlist</h2>

            {/* Playlist Name Input */}
            <input
              type="text"
              placeholder="Enter playlist name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              className="input w-full mb-4 p-2 border rounded"
            />

            {/* Song Selection */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Select Songs </h3>
              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {browse.map((song, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`song-${i}`}
                      onChange={() => handleSongSelection(song)}
                      checked={selectedSongs.includes(song)}
                      disabled={selectedSongs.length >= 50 && !selectedSongs.includes(song)} // Disable selection beyond 4 songs
                    />
                    <label htmlFor={`song-${i}`}>
                      {song.name} - {song.tag}
                    </label>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">You can select up to 50 songs.</p>
            </div>

            {/* Create Playlist Button */}
            <button
              onClick={handleCreatePlaylist}
              className="btn bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
            >
              Create Playlist
            </button>
            <button
              onClick={toggleModal}
              className="btn bg-gray-500 text-white px-4 py-2 ml-4 rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

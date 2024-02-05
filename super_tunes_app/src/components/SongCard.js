import React from "react";
import Rating from "./Rating";

const SongCard = ({ song, isFirst }) => {
  return (
    <div className={`song-card${isFirst ? ' first-song' : ''}`}>
      <img
        src={song.thumb}
        alt={`Thumbnail for ${song.title}`}
        style={{ width: "50px", height: "50px" }}
      />
      <div>
        <p className="song-title">{song.title}</p>
        <p>{song.artist}</p>
        <Rating value={song.rating} />
      </div>
    </div>
  );
};

export default SongCard;

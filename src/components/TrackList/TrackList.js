import React from 'react';
import './TrackList.css';

export default function TrackList({ tracks, setCurrentTrackIndex }) {
  return (
    <div className="trackListSection">
      <h1 className="rainTracks">Tracks</h1>
      {tracks.map((track, id) => (
        <div
          className="tracks"
          onClick={() => {
            setCurrentTrackIndex(id);
          }}
          key={track.id}
        >
          <h1 className="rainTrackName">{track.trackName}</h1>
          <img src="/images/cloud.svg" alt=""></img>
        </div>
      ))}
    </div>
  );
}

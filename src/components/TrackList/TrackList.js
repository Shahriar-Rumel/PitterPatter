import React from 'react';
import './TrackList.css';

export default function TrackList({
  tracks,
  setCurrentTrackIndex,
  isDarkMode
}) {
  return (
    <div className={isDarkMode ? 'trackListSectionDark' : 'trackListSection'}>
      <h1 className={isDarkMode ? 'rainTracksDark' : 'rainTracks'}>Tracks</h1>
      {tracks.map((track, id) => (
        <div
          className={isDarkMode ? 'tracksDark' : 'tracks'}
          onClick={() => {
            setCurrentTrackIndex(id);
          }}
          key={track.id}
        >
          <h1 className={isDarkMode ? 'rainTrackNameDark' : 'rainTrackName'}>
            {track.trackName}
          </h1>
          <img src="/images/cloud.svg" alt=""></img>
        </div>
      ))}
    </div>
  );
}

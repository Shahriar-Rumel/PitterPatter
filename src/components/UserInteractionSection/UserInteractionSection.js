import React from 'react';
import MusicBox from '../MusicBox/MusicBox';
import TimerSection from '../TimerSection/TimerSection';
import TrackList from '../TrackList/TrackList';
import './userInteractionSection.css';

export default function UserInteractionSection({
  currentTrackIndex,
  setCurrentTrackIndex,
  nextTrackIndex,
  tracks,
  isDarkMode
}) {
  return (
    <div className="UserInteractionSection">
      <MusicBox
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        isDarkMode={isDarkMode}
      />
      <TrackList
        tracks={tracks}
        setCurrentTrackIndex={setCurrentTrackIndex}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

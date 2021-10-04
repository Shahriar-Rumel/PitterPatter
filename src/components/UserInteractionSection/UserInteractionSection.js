import React from 'react';
import MusicBox from '../MusicBox/MusicBox';
import TimerSection from '../TimerSection/TimerSection';
import TrackList from '../TrackList/TrackList';
import './userInteractionSection.css';

export default function UserInteractionSection({
  currentTrackIndex,
  setCurrentTrackIndex,
  nextTrackIndex,
  tracks
}) {
  return (
    <div className="UserInteractionSection">
      <MusicBox
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
      <TrackList tracks={tracks} setCurrentTrackIndex={setCurrentTrackIndex} />
    </div>
  );
}

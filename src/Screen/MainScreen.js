import React, { useEffect, useState } from 'react';
import UserInteractionSection from '../components/UserInteractionSection/UserInteractionSection';
import './mainScreen.css';

export default function MainScreen() {
  const [tracks] = useState([
    {
      id: 1,
      trackName: 'Anchor',
      artist: 'Novo Amor',
      src: '../data/tracks/Anchor.mp3'
    },
    {
      id: 2,
      trackName: 'Thundering and Rain in Japan',
      artist: 'Walk in Japan',
      src: '/data/tracks/Thundering and Rain in Japan.mp3'
    },
    {
      id: 3,
      trackName: 'Who We Want To Be',
      artist: 'Tom Day',
      src: '../data/tracks/Who We Want To Be.mp3'
    },
    {
      id: 4,
      trackName: 'Tropical Thunderstorm Sounds',
      artist: 'Random feat. youtube',
      src: '../data/tracks/Tropical Thunderstorm  Rain Sounds For Sleep.mp3'
    }
  ]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [nextTrackIndex, setNextTrackIndex] = useState(currentTrackIndex + 1);
  useEffect(() => {
    setNextTrackIndex(() => {
      if (currentTrackIndex + 1 > tracks.length - 1) {
        return 0;
      } else {
        return currentTrackIndex + 1;
      }
    });
  }, [currentTrackIndex, tracks.length]);
  return (
    <div className="Main">
      <p className="SectionHeader">
        Soothing music for you to sleep peacefully at night or whenever you
        prefer to do so.Choose any track and you can also set the timer to auto
        pause the music.Larger tracks may take a few mniutes to load depending
        on your network bandwidth.
      </p>
      <UserInteractionSection
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        nextTrackIndex={nextTrackIndex}
        tracks={tracks}
      />
    </div>
  );
}

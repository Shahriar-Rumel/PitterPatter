import React, { useEffect, useRef, useState } from 'react';
import './MusicBox.css';
import { Pause, PlayArrow } from '@material-ui/icons';
import Lottie from 'lottie-web';
import TimerSection from '../TimerSection/TimerSection';
export default function MusicBox({
  tracks,
  currentTrackIndex,
  setCurrentTrackIndex,
  isDarkMode
}) {
  const musicBoxImage = useRef(null);
  const trackAudio = useRef(null);

  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(5);
  useEffect(() => {
    Lottie.loadAnimation({
      container: musicBoxImage.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./newCloud.json')
    });
  }, [musicBoxImage]);

  useEffect(() => {
    if (isPlaying) {
      trackAudio.current.play();
      trackAudio.current.volume *= volume / 10;
    } else {
      trackAudio.current.pause();
    }
  }, [
    trackAudio,
    isPlaying,
    setCurrentTrackIndex,
    currentTrackIndex,
    setVolume,
    volume
  ]);

  const skipTrack = (forward = true) => {
    if (forward) {
      setCurrentTrackIndex(() => {
        let tmp = currentTrackIndex;
        tmp++;
        if (tmp > tracks.length - 1) {
          tmp = 0;
        }
        return tmp;
      });
    } else {
      setCurrentTrackIndex(() => {
        let tmp = currentTrackIndex;
        tmp--;
        if (tmp < 0) {
          tmp = tracks.length - 1;
        }
        return tmp;
      });
    }
  };

  return (
    <>
      <TimerSection
        setPlaying={setPlaying}
        isPlaying={isPlaying}
        isDarkMode={isDarkMode}
      />
      <div className={isDarkMode ? 'musicBoxDark' : 'musicBox'}>
        <div
          className={isDarkMode ? 'musicBoxImageDark' : 'musicBoxImage'}
          ref={musicBoxImage}
        ></div>
        <div className="TrackSection">
          <div className={isDarkMode ? 'TrackNameDark' : 'TrackName'}>
            {tracks[currentTrackIndex].trackName}
          </div>
          <div className={isDarkMode ? 'TrackArtistDark' : 'TrackArtist'}>
            {tracks[currentTrackIndex].artist}
          </div>
        </div>
        <div className="buttonSection">
          <div className="PlayPrev">
            <button
              className="PlayPrevButton"
              onClick={() => {
                skipTrack(false);
              }}
            >
              <PlayArrow
                className={
                  isDarkMode ? 'PlayPrevButtonIconDark' : 'PlayPrevButtonIcon'
                }
              />
            </button>
          </div>
          <audio src={tracks[currentTrackIndex].src} ref={trackAudio}></audio>
          <div className={isDarkMode ? 'PlayDark' : 'Play'}>
            <button
              className="PlayButton"
              onClick={() => {
                setPlaying(!isPlaying);
              }}
            >
              {isPlaying && (
                <Pause
                  className={
                    isDarkMode ? 'PlayButtonIconDark' : 'PlayButtonIcon'
                  }
                />
              )}
              {!isPlaying && (
                <PlayArrow
                  className={
                    isDarkMode ? 'PlayButtonIconDark' : 'PlayButtonIcon'
                  }
                />
              )}
            </button>
          </div>
          <div className="PlayNext">
            <button
              className="PlayNextButton"
              onClick={() => {
                skipTrack();
              }}
            >
              <PlayArrow
                className={
                  isDarkMode ? 'PlayNextButtonIconDark' : 'PlayNextButtonIcon'
                }
              />
            </button>
          </div>
        </div>
        <div className="Volume">
          <select onChange={(e) => setVolume(e.target.value)}>
            <option value={volume}>Volume Level</option>
            <option value={volume}>1</option>
            <option value={volume}>5</option>
            <option value={volume}>10</option>
          </select>
        </div>
      </div>
    </>
  );
}

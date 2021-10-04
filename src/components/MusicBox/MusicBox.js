import React, { useEffect, useRef, useState } from 'react';
import './MusicBox.css';
import { Pause, PlayArrow } from '@material-ui/icons';
import Lottie from 'lottie-web';
import TimerSection from '../TimerSection/TimerSection';
export default function MusicBox({
  tracks,
  currentTrackIndex,
  setCurrentTrackIndex
}) {
  const musicBoxImage = useRef(null);
  const trackAudio = useRef(null);

  const [isPlaying, setPlaying] = useState(false);

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
      trackAudio.current.volume = 0.4;
    } else {
      trackAudio.current.pause();
    }
  }, [trackAudio, isPlaying, setCurrentTrackIndex, currentTrackIndex]);

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
      <TimerSection setPlaying={setPlaying} isPlaying={isPlaying} />
      <div className="musicBox">
        <div className="musicBoxImage" ref={musicBoxImage}></div>
        <div className="TrackSection">
          <div className="TrackName">{tracks[currentTrackIndex].trackName}</div>
          <div className="TrackArtist">{tracks[currentTrackIndex].artist}</div>
        </div>
        <div className="buttonSection">
          <div className="PlayPrev">
            <button
              className="PlayPrevButton"
              onClick={() => {
                skipTrack(false);
              }}
            >
              <PlayArrow className="PlayPrevButtonIcon" />
            </button>
          </div>
          <audio src={tracks[currentTrackIndex].src} ref={trackAudio}></audio>
          <div className="Play">
            <button
              className="PlayButton"
              onClick={() => {
                setPlaying(!isPlaying);
              }}
            >
              {isPlaying && <Pause className="PlayButtonIcon" />}
              {!isPlaying && <PlayArrow className="PlayButtonIcon" />}
            </button>
          </div>
          <div className="PlayNext">
            <button
              className="PlayNextButton"
              onClick={() => {
                skipTrack();
              }}
            >
              <PlayArrow className="PlayNextButtonIcon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

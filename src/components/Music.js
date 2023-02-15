import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
// import Wave from "./Wave";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const listenerRef = useRef(new THREE.AudioListener());

  useEffect(() => {
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(
      "https://cdn.jsdelivr.net/gh/niccolomiranda/chiara-luzzana/sound/mainSound.mp3",
      function (buffer) {
        if (!audioRef.current) {
          const audio = new THREE.Audio(listenerRef.current);
          audio.setBuffer(buffer);
          audio.setLoop(true);
          audio.setVolume(0.2);
          audioRef.current = audio;
        }
      }
    );
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    setTimeout(() => {
      audioRef.current.stop();
    }, 18000);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button className="music" onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default MusicPlayer;

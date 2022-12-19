import type { FC } from "react";
import { useEffect, useRef } from "react";
import type { VideoJsPlayerOptions, VideoJsPlayer } from "video.js";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface Props {
  options: VideoJsPlayerOptions;
}

const initialOptions: VideoJsPlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

const VideoPlayer: FC<Props> = ({ options }) => {
  const videoNode = useRef<HTMLVideoElement>(null);
  const player = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!videoNode.current) return () => {};

    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
    }).ready(() => {
      console.log("Video player is ready");
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js" />;
};

export default VideoPlayer;

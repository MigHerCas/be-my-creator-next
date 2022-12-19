import * as React from "react";
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

const VideoPlayer: React.FC<Props> = ({ options }) => {
  const videoNode = React.useRef<HTMLVideoElement>(null);
  const player = React.useRef<VideoJsPlayer | null>(null);

  React.useEffect(() => {
    if (!videoNode.current) return () => {};

    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
    }).ready(() => {
      // eslint-disable-next-line no-console
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

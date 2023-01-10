import type { FC, VideoHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface Props {
  source: string;
  options?: VideoHTMLAttributes<HTMLVideoElement>;
}

const VideoPlayer: FC<Props> = ({ source, options = {} }) => {
  const defaultOptions = {
    autoPlay: false,
    muted: true,
    loop: true,
    controls: true,
    preload: "auto",
    poster: "/images/poster.jpg",
    playsInline: true,
    controlsList: "nodownload",
  } as VideoHTMLAttributes<HTMLVideoElement>;

  const bundledOptions = {
    ...defaultOptions,
    ...options,
  };

  const notSupportedText =
    "Sorry, your browser doesn't support embedded videos.";

  return (
    <video {...bundledOptions} className={styles.video}>
      <source src={source} type="video/mp4" />
      {notSupportedText}
    </video>
  );
};

export default VideoPlayer;

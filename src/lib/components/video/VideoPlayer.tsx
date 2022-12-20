import type { FC, VideoHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface Props {
  source?: string;
}

const VideoPlayer: FC<Props> = ({ source = "/videos/trend.mp4" }) => {
  const options = {
    autoPlay: true,
    muted: true,
    loop: true,
    controls: true,
    preload: "auto",
    poster: "/images/poster.jpg",
  } as VideoHTMLAttributes<HTMLVideoElement>;

  return (
    <video {...options} className={styles.video}>
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;

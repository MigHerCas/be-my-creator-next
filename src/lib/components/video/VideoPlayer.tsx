import type { FC, VideoHTMLAttributes } from "react";

interface Props {
  source?: string;
}

const VideoPlayer: FC<Props> = ({ source = "/videos/trend.mp4" }) => {
  const options = {
    autoPlay: true,
    muted: true,
    loop: true,
    controls: true,
    height: "100%",
    preload: "auto",
    poster: "/images/poster.jpg",
  } as VideoHTMLAttributes<HTMLVideoElement>;

  return (
    <video {...options}>
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;

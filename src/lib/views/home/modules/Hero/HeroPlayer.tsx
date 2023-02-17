import { chakra, Flex } from "@chakra-ui/react";
import type { FC, VideoHTMLAttributes } from "react";

interface Props {
  source: string;
}

const HeroPlayer: FC<Props> = ({ source }) => {
  const videoOptions = {
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
    preload: "auto",
    poster:
      "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/images/video-capture-4965.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC9pbWFnZXMvdmlkZW8tY2FwdHVyZS00OTY1LnBuZyIsImlhdCI6MTY3NDE5OTM4NCwiZXhwIjoxNzA1NzM1Mzg0fQ.fg8qFO8OOLbrq8jGIVtCP6FbvMEPtZJ0v6AZ--R6ONs&t=2023-01-20T07%3A23%3A04.105Z",
    playsInline: true,
    "webkit-playsinline": "true",
    controlsList: "nodownload",
    "x5-playsinline": "true",
  } as VideoHTMLAttributes<HTMLVideoElement>;

  const notSupportedText =
    "Sorry, your browser doesn't support embedded videos.";

  const beforePseudoElementStyling = {
    content: '""',
    backgroundImage:
      "url(https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/frames/frame-tiktok.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC9mcmFtZXMvZnJhbWUtdGlrdG9rLndlYnAiLCJpYXQiOjE2NzY2MjYwNzQsImV4cCI6MTcwODE2MjA3NH0.rGhk89f28NvGcB2yxvJlmnD52FH_hoI8_oZkfzl85Cw&t=2023-02-17T09%3A27%3A54.642Z)",
    width: ["264px", null, null, "310px"],
    height: ["545", null, null, "640px"],
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
    top: 0,
    left: "50%",
    bottom: 0,
    transform: "translateX(-50%)",
    position: "absolute",
    objectFit: "cover",
    zIndex: 2,
  };

  return (
    <Flex
      pos="relative"
      alignItems="center"
      isolation="isolate"
      justifyContent="center"
      _before={beforePseudoElementStyling}
    >
      <chakra.video
        {...videoOptions}
        width={["264px", null, null, "310px"]}
        height={["545", null, null, "640px"]}
        borderRadius="52px"
        objectFit="cover"
      >
        <source src={source} type="video/mp4" />
        {notSupportedText}
      </chakra.video>
    </Flex>
  );
};

export default HeroPlayer;

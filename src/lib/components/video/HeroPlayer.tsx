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
      "url(https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/frames/frame-youtube.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC9mcmFtZXMvZnJhbWUteW91dHViZS53ZWJwIiwiaWF0IjoxNjc0MTkxNzMzLCJleHAiOjE3MDU3Mjc3MzN9.L1r47WRoD0pzbrdrVcN7bP3COVKqgP_o9Ai1c4v2fKw&t=2023-01-20T05%3A15%3A33.783Z)",
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

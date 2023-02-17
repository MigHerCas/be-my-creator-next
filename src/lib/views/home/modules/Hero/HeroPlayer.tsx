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
      "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629a1b846dd7d3528640ea03_How%20To%20Example%20Home-transcode%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YTFiODQ2ZGQ3ZDM1Mjg2NDBlYTAzX0hvdyBUbyBFeGFtcGxlIEhvbWUtdHJhbnNjb2RlICgxKS5tcDQiLCJpYXQiOjE2NzY2MjUzMTgsImV4cCI6MTcwODE2MTMxOH0.TAneDUGLXgLnWA-BLFucWtS2v5eYVpVca_mGSbJI4ic&t=2023-02-17T09%3A15%3A18.151Z",
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
      "url(https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/images/video-capture-2381.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC9pbWFnZXMvdmlkZW8tY2FwdHVyZS0yMzgxLnBuZyIsImlhdCI6MTY3NjYyNTc1OCwiZXhwIjoxNzA4MTYxNzU4fQ.a37MQNxxlQaOsrx_hbxHup3Fa5c9QHbkuu6fOYHpnKI&t=2023-02-17T09%3A22%3A38.457Z)",
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

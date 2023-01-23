import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import type { Dispatch, FC, SetStateAction } from "react";
import { Triangle } from "react-feather";

interface Props {
  id: string;
  videoUrl: string;
  posterUrl: string;
  setCurrentSource: Dispatch<SetStateAction<string>>;
  setCurrentPoster: Dispatch<SetStateAction<string>>;
  onOpen: () => void;
}

const SliderCard: FC<Props> = ({
  id,
  videoUrl,
  posterUrl,
  onOpen,
  setCurrentSource,
  setCurrentPoster,
}) => {
  const overlayStyle = {
    content: "''",
    backgroundImage:
      "radial-gradient(circle, rgba(39,39,39,0) 50%, rgba(39,39,39,1) 100%)",
    opacity: "0",
    height: "100%",
    width: "100%",
    borderRadius: "16px",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%,-50%)",
    transition: "opacity 250ms ease-in-out",
  };
  return (
    <Box
      tabIndex={0}
      h="560px"
      pos="relative"
      w="315px"
      flexShrink={0}
      bgColor="gray.200"
      borderRadius="20px"
      overflow="hidden"
      cursor="pointer"
      isolation="isolate"
      onClick={() => {
        setCurrentSource(videoUrl);
        setCurrentPoster(posterUrl);
        onOpen();
      }}
      role="group"
      _before={overlayStyle}
      _hover={{
        _before: {
          opacity: "0.3",
        },
      }}
    >
      {/* Fake play icon */}
      <Box
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%) scale(1)"
        bgColor="white"
        p={4}
        borderRadius="full"
        transition="transform 250ms ease-in-out"
        _groupHover={{
          transform: "translate(-50%, -50%) scale(1.1)",
        }}
        zIndex={2}
      >
        <Triangle
          width={20}
          height={20}
          stroke="#272727"
          fill="#272727"
          style={{ transform: "translateX(2px) rotate(90deg)" }}
        />
      </Box>

      {/* Poster image */}
      <Box
        transform="scale(1)"
        transition="transform 250ms ease-in-out"
        _groupHover={{
          transform: "scale(1.05)",
        }}
      >
        <NextImage
          src={posterUrl}
          height={560}
          width={315}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          priority
          alt={`Poster for video with id ${id}`}
        />
      </Box>

      {/* Video duration  */}
      <Box
        px={2}
        py={1}
        pos="absolute"
        bottom="-15%"
        right="5px"
        display="inline-block"
        bgColor="#272727"
        opacity="0.75"
        color="white"
        borderRadius="20px"
        zIndex={2}
        transition="all 250ms ease-in-out"
        _groupHover={{ bottom: "5px", opacity: 1 }}
      >
        0:15
      </Box>
    </Box>
  );
};

export default SliderCard;

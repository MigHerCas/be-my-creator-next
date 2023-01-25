import { Box } from "@chakra-ui/react";
import {
  SLIDER_CARD_WIDTH_SIZES,
  SLIDER_CARD_HEIGHT_SIZES,
  themeColors,
} from "@helpers/ui-values";
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
      w={SLIDER_CARD_WIDTH_SIZES}
      h={SLIDER_CARD_HEIGHT_SIZES}
      pos="relative"
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
          stroke={themeColors.darkGrey}
          fill={themeColors.darkGrey}
          style={{ transform: "translateX(2px) rotate(90deg)" }}
        />
      </Box>

      {/* Poster image */}
      <Box
        transform="scale(1)"
        w={SLIDER_CARD_WIDTH_SIZES}
        h={SLIDER_CARD_HEIGHT_SIZES}
        transition="transform 250ms ease-in-out"
        _groupHover={{
          transform: "scale(1.05)",
        }}
      >
        <NextImage
          src={posterUrl}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          priority={false}
          alt={`Poster for video with id ${id}`}
        />
      </Box>

      {/* Video duration TODO: dynamic  */}
      <Box
        px={2}
        py={1}
        pos="absolute"
        bottom="5px"
        right="5px"
        display="inline-block"
        bgColor={themeColors.darkGrey}
        opacity="0.75"
        color="white"
        borderRadius="20px"
        zIndex={2}
      >
        0:15
      </Box>
    </Box>
  );
};

export default SliderCard;

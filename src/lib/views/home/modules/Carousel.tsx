import { Box, Center, Heading } from "@chakra-ui/react";
import type { FC } from "react";
import { A11y, Lazy, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

const Slider: FC = () => {
  return (
    <Box>
      <Swiper
        modules={[A11y, Lazy, Autoplay]}
        spaceBetween={8}
        slidesPerView={4}
        autoplay
        loop
      >
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <SwiperSlide>
              <Box
                h="560px"
                w="315px"
                bgColor={index % 4 ? "gray.200" : "#00C4A2"}
                p="30px"
                borderRadius="20px"
              >
                Slide {index + 1}
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

const Carousel: FC = () => {
  return (
    <Box as="section">
      <Center>
        <Heading as="h2" size="md" mb={20}>
          Check some examples
        </Heading>
      </Center>
      <Slider />
    </Box>
  );
};

export default Carousel;

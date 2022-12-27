import { Box, Center, Heading } from "@chakra-ui/react";
import type { FC } from "react";
import { A11y, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";

const Slider: FC = () => {
  return (
    <Box>
      <Swiper
        modules={[A11y, Lazy]}
        spaceBetween={8}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiperInstance) => console.log(swiperInstance)}
      >
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <Box
                h="560px"
                w="315px"
                bgColor="gray.200"
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

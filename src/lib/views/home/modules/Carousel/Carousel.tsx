import { Box, Center, Heading } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import type { FC } from "react";
import { A11y, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import styles from "./styles.module.css";

const Slider: FC = () => {
  return (
    <Box>
      <Swiper
        modules={[A11y, Autoplay, EffectCoverflow]}
        slidesPerView="auto"
        spaceBetween={30}
        autoplay
        grabCursor
        autoHeight
        mousewheel
        loop
        effect="coverflow"
        coverflowEffect={{
          slideShadows: true,
          rotate: 25,
          modifier: 1,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <SwiperSlide className={styles.swiperSlide}>
              <Box
                h="560px"
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

      <Center mt={14}>
        <CTA href="">Book a demo</CTA>
      </Center>
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

import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import VideoPlayer from "@components/video/VideoPlayer";
import type { FC } from "react";
import { A11y, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import styles from "./styles.module.css";

const Slider: FC = () => {
  const videosToShow = [
    {
      id: "060Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629a1b846dd7d3528640ea03_How%20To%20Example%20Home-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YTFiODQ2ZGQ3ZDM1Mjg2NDBlYTAzX0hvdyBUbyBFeGFtcGxlIEhvbWUtdHJhbnNjb2RlLm1wNCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzI2Mzk1MSwiZXhwIjoxOTg4NjIzOTUxfQ.wHYsK6vIOQaEcJ9vWjZe_MQV3gP1jRVRNJNYNe9JonA&t=2023-01-09T11%3A32%3A31.060Z",
    },
    {
      id: "352Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629a1cc464c6711d28c1743e_Lifestyle%20Example%20Home-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YTFjYzQ2NGM2NzExZDI4YzE3NDNlX0xpZmVzdHlsZSBFeGFtcGxlIEhvbWUtdHJhbnNjb2RlLm1wNCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzI2Mzk5NywiZXhwIjoxOTg4NjIzOTk3fQ.I2ZdO-uModdapk62ihAcfRWIL9Rge9FOYZ3pMPR-K-M&t=2023-01-09T11%3A33%3A17.352Z",
    },
    {
      id: "152Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629b3e21ec16c9186733f3d5_Reel%20Demo%20Home-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YjNlMjFlYzE2YzkxODY3MzNmM2Q1X1JlZWwgRGVtbyBIb21lLXRyYW5zY29kZS5tcDQiLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzMyNjQwMDQsImV4cCI6MTk4ODYyNDAwNH0.ygfl9yTwuFzaZ4Yj4eFqJV1JGU8REab6KYbyGqV071E&t=2023-01-09T11%3A33%3A24.152Z",
    },
    {
      id: "925Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/63766dde50fc3a01667dc431_Nip%20Fab%20Example%20video-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjM3NjZkZGU1MGZjM2EwMTY2N2RjNDMxX05pcCBGYWIgRXhhbXBsZSB2aWRlby10cmFuc2NvZGUubXA0IiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjczMjY0MDE2LCJleHAiOjE5ODg2MjQwMTZ9.NTHetCieBVh-ER-37C7M0YvjnCDUQB7Dm1pmHeuXciU&t=2023-01-09T11%3A33%3A35.925Z",
    },
    {
      id: "529Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/63766d2c44af8e3162b68aae_ELEAT%20Example%20video-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjM3NjZkMmM0NGFmOGUzMTYyYjY4YWFlX0VMRUFUIEV4YW1wbGUgdmlkZW8tdHJhbnNjb2RlLm1wNCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzI2NDAxNCwiZXhwIjoxOTg4NjI0MDE0fQ.il0ACz0kfzN7UNDL1_FoS79KEZ2gxy16LiuyhfuflZ4&t=2023-01-09T11%3A33%3A34.529Z",
    },
    {
      id: "296Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/63638d80dcbdd3ea177ea345_WithU%20Example-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjM2MzhkODBkY2JkZDNlYTE3N2VhMzQ1X1dpdGhVIEV4YW1wbGUtdHJhbnNjb2RlLm1wNCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzI2NDAxMywiZXhwIjoxOTg4NjI0MDEzfQ.8h6PmdfP74rULP4HsjHo7z5xhRSviejULAfX5M7imK8&t=2023-01-09T11%3A33%3A33.296Z",
    },
    {
      id: "280Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/6300b9d370d108932c3d29e6_BRITHA%20Example-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjMwMGI5ZDM3MGQxMDg5MzJjM2QyOWU2X0JSSVRIQSBFeGFtcGxlLXRyYW5zY29kZS5tcDQiLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzMyNjQwMTIsImV4cCI6MTk4ODYyNDAxMn0.2l2hSQfrkkggnqNiRMwpFGV49q9WfUkcwA-fcuk07pM&t=2023-01-09T11%3A33%3A32.280Z",
    },
    {
      id: "375Z",
      url: "https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629b402d07d54f0aeb0b2848_Testimonial%20Demo%20Home%202-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YjQwMmQwN2Q1NGYwYWViMGIyODQ4X1Rlc3RpbW9uaWFsIERlbW8gSG9tZSAyLXRyYW5zY29kZS5tcDQiLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzMyNjQwMTAsImV4cCI6MTk4ODYyNDAxMH0.u2f4hhjLembepmNAWjGizMEFSPT22UhxjssUQFpW20k&t=2023-01-09T11%3A33%3A30.375Z",
    },
  ];
  return (
    <Box>
      <Swiper
        modules={[A11y, Autoplay, EffectCoverflow]}
        slidesPerView="auto"
        spaceBetween={30}
        autoplay
        grabCursor
        autoHeight
        centeredSlides
        mousewheel
        loop
        effect="coverflow"
        coverflowEffect={{
          slideShadows: true,
          rotate: 15,
          stretch: 40,
          modifier: 1,
        }}
      >
        {/* TODO: add key when populated with real data */}
        {videosToShow.map(({ id, url }, index) => {
          return (
            <SwiperSlide key={id} className={styles.swiperSlide}>
              {index === 4 ? (
                <Box
                  h="560px"
                  bgColor="#00C4A2"
                  p="30px"
                  borderRadius="20px"
                  display="flex"
                >
                  <Heading size="md" color="white" mt="30px" mb="auto">
                    TikTok influencers are ready to work with you
                  </Heading>
                </Box>
              ) : (
                <Box
                  h="560px"
                  bgColor="gray.200"
                  borderRadius="20px"
                  overflow="hidden"
                >
                  <VideoPlayer source={url} />
                </Box>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Flex mt={14} gap={4} justifyContent="center" wrap="wrap">
        <CTA href="/new-project" variant="secondary" icon="plus">
          Start your first project
        </CTA>
        <CTA href="/new-call" variant="primary" icon="arrow">
          Book a demo
        </CTA>
      </Flex>
    </Box>
  );
};

const Carousel: FC = () => {
  return (
    <Box
      as="section"
      py="60px"
      mx="clamp(-380px, calc((100vw - 1320px) / 2 * -1), -30px)"
    >
      <Center px="30px">
        <Heading as="h2" size="md" mb={20} textAlign="center">
          Check some examples
        </Heading>
      </Center>
      <Slider />
    </Box>
  );
};

export default Carousel;

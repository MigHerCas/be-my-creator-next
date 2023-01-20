import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import Layout from "@layout/Layout";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import NextLink from "next/link";
import type { ReactElement } from "react";

const BlogView: NextPageWithLayout = () => {
  return (
    <Box w="full" as="article">
      <NextSeo title="Blog post" />
      {/* Post title and meta */}
      <Box
        itemScope
        itemType="http://schema.org/Article"
        mx="auto"
        pt={[8, null, null, "90px"]}
        pb={[8, null, null, "30px"]}
        maxW="1000px"
        textAlign="center"
      >
        <Heading size="md" m={0}>
          The End of Moore’s Law?
        </Heading>
        <Heading size="sm" color="#8c8d91" my="20px">
          As chips are getting smaller, prices are going up
        </Heading>

        <Box>
          <Text size="xs" mb={1}>
            BY ANNA-SOFIA LESIV
          </Text>
          <Text size="xs" mt={0}>
            JANUARY 9, 2023
          </Text>
        </Box>
      </Box>

      <Flex
        position="relative"
        justifyContent="center"
        textAlign="center"
        mx={["-30px", null, "initial"]}
      >
        <figure>
          <NextImage
            src="https://d24ovhgu8s7341.cloudfront.net/uploads/post/cover/2427/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg"
            alt="sample text"
            width={900}
            height={700}
            loading="eager"
          />

          <figcaption
            style={{ color: "#8c8d91", marginTop: "8px", fontSize: "14px" }}
          >
            Alexandre Debieve / Unsplash
          </figcaption>
        </figure>
      </Flex>

      {/* Post body */}
      <Box maxW="760px" mx="auto" pt="60px">
        <Text marginBottom="20px">
          This phenomenon is responsible for creating the most valuable
          companies on Earth while completely redefining humanity&apos;s
          relationship with technology. So it’s particularly startling that all
          that is now in the past.
        </Text>
        <Text marginBottom="20px">
          “Moore’s Law is dead,” pronounced Nvidia’s CEO Jensen Huang in
          September 2022, before adding, “The idea that the chip is going to go
          down in price is a story of the past.”
        </Text>
        <Heading size="sm" fontFamily="body" mt="30px" fontSize="30px">
          A wild west of hardware
        </Heading>
        <Text marginBottom="20px">
          Today’s chips come packed with billions of transistors, capable of
          executing billions of instructions per second. The smallest
          transistors on the market are now hitting the 3 nanometer mark, a
          length equivalent to 15 Silicon atoms. But getting ever smaller
          presents tremendous financial, let alone physical, challenges, and
          many are bracing themselves for a world where achieving our digital
          dreams is only going to get more expensive from here.
        </Text>
        <Text marginBottom="20px">
          Every major company that relies on computing is exploring ways to
          approach this new normal. Some are rethinking the designs of chips in
          their devices while others are beefing up the number of silicon
          experts they have in house. We can trace the evolution of chip
          economics and design to better understand how we got here, and explore
          what the future might look like as a new chapter opens up in the world
          of hardware.
        </Text>
        <Heading size="sm" fontFamily="body" mt="30px" fontSize="30px">
          A wild west of hardware
        </Heading>
        <Text marginBottom="20px">
          Today’s chips come packed with billions of transistors, capable of
          executing billions of instructions per second. The smallest
          transistors on the market are now hitting the 3 nanometer mark, a
          length equivalent to 15 Silicon atoms. But getting ever smaller
          presents tremendous financial, let alone physical, challenges, and
          many are bracing themselves for a world where achieving our digital
          dreams is only going to get more expensive from here.
        </Text>
        <Text mb={0}>
          Every major company that relies on computing is exploring ways to
          approach this new normal. Some are rethinking the designs of chips in
          their devices while others are beefing up the number of silicon
          experts they have in house. We can trace the evolution of chip
          economics and design to better understand how we got here, and explore
          what the future might look like as a new chapter opens up in the world
          of hardware.
        </Text>

        {/* Post footer */}
        <Box>
          <Divider borderBottomWidth="2px" opacity="1" my="50px" />

          <Text marginBottom="20px" fontStyle="italic">
            Unless otherwise noted, source material including quotes in this
            piece comes from The Silicon Boys: And Their Valley of Dreams by
            David A. Kaplan.{" "}
            <Link as={NextLink} href="/" textDecor="underline">
              Link here
            </Link>
          </Text>

          <Divider borderBottomWidth="2px" opacity="1" my="50px" />

          <Box textAlign="center" mb="50px">
            <Heading size="sm">What did you think of this post</Heading>
            <Flex justifyContent="center" wrap="wrap" gap={2}>
              {["Amazing", "Good", "Meh", "Bad"].map((opinion) => (
                <Link as={NextLink} href="/">
                  <Badge
                    key={opinion}
                    colorScheme="gray"
                    variant="subtle"
                    p="10px 20px"
                    borderRadius="100px"
                    fontSize="16px"
                    textTransform="capitalize"
                  >
                    {opinion}
                  </Badge>
                </Link>
              ))}
            </Flex>
          </Box>

          <Flex
            height="320px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#272727"
            color="white"
            boxShadow="rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px"
            borderRadius={[0, null, "20px"]}
            mx={["-30px", null, "initial"]}
            mb={[0, null, "40px", "60px"]}
          >
            <Heading size="md" fontSize="28px" textAlign="center">
              Like this?
              <br />
              Become a suscriber
            </Heading>

            <CTA href="/new-project" variant="secondary" icon="arrow">
              Create your first campaign
            </CTA>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

BlogView.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogView;

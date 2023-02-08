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
import { themeColors } from "@helpers/ui-values";
import Layout from "@layout/Layout";
import type { NextPageWithLayout } from "@pages/_app";
import { Routes } from "@routes";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import NextLink from "next/link";
import type { ReactElement, ReactNode } from "react";

export interface BlogPageProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  imgSrc?: string;
  imgCaption?: string;
  body: Array<ContentBlock>;
  footerText?: string;
}

type ContentBlock = {
  type: "heading" | "paragraph";
  content: ReactNode;
};

const BlogView: NextPageWithLayout<BlogPageProps> = ({
  title,
  subtitle,
  body,
  imgSrc = "",
  imgCaption = "",
  author,
  footerText = "",
  date,
}) => {
  return (
    <Box w="full" as="article">
      <NextSeo title={`${title} | BeMyCreator`} description={subtitle} />
      {/* Post title and meta */}
      <Box
        as="header"
        itemScope
        itemType="http://schema.org/Article"
        mx="auto"
        pt={[8, null, null, "90px"]}
        pb={[8, null, null, "30px"]}
        maxW="1000px"
        textAlign="center"
      >
        <Heading size="md" m={0}>
          {title}
        </Heading>
        <Heading size="sm" color={themeColors.mediumGrey} my="20px">
          {subtitle}
        </Heading>

        <Box>
          <Text size="xs" mb={1}>
            BY {author}
          </Text>
          <Text size="xs" mt={0}>
            {date}
          </Text>
        </Box>
      </Box>

      {imgSrc?.length > 0 ? (
        <Flex
          position="relative"
          justifyContent="center"
          textAlign="center"
          mx={["-30px", null, "initial"]}
        >
          <figure>
            <NextImage
              src={imgSrc}
              alt={imgCaption}
              width={900}
              height={700}
              loading="eager"
            />

            <figcaption
              style={{
                color: themeColors.mediumGrey,
                marginTop: "8px",
                fontSize: "14px",
              }}
            >
              {imgCaption}
            </figcaption>
          </figure>
        </Flex>
      ) : null}

      {/* Post body */}
      <Box maxW="760px" mx="auto" pt="60px">
        {body.map(({ type, content }) => {
          if (type === "heading") {
            return (
              <Heading
                key={content?.toString()}
                as="h3"
                size="sm"
                fontFamily="body"
                mt="40px"
                fontSize="30px"
              >
                {content}
              </Heading>
            );
          }

          return (
            <Text key={content?.toString()} marginBottom="20px">
              {content}
            </Text>
          );
        })}

        {/* Post footer */}
        <Box>
          {footerText?.length ? (
            <>
              <Divider borderBottomWidth="2px" opacity="1" my="50px" />

              <Text marginBottom="20px" fontStyle="italic">
                {footerText}
              </Text>
            </>
          ) : null}
          <Divider borderBottomWidth="2px" opacity="1" my="50px" />
          <Box textAlign="center" mb="50px">
            <Heading size="sm">What did you think of this post</Heading>
            <Flex justifyContent="center" wrap="wrap" gap={2}>
              {["Amazing", "Good", "Meh", "Bad"].map((opinion) => (
                <Link as={NextLink} href={Routes.home}>
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
            backgroundColor={themeColors.darkGrey}
            color="white"
            boxShadow="rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px"
            borderRadius={[0, null, "20px"]}
            mx={["-30px", null, "initial"]}
            mb={[0, null, "40px", "60px"]}
          >
            <Heading size="md" fontSize="28px" textAlign="center">
              Like this?
              <br />
              Start your first UGC project
            </Heading>

            <CTA
              href={Routes.newProject}
              variant="secondary"
              icon="arrow"
              showDot
            >
              Find your creators
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

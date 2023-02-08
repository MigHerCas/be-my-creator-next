import { Box, Heading, Text } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";
import Layout from "@layout/Layout";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactNode } from "react";

export interface PlainPageProps {
  title: string;
  subtitle?: string;
  body: Array<ContentBlock>;
}

type ContentBlock = {
  type: "heading" | "paragraph";
  content: ReactNode;
};

const PlainPageView: NextPageWithLayout<PlainPageProps> = ({
  title,
  subtitle = "",
  body,
}: PlainPageProps) => {
  return (
    <>
      <NextSeo title={title} />
      <Box w="full" as="article" p={["30px", null, "60px"]}>
        <Box as="header" textAlign="center" mb="60px">
          <Heading as="h2">{title}</Heading>
          <Heading as="h3" size="sm" color={themeColors.mediumGrey}>
            {subtitle}
          </Heading>
        </Box>
        {body.map(({ type, content }) => {
          if (type === "heading") {
            return (
              <Heading as="h4" size="xs">
                {content}
              </Heading>
            );
          }

          return (
            <Text size="sm" mb="20px">
              {content}
            </Text>
          );
        })}
      </Box>
    </>
  );
};

PlainPageView.getLayout = function getLayout(page: JSX.Element) {
  return <Layout hideBlobs>{page}</Layout>;
};

export default PlainPageView;

import { Container, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { sampleText } from "@helpers/text";
import type { NextPage } from "next";
import NextLink from "next/link";

const StyleguideView: NextPage = () => {
  return (
    <Container>
      <NextLink href="/">Back home</NextLink>

      {/* Heading */}
      <Heading size="xl">Be My Creator!</Heading>
      <Heading size="lg">Be My Creator!</Heading>
      <Heading size="md">Be My Creator!</Heading>
      <Heading size="sm">Be My Creator!</Heading>
      <Heading size="xs">Be My Creator!</Heading>

      {/* Text */}
      <Text size="lg">{sampleText}</Text>
      <Text size="md">{sampleText}</Text>
      <Text size="sm">{sampleText}</Text>
      <Text size="xs">{sampleText}</Text>

      {/* CTA */}
      <CTA
        href=""
        variant="primary"
        icon="arrow"
        customStyles={{ marginBottom: "16px" }}
      >
        Get in touch
      </CTA>
      <CTA href="/demo" variant="secondary" icon="arrowExternal">
        Get in touch - external link
      </CTA>
    </Container>
  );
};

export default StyleguideView;

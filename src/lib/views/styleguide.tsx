import { Container, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { sampleText } from "@helpers/text";
import NextLink from "next/link";
import type { FC } from "react";

const Styleguide: FC = () => {
  return (
    <Container>
      <NextLink href="/" style={{ color: "#00c2ae" }}>
        Back home
      </NextLink>

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
      <CTA href="" customStyles={{ marginBottom: "16px" }}>
        Get in touch
      </CTA>
      <CTA href="" isExternal>
        Get in touch - external link
      </CTA>
    </Container>
  );
};

export default Styleguide;

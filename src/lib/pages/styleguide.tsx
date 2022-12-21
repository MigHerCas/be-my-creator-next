import { Container, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import CTA from "lib/components/cta/CTA";
import { sampleText } from "lib/helpers/text";

const Styleguide = () => {
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

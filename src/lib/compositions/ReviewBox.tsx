import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import type { FC } from "react";
import { Star, GitHub } from "react-feather";

const ReviewBox: FC = () => {
  return (
    <Grid
      as="section"
      gridTemplateColumns={["1fr", null, null, "repeat(12, 1fr)"]}
      p={[5, 10, 20]}
      backgroundColor="#272727"
      borderRadius="20px"
      isolation="isolate"
    >
      <Box
        color="white"
        backgroundColor="#00C4A2"
        borderRadius="12px"
        my={[0, null, null, "90px"]}
        minHeight={["350px", null, null, "420px"]}
        gridColumnStart={1}
        gridColumnEnd={7}
        gridRowStart={1}
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <GitHub width="70px" height="70px" fill="white" />
      </Box>

      <Box
        backgroundColor="#1b1b1b"
        borderRadius="12px"
        gridColumnStart={5}
        gridColumnEnd={-1}
        gridRowStart={[2, null, null, 1]}
        display={["none", null, null, "block"]}
      />
      <Box
        p={10}
        backgroundColor="#1b1b1b"
        color="white"
        maxW="700px"
        w={["90%", null, null, "auto"]}
        my="auto"
        mx="auto"
        mt={["-60px", null, null, "auto"]}
        borderRadius="12px"
        gridColumnStart={[1, null, null, 8]}
        gridColumnEnd={[-1, null, null, -1, -2]}
        gridRowStart={[2, null, null, 1]}
        zIndex={[2, null, null, "auto"]}
      >
        <Flex direction="column" gap={6}>
          {/* Rating stars */}
          <Flex direction="row" gap="5px">
            {Array.from({ length: 5 }).map(() => (
              <Star fill="#FCC54E" stroke="none" width={24} height={24} />
            ))}
          </Flex>

          {/* Review text */}
          <Box>
            <Heading size="sm">Great job!</Heading>
            <Text size="md" color="hsla(0, 0%, 100%, 0.5)">
              We work with businesses all over the world to bring new and
              established brands into the digital age with a digital-first
              approach.
            </Text>
          </Box>
          <HStack>
            <Avatar
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
              mr={2}
            />
            <Box>
              <Text size="xs" fontWeight={400} m={0}>
                Kent c. Dodds
              </Text>
              <Text
                size="xs"
                fontWeight={400}
                color="hsla(0, 0%, 100%, 0.5)"
                m={0}
              >
                Design director at Connor
              </Text>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </Grid>
  );
};

export default ReviewBox;

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
      px={["30px", null, "60px"]}
      py={["50px", null, "60px"]}
      borderRadius={["0", null, "20px"]}
      backgroundColor="#272727"
      isolation="isolate"
      mx={["-30px", null, "initial"]}
    >
      <Box
        color="white"
        backgroundColor="#00C4A2"
        borderRadius="12px"
        display={["none", null, null, "flex"]}
        my={[0, null, null, "90px"]}
        minHeight={["200px", "350px", null, "420px"]}
        gridColumnStart={1}
        gridColumnEnd={7}
        gridRowStart={1}
        zIndex={1}
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
        p="30px"
        backgroundColor="#1b1b1b"
        color="white"
        maxW="700px"
        my="auto"
        mx="auto"
        borderRadius="12px"
        gridColumnStart={[1, null, null, 8]}
        gridColumnEnd={[-1, null, null, -1, -2]}
        gridRowStart={[2, null, null, 1]}
        zIndex={[2, null, null, "auto"]}
      >
        <Flex direction="column" gap={6}>
          {/* Review text */}
          <Box pos="relative">
            {/* Blockquote svg */}
            <svg
              height="36"
              viewBox="0 0 49 36"
              width="49"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: "12px", width: "35px", height: "auto" }}
            >
              <path
                d="m39.8695652 36c5.4347826 0 9.1304348-3.5462687 9.1304348-9.1343284 0-4.9432835-3.2608696-8.1671641-7.9347826-8.1671641-1.0869565 0-1.8478261.2149253-2.6086957.2149253-1.1956521 0-2.0652174-.9671641-2.0652174-2.2567164 0-4.1910448 3.6956522-8.70447759 11.8478261-14.2925373l-1.1956521-2.3641791c-12.6086957 6.55522388-18.0434783 14.2925373-18.0434783 23.5343284 0 7.6298507 4.0217391 12.4656716 10.8695652 12.4656716zm-29 0c5.4347826 0 9.1304348-3.5462687 9.1304348-9.1343284 0-4.9432835-3.2608696-8.1671641-7.9347826-8.1671641-1.0869565 0-1.8478261.2149253-2.60869566.2149253-1.19565217 0-2.06521739-.9671641-2.06521739-2.2567164 0-4.1910448 3.69565215-8.70447759 11.84782605-14.2925373l-1.1956521-2.3641791c-12.60869569 6.55522388-18.0434783 14.2925373-18.0434783 23.5343284 0 7.6298507 4.02173913 12.4656716 10.8695652 12.4656716z"
                fill="#454545"
              />
            </svg>

            <Heading size="sm">Great job!</Heading>
            <Text size="md" color="hsla(0, 0%, 100%, 0.5)">
              We work with businesses all over the world to bring new and
              established brands into the digital age with a digital-first
              approach.
            </Text>
          </Box>
          {/* Rating stars */}
          <Flex direction="row" gap="5px">
            {Array.from({ length: 5 }).map(() => (
              <Star fill="#FCC54E" stroke="none" width={24} height={24} />
            ))}
          </Flex>

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

import { Flex, Heading } from "@chakra-ui/react";
import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  loadingMessage?: string;
}

const Spinner: FC<Props> = ({ loadingMessage = "Loading" }) => {
  return (
    <Flex flexDir="column" gap={8} alignItems="center">
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <Heading size="sm">{loadingMessage}</Heading>
    </Flex>
  );
};

export default Spinner;

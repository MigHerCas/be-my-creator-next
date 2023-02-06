import { Flex, Heading } from "@chakra-ui/react";

import styles from "./styles.module.css";

interface Props {
  loadingMessage?: string;
}

const Spinner = ({ loadingMessage = "Loading" }: Props) => {
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
